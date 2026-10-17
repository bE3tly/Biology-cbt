/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { db, auth } from './firebase';
import { collection, addDoc, query, orderBy, limit, getDocs } from 'firebase/firestore';

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  Mail,
  BookOpen, 
  Timer, 
  ChevronLeft, 
  ChevronRight, 
  Flag, 
  CheckCircle2, 
  AlertTriangle, 
  LogOut, 
  RefreshCw,
  Check,
  X,
  ShieldAlert,
  Award,
  BookMarked,
  Play,
  Pause,
  Keyboard,
  Filter,
  HelpCircle,
  Sun,
  Moon
} from "lucide-react";
import { Question } from "./types";
import { questionsPool } from "./questions";
import AdminPanel from "./components/AdminPanel";
import Leaderboard from "./components/Leaderboard";

// Helper function to shuffle any array
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Selects random questions from pool, shuffles questions, and shuffles options for each
function prepareExamSession(pool: Question[], count: number = 40) {
  // 1. Select unique random questions from the pool
  const shuffledPool = shuffleArray(pool);
  const selected = shuffledPool.slice(0, count);

  const shuffledOptionsList: string[][] = [];
  const correctIndexList: number[] = [];

  for (const q of selected) {
    const originalOptions = q.options;
    const correctAnswerString = originalOptions[q.answerIndex];
    
    // Create an array of option indices and shuffle them
    const indices = [0, 1, 2, 3];
    const shuffledIndices = shuffleArray(indices);
    
    // Map to actual option strings in the new shuffled order
    const shuffledOptions = shuffledIndices.map(idx => originalOptions[idx]);
    
    // Find where the correct answer ended up in the shuffled list
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswerString);

    shuffledOptionsList.push(shuffledOptions);
    correctIndexList.push(newCorrectIndex);
  }

  return {
    selected,
    shuffledOptionsList,
    correctIndexList
  };
}

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("chm102_theme") === "dark";
  });

  // Leaderboard state
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [personalRank, setPersonalRank] = useState<number | null>(null);

  const fetchLeaderboard = async () => {
    try {
      const q = query(collection(db, "scores"), orderBy("score", "desc"), orderBy("timeToFinish", "asc"), limit(50));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLeaderboard(data);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

  const submitScore = async (finalScore: number, finalTime: number) => {
    try {
      await addDoc(collection(db, "scores"), {
        userName: name,
        score: finalScore,
        date: new Date().toISOString(),
        timeToFinish: 900 - finalTime
      });
      await fetchLeaderboard();
    } catch (error) {
      console.error("Error submitting score:", error);
    }
  };

  // User Login details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Session Mode and Interactive Settings (Simplified: Removed modes)
  const [showInstantFeedback, setShowInstantFeedback] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);

  // Corrections Filter State
  const [correctionFilter, setCorrectionFilter] = useState<"all" | "correct" | "incorrect" | "skipped">("all");

  // Session Control States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [instructionsAccepted, setInstructionsAccepted] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showSubmittedOverlay, setShowSubmittedOverlay] = useState(false);

  // Question Set States
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [shuffledOptionsList, setShuffledOptionsList] = useState<string[][]>([]);
  const [correctIndexList, setCorrectIndexList] = useState<number[]>([]);

  // Navigation and User Progress
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({}); // index (0..39) -> chosen shuffled index (0..3)
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});

  // Countdown State
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  // Disqualification Sensor State
  const [disqualified, setDisqualified] = useState(false);
  const [disqualifiedReason, setDisqualifiedReason] = useState("");

  // Grading Result States
  const [scorePercent, setScorePercent] = useState(0);
  const [scorePoints, setScorePoints] = useState(0);
  const [grade, setGrade] = useState("");
  const [remark, setRemark] = useState("");

  // Refs for tracking timer and prevent multiple triggers
  const submitTriggeredRef = useRef(false);


  // Timer countdown hook
  useEffect(() => {
    if (!testStarted || testSubmitted || timerPaused) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          if (!submitTriggeredRef.current) {
            submitTriggeredRef.current = true;
            handleAutoSubmit();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [testStarted, testSubmitted, timerPaused]);

  // Scroll mobile active navigation item into view
  useEffect(() => {
    if (testStarted && !testSubmitted) {
      const el = document.getElementById(`q-nav-mob-${currentQuestionIndex}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [currentQuestionIndex, testStarted, testSubmitted]);

  // Handle Login & Initialize randomized pool of questions
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    // Reset disqualification if active
    setDisqualified(false);

    // Pick dynamic number of questions
    const questionCount = 30;
    const session = prepareExamSession(questionsPool, questionCount);
    setSelectedQuestions(session.selected);
    setShuffledOptionsList(session.shuffledOptionsList);
    setCorrectIndexList(session.correctIndexList);

    // Initial state setup for new exam run
    setUserAnswers({});
    setFlaggedQuestions({});
    setCurrentQuestionIndex(0);
    setTimeLeft(900); // 15 minutes
    setTimerPaused(false);
    setCorrectionFilter("all");
    submitTriggeredRef.current = false;

    try {
        await addDoc(collection(db, "users"), {
            name,
            email,
            registrationDate: new Date().toISOString(),
            isAdmin: false
        });
    } catch (error) {
        console.error("Error registering user:", error);
    }

    setIsLoggedIn(true);
    fetchLeaderboard();
  };

  // Start Exam after instructions page
  const handleStartExam = () => {
    setInstructionsAccepted(true);
    setTestStarted(true);
  };

  // Option selection handler
  const handleOptionSelect = (optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  // Flag or unflag current question for review
  const toggleFlag = () => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [currentQuestionIndex]: !prev[currentQuestionIndex],
    }));
  };

  // Keyboard Navigation & Shortcuts Hook
  useEffect(() => {
    if (!testStarted || testSubmitted || timerPaused) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if focus is inside input or textarea
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return;
      }

      const key = e.key.toLowerCase();
      
      // Question Navigation: Arrow keys
      if (key === "arrowleft") {
        setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
      } else if (key === "arrowright") {
        setCurrentQuestionIndex((prev) => Math.min(39, prev + 1));
      }
      
      // Choose Options: Keys A, B, C, D or 1, 2, 3, 4
      if (key === "a" || key === "1") {
        handleOptionSelect(0);
      } else if (key === "b" || key === "2") {
        handleOptionSelect(1);
      } else if (key === "c" || key === "3") {
        handleOptionSelect(2);
      } else if (key === "d" || key === "4") {
        handleOptionSelect(3);
      }

      // Flag Current Question: Key F
      if (key === "f") {
        toggleFlag();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Visibility change listener for anti-cheating
    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert("You left the tab! Disqualifying...");
        setDisqualified(true);
        setDisqualifiedReason("You left the examination tab.");
        handleRestartSession();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [testStarted, testSubmitted, timerPaused, currentQuestionIndex, shuffledOptionsList]);

  // Admin panel state
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);


  // Automatic submit (Time Runs Out)
  const handleAutoSubmit = () => {
    setTestSubmitted(true);
    setShowSubmittedOverlay(true);
    setShowSubmitModal(false);

    setTimeout(() => {
      setShowSubmittedOverlay(false);
      calculateFinalResults();
    }, 2000);
  };

  // Manual submit trigger
  const handleManualSubmit = () => {
    if (submitTriggeredRef.current) return;
    submitTriggeredRef.current = true;

    setTestSubmitted(true);
    setShowSubmitModal(false);
    setShowSubmittedOverlay(true);

    setTimeout(() => {
      setShowSubmittedOverlay(false);
      calculateFinalResults();
    }, 2000);
  };

  // Process score calculations, percentage, and map to specific grade letters/remarks
  const calculateFinalResults = async () => {
    let correctCount = 0;
    const totalQuestions = selectedQuestions.length || 40;
    for (let i = 0; i < totalQuestions; i++) {
      const chosen = userAnswers[i];
      const correct = correctIndexList[i];
      if (chosen !== undefined && chosen === correct) {
        correctCount++;
      }
    }

    const percentage = (correctCount / totalQuestions) * 100;
    const scoreVal = (correctCount / totalQuestions) * 70; // 70 total marks limit

    // Grade ranges mapping exactly as requested:
    // 75-100%: Grade A (good remark)
    // 60-74%: Grade B (good remark also)
    // 50-59%: Grade C (little good encouraging remark)
    // 40-49%: Grade D (try again pass remark)
    // 30-39%: Grade E (try again remark)
    // 0-29%: Grade F (study harder next time remark)
    let letter = "F";
    let comment = "";

    if (percentage >= 75) {
      letter = "A";
      comment = "A - Outstanding Achievement! You have displayed excellent knowledge and complete mastery of the biology syllabus, including cellular biology, genetics, ecology, and plant/animal physiology. Commendable work!";
    } else if (percentage >= 60) {
      letter = "B";
      comment = "B - Very Good Performance! A solid, highly commendable result proving you have grasped key biological concepts, ecological relationships, and life processes.";
    } else if (percentage >= 50) {
      letter = "C";
      comment = "C - Good Effort! A fair pass. With a little more consistency and revision on cell structures, Mendelian laws, and nutrient cycles, you can easily reach an 'A' grade.";
    } else if (percentage >= 40) {
      letter = "D";
      comment = "D - Pass. A boundary score indicating you have passed the minimum thresholds, but you should definitely review plant/animal reproduction and evolutionary theories to solidify your foundations.";
    } else if (percentage >= 30) {
      letter = "E";
      comment = "E - Poor Attempt. You did not meet the satisfactory target. Please study the digestive, respiratory, and circulatory systems thoroughly and try again.";
    } else {
      letter = "F";
      comment = "F - Needs Improvement. Please study much harder next time. Re-read the lecture notes on microscopy, pests and diseases, and biological organization to bolster your knowledge.";
    }

    setScorePercent(percentage);
    setScorePoints(scoreVal);
    submitScore(scoreVal, timeLeft);
    try {
        await addDoc(collection(db, "test_results"), {
            userId: email, // Using email as user ID for simplicity
            userName: name,
            score: scoreVal,
            date: new Date().toISOString(),
            timeToFinish: 900 - timeLeft
        });
    } catch (error) {
        console.error("Error saving result:", error);
    }
    setGrade(letter);
    setRemark(comment);
  };

  // Exit result and go back to login for another try
  const handleRestartSession = () => {
    setIsLoggedIn(false);
    setInstructionsAccepted(false);
    setTestStarted(false);
    setTestSubmitted(false);
    setUserAnswers({});
    setFlaggedQuestions({});
    setCurrentQuestionIndex(0);
    setTimeLeft(900);
    setTimerPaused(false);
    setCorrectionFilter("all");
    submitTriggeredRef.current = false;
  };

  // Format time display as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`min-h-screen font-sans flex flex-col justify-between selection:bg-teal-100 selection:text-teal-900 transition-colors duration-200 ${darkMode ? "dark bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`}>
      
      {/* Dynamic Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-1.5 sm:py-3 px-3 sm:px-6 sticky top-0 z-40 shadow-xs transition-colors duration-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center space-x-1.5 sm:space-x-3 min-w-0">
            <div className="p-1 sm:p-2 bg-slate-900 dark:bg-slate-800 text-white rounded-lg shrink-0 hidden xs:block">
              <BookMarked className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-teal-400 dark:text-teal-300" />
            </div>
            <div className="min-w-0">
              <h1 className="font-display font-bold text-slate-900 dark:text-white tracking-tight text-xs sm:text-base md:text-lg truncate">
                Biology CBT Portal
              </h1>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate hidden sm:block">
                Biology &bull; Comprehensive CBT Practice
              </p>
            </div>
          </div>

          {testStarted && !testSubmitted && (
            <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
              <div className="flex items-center space-x-1 sm:space-x-2 bg-slate-100 dark:bg-slate-800 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <Timer className={`w-3.5 h-3.5 text-slate-600 dark:text-slate-300 ${timerPaused ? "" : "animate-pulse"}`} />
                <div className={`font-mono font-bold text-xs sm:text-sm tracking-wider ${timeLeft <= 120 ? "text-rose-600 animate-pulse font-extrabold" : "text-slate-900 dark:text-slate-100"}`}>
                  {formatTime(timeLeft)}
                </div>
              </div>
              
              {false && (
                <button
                  onClick={() => setTimerPaused(!timerPaused)}
                  title={timerPaused ? "Resume Timer" : "Pause Timer"}
                  className="p-1 sm:p-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 transition duration-150 cursor-pointer active:scale-95 flex items-center justify-center"
                >
                  {timerPaused ? (
                    <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                  ) : (
                    <Pause className="w-3.5 h-3.5 text-slate-600 fill-slate-600 dark:text-slate-300 dark:fill-slate-300" />
                  )}
                </button>
              )}
            </div>
          )}

          <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
            {isLoggedIn && (
              <div className="hidden md:flex items-center space-x-2 text-xs bg-slate-50 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-semibold text-slate-600 dark:text-slate-300">{name}</span>
                <span className="text-slate-300 dark:text-slate-750">|</span>
                <span className="text-slate-500 dark:text-slate-400">{email}</span>
              </div>
            )}

            {/* Leaderboard Toggle */}
            <button
              onClick={() => setShowLeaderboard(true)}
              title="Open Leaderboard"
              className="px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 transition duration-150 cursor-pointer active:scale-95 flex items-center justify-center shadow-3xs font-semibold text-xs"
            >
              Leaderboard
            </button>

            {/* Dark mode Toggle */}
            <button
              type="button"
              onClick={() => {
                setDarkMode(prev => {
                  const newVal = !prev;
                  localStorage.setItem("chm102_theme", newVal ? "dark" : "light");
                  return newVal;
                });
              }}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-1.5 sm:p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 transition duration-150 cursor-pointer active:scale-95 flex items-center justify-center shadow-3xs"
            >
              {darkMode ? (
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 dark:text-slate-400" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className={`flex-1 w-full max-w-7xl mx-auto px-2 sm:px-6 py-3 sm:py-8 flex flex-col ${testStarted && !testSubmitted ? "justify-start" : "justify-center"}`}>
        
        {/* Disqualified Warn Notice */}
        {disqualified && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl mx-auto bg-rose-50 border border-rose-200 rounded-2xl p-6 md:p-8 shadow-sm text-center mb-8"
          >
            <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-slate-900 text-xl md:text-2xl mb-3">
              Exam Session Terminated
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {disqualifiedReason}
            </p>
            <button
              onClick={() => setDisqualified(false)}
              className="inline-flex items-center space-x-2 px-6 py-2.5 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-slate-800 transition duration-150 active:scale-95 cursor-pointer shadow-sm"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Acknowledge & Re-register</span>
            </button>
          </motion.div>
        )}

        {!disqualified && (
          <AnimatePresence mode="wait">
            
            {/* VIEW 1: LOGIN SESSION */}
            {!isLoggedIn && (
              <motion.div
                key="login"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-md mx-auto"
              >
                <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xs p-6 md:p-8">
                  <div className="text-center mb-6">
                    <span className="text-xs font-bold tracking-widest text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-full">
                      CBT Exam Session
                    </span>
                    <h2 className="font-display font-extrabold text-slate-900 text-2xl mt-3 tracking-tight">
                      Candidate Registry
                    </h2>
                    <p className="text-slate-500 text-xs mt-1">
                      Enter correct credentials below to download and launch the exam paper.
                    </p>
                  </div>

                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. John Doe"
                          className="w-full pl-11 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 focus:bg-white transition duration-150"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. john.doe@example.com"
                          className="w-full pl-11 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 focus:bg-white transition duration-150"
                        />
                      </div>
                    </div>


                    <button
                      type="submit"
                      className="w-full py-2.5 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-slate-800 active:scale-[0.99] transition duration-150 cursor-pointer shadow-xs mt-2 flex items-center justify-center space-x-2"
                    >
                      <span>Proceed to Instructions</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {/* VIEW 2: INSTRUCTIONS & LEADERBOARD */}
            {isLoggedIn && !instructionsAccepted && (
              <motion.div
                key="instructions"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Instructions Panel */}
                <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xs p-6">
                  <h2 className="font-display font-extrabold text-slate-900 text-xl mb-4 tracking-tight border-b border-slate-100 pb-3">
                    Biology CBT Instructions
                  </h2>
                  <div className="text-sm text-slate-600 space-y-4 mb-6 leading-relaxed">
                    <p className="font-semibold text-slate-900">
                      Welcome, <span className="text-teal-600">{name}</span> (<span className="text-slate-500 font-normal">{email}</span>). Please read the following guidelines carefully before commencing.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                      <div className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-slate-900 block text-xs">Questions Count</strong>
                          <span className="text-xs text-slate-500">30 random tricky questions.</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-slate-900 block text-xs">Time Allowed</strong>
                          <span className="text-xs text-slate-500">15 minutes.</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-slate-900 block text-xs">Maximum Score</strong>
                          <span className="text-xs text-slate-500">70 total marks (equal weights).</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-bold text-slate-900 text-sm mt-4 uppercase tracking-wider">Exam Best Practices:</h3>
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-600 pl-2">
                      <li>Use the Question grid to jump freely between active and skipped items.</li>
                      <li>Flag questions if you want to remember to inspect them later.</li>
                      <li>Review your answers thoroughly before clicking 'Submit Exam'.</li>
                    </ul>
                  </div>
                  <button
                      onClick={handleStartExam}
                      className="w-full py-2.5 bg-slate-900 text-white font-semibold text-sm rounded-xl hover:bg-slate-800 transition duration-150 cursor-pointer shadow-xs flex items-center justify-center space-x-2"
                    >
                      <span>Start Exam</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Leaderboard Panel */}
                <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xs p-6">
                  <h2 className="font-display font-extrabold text-slate-900 text-xl mb-4 tracking-tight border-b border-slate-100 pb-3">
                    Leaderboard (Top 50)
                  </h2>
                  <div className="overflow-y-auto max-h-[300px]">
                    <table className="w-full text-xs text-left">
                      <thead className="text-slate-500 uppercase border-b">
                        <tr>
                          <th className="px-2 py-2">Rank</th>
                          <th className="px-2 py-2">Name</th>
                          <th className="px-2 py-2">Score</th>
                          <th className="px-2 py-2">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaderboard.map((entry, index) => (
                          <tr key={entry.id} className="border-b">
                            <td className="px-2 py-2">{index + 1}</td>
                            <td className="px-2 py-2 font-semibold">{entry.userName}</td>
                            <td className="px-2 py-2">{entry.score.toFixed(1)}</td>
                            <td className="px-2 py-2">{new Date(entry.date).toLocaleDateString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 3: MAIN EXAMINATION */}
            {testStarted && !testSubmitted && (
              <div className="relative w-full">
                <AnimatePresence>
                  {timerPaused && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-white/80 backdrop-blur-md z-30 rounded-2xl flex flex-col items-center justify-center text-center p-6"
                    >
                      <Pause className="w-12 h-12 text-slate-400 mb-3 animate-pulse" />
                      <h3 className="font-display font-bold text-slate-800 text-lg mb-1">
                        Exam Session Paused
                      </h3>
                      <p className="text-xs text-slate-500 max-w-xs mb-4">
                        Your Practice Mode timer has been suspended. Click the button below to resume your assessment.
                      </p>
                      <button
                        onClick={() => setTimerPaused(false)}
                        className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition duration-150 cursor-pointer active:scale-95 flex items-center space-x-1 shadow-sm"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Resume Test</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  key="examination"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`w-full flex flex-col lg:flex-row gap-4 sm:gap-6 items-start ${timerPaused ? "pointer-events-none filter blur-[1px]" : ""}`}
                >
                  
                  {/* Left Side: Question Pane */}
                  <div className="flex-1 w-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xs p-3 sm:p-6 flex flex-col justify-between min-h-0 sm:min-h-[440px] transition-colors duration-200">
                    
                    {/* Top Segmented Progress Line */}
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mb-3.5 sm:mb-5 overflow-hidden flex">
                      {selectedQuestions.map((_, idx) => {
                        const isCurrent = idx === currentQuestionIndex;
                        const isAnswered = userAnswers[idx] !== undefined;
                        const isFlagged = flaggedQuestions[idx] === true;

                        let color = "bg-slate-200/60 dark:bg-slate-800";
                        if (isAnswered) {
                          color = "bg-slate-800 dark:bg-slate-200";
                        }
                        if (isFlagged) {
                          color = "bg-amber-400";
                        }
                        if (isCurrent) {
                          color = "bg-teal-500 ring-1 ring-teal-400";
                        }

                        return (
                          <div 
                            key={idx} 
                            className={`h-full flex-1 border-r border-white dark:border-slate-900 last:border-r-0 ${color}`}
                          />
                        );
                      })}
                    </div>
                  
                  {/* Top: Header of Question Pane with Submit Button */}
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2 mb-3.5 sm:pb-4 sm:mb-5">
                      {/* Left side info */}
                      <div className="flex items-center space-x-1.5 sm:space-x-3">
                        <span className="text-[10px] sm:text-xs font-bold font-mono tracking-wider text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md uppercase">
                          Question {currentQuestionIndex + 1} of {selectedQuestions.length}
                        </span>
                        {flaggedQuestions[currentQuestionIndex] && (
                          <span className="flex items-center space-x-1 text-[10px] sm:text-xs text-amber-600 dark:text-amber-400 font-semibold bg-amber-50 dark:bg-amber-950/20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-amber-200 dark:border-amber-900/40">
                            <Flag className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-500" />
                            <span className="hidden xs:inline">Flagged</span>
                          </span>
                        )}
                      </div>

                      {/* Right side actions - Submit & Desktop Flag */}
                      <div className="flex items-center space-x-1.5 sm:space-x-2">
                        {/* Desktop-only Flag button */}
                        <button
                          onClick={toggleFlag}
                          className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold transition duration-150 cursor-pointer active:scale-95"
                        >
                          <Flag className={`w-3.5 h-3.5 ${flaggedQuestions[currentQuestionIndex] ? "fill-amber-500 text-amber-600" : ""}`} />
                          <span>{flaggedQuestions[currentQuestionIndex] ? "Unflag" : "Flag Item"}</span>
                        </button>

                        {/* Submit Button (TAKEN UP!) */}
                        <button
                          onClick={() => setShowSubmitModal(true)}
                          className="px-2.5 py-1 sm:px-4 sm:py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-[10px] sm:text-xs rounded-lg sm:rounded-xl transition duration-150 cursor-pointer flex items-center space-x-1 shadow-xs active:scale-95"
                        >
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>Submit Exam</span>
                        </button>
                      </div>
                    </div>

                    {/* Question Statement */}
                    <div className="mb-3 sm:mb-6">
                      <p className="text-xs sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed font-display">
                        {selectedQuestions[currentQuestionIndex]?.question}
                      </p>
                    </div>

                    {/* Chemical Structure Diagram (if present) */}
                    {selectedQuestions[currentQuestionIndex]?.svgStructure && (
                      <div className="mb-3.5 p-2 sm:p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 rounded-xl flex items-center justify-center text-slate-950 dark:text-slate-50 shadow-2xs max-w-[220px] sm:max-w-xs mx-auto">
                        <div 
                          className="w-full h-auto text-slate-950 dark:text-slate-50"
                          dangerouslySetInnerHTML={{ __html: selectedQuestions[currentQuestionIndex].svgStructure }} 
                        />
                      </div>
                    )}

                    {/* Options Grid (Tricky selection) */}
                    <div className="space-y-2 sm:space-y-3">
                      {shuffledOptionsList[currentQuestionIndex]?.map((optionText, idx) => {
                        const chosenIdx = userAnswers[currentQuestionIndex];
                        const hasAnswered = chosenIdx !== undefined;
                        const isSelected = chosenIdx === idx;
                        const isCorrectOption = idx === correctIndexList[currentQuestionIndex];
                        
                        const optionLabels = ["A", "B", "C", "D"];

                        let buttonStyles = "bg-slate-50 hover:bg-slate-100/70 text-slate-700 border-slate-200/80";
                        let badgeStyles = "bg-white border border-slate-200 text-slate-500";

                        if (false && showInstantFeedback && hasAnswered) {
                          if (isSelected) {
                            if (isCorrectOption) {
                              buttonStyles = "bg-emerald-50 border-emerald-500 text-emerald-900 ring-1 ring-emerald-500";
                              badgeStyles = "bg-emerald-600 text-white";
                            } else {
                              buttonStyles = "bg-rose-50 border-rose-500 text-rose-900 ring-1 ring-rose-500";
                              badgeStyles = "bg-rose-600 text-white";
                            }
                          } else if (isCorrectOption) {
                            buttonStyles = "bg-emerald-50/70 border-emerald-400 text-emerald-800";
                            badgeStyles = "bg-emerald-100 border border-emerald-300 text-emerald-700";
                          } else {
                            buttonStyles = "bg-slate-50/40 text-slate-400 border-slate-200/60 opacity-60";
                            badgeStyles = "bg-slate-100/60 text-slate-400 border-slate-200/40";
                          }
                        } else {
                          if (isSelected) {
                            buttonStyles = "bg-slate-900 text-white border-slate-900 shadow-xs scale-[1.005]";
                            badgeStyles = "bg-white/20 text-white";
                          }
                        }

                        return (
                          <button
                            key={idx}
                            onClick={() => handleOptionSelect(idx)}
                            disabled={false && showInstantFeedback && hasAnswered}
                            className={`w-full p-3 sm:p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition duration-150 flex items-center space-x-3 ${buttonStyles} ${
                              false ? "cursor-default" : "cursor-pointer"
                            }`}
                          >
                            <span className={`w-6 h-6 shrink-0 rounded-lg flex items-center justify-center text-xs font-bold ${badgeStyles}`}>
                              {optionLabels[idx]}
                            </span>
                            <span className="leading-snug">{optionText}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Inline Explanatory Feedback in Practice Mode */}
                    {false && showInstantFeedback && userAnswers[currentQuestionIndex] !== undefined && (
                      <motion.div 
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 bg-teal-50/50 border border-teal-100 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed shadow-3xs"
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          {userAnswers[currentQuestionIndex] === correctIndexList[currentQuestionIndex] ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                              <Check className="w-3.5 h-3.5 mr-1" /> Correct Answer
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 uppercase tracking-wider">
                              <X className="w-3.5 h-3.5 mr-1" /> Incorrect Answer
                            </span>
                          )}
                          <span className="text-slate-500 font-bold text-xs">Explanatory Analysis:</span>
                        </div>
                        <p className="text-slate-600 font-medium">
                          {selectedQuestions[currentQuestionIndex]?.explanation}
                        </p>
                      </motion.div>
                    )}

                    {/* Symmetric Prev / Next Navigation Buttons (Brought Upward!) */}
                    <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3 sm:pt-5 mt-4 sm:mt-5">
                      <button
                        onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                        disabled={currentQuestionIndex === 0}
                        className="px-3 py-1.5 sm:px-4 sm:py-2.5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-xs rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 transition duration-150 cursor-pointer disabled:cursor-not-allowed flex items-center space-x-1"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Prev<span className="hidden xs:inline">ious</span></span>
                      </button>

                      <button
                        onClick={() => setCurrentQuestionIndex((prev) => Math.min(selectedQuestions.length - 1, prev + 1))}
                        disabled={currentQuestionIndex === selectedQuestions.length - 1}
                        className="px-3 py-1.5 sm:px-4 sm:py-2.5 bg-slate-900 dark:bg-slate-800 text-white font-semibold text-xs rounded-xl hover:bg-slate-800 dark:hover:bg-slate-700 disabled:opacity-40 transition duration-150 cursor-pointer disabled:cursor-not-allowed flex items-center space-x-1 shadow-xs"
                      >
                        <span>Next</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Mobile-only Navigator & Status Row (brought down below action buttons) */}
                    <div className="lg:hidden mt-3.5 pt-3 border-t border-slate-100/95 dark:border-slate-800/80 space-y-3">
                      {/* Mobile-only Horizontal Swipeable Question Navigator */}
                      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 select-none shrink-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {selectedQuestions.map((_, idx) => {
                          const isCurrent = idx === currentQuestionIndex;
                          const isAnswered = userAnswers[idx] !== undefined;
                          const isFlagged = flaggedQuestions[idx] === true;

                          let cellStyles = "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800";
                          if (isAnswered) {
                            cellStyles = "bg-slate-900 text-white border-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:border-slate-100";
                          }
                          if (isFlagged) {
                            cellStyles = "bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-900";
                          }
                          if (isCurrent) {
                            cellStyles = "bg-white text-slate-900 ring-2 ring-slate-900 border-transparent dark:bg-slate-850 dark:text-white dark:ring-teal-400";
                          }

                          return (
                            <button
                              key={idx}
                              id={`q-nav-mob-${idx}`}
                              onClick={() => setCurrentQuestionIndex(idx)}
                              className={`w-8 h-8 shrink-0 rounded-full border text-xs font-bold flex items-center justify-center transition duration-150 cursor-pointer snap-center ${cellStyles}`}
                            >
                              {idx + 1}
                            </button>
                          );
                        })}
                      </div>

                      {/* Status Row */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center space-x-1.5">
                          <span className="text-[10px] font-bold font-mono tracking-wider text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 px-2 py-1 rounded-md uppercase">
                            Q.{currentQuestionIndex + 1}/{selectedQuestions.length}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded-md border border-slate-200/60 dark:border-slate-800">
                            {Object.keys(userAnswers).length}/{selectedQuestions.length} Saved
                          </span>
                        </div>
                        
                        <button
                          onClick={toggleFlag}
                          className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg border text-[10px] font-semibold transition duration-150 cursor-pointer active:scale-95 ${
                            flaggedQuestions[currentQuestionIndex]
                              ? "border-amber-200 bg-amber-50 dark:border-amber-900/60 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400"
                              : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300"
                          }`}
                        >
                          <Flag className={`w-3 h-3 ${flaggedQuestions[currentQuestionIndex] ? "fill-amber-500 text-amber-500" : ""}`} />
                          <span>{flaggedQuestions[currentQuestionIndex] ? "Unflag" : "Flag"}</span>
                        </button>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Right Side: Navigation Grid sidebar - visible only on desktop screens */}
                <div className="hidden lg:block lg:w-80 bg-white border border-slate-200/80 rounded-2xl shadow-xs p-5 shrink-0">
                  <h3 className="font-display font-bold text-slate-900 text-sm mb-3 uppercase tracking-wider pb-2 border-b border-slate-100">
                    Question Navigator
                  </h3>
                  
                  {/* Grid cells */}
                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {selectedQuestions.map((_, idx) => {
                      const isCurrent = idx === currentQuestionIndex;
                      const isAnswered = userAnswers[idx] !== undefined;
                      const isFlagged = flaggedQuestions[idx] === true;

                      let cellStyles = "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100 hover:text-slate-700";
                      
                      if (isAnswered) {
                        cellStyles = "bg-slate-900 text-white border-slate-900 hover:bg-slate-800";
                      }
                      if (isFlagged) {
                        cellStyles = "bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200";
                      }
                      if (isCurrent) {
                        cellStyles = "bg-white text-slate-900 ring-2 ring-slate-900 border-transparent";
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => setCurrentQuestionIndex(idx)}
                          className={`aspect-square rounded-xl border text-xs font-bold flex items-center justify-center transition duration-150 cursor-pointer ${cellStyles}`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigator Legends */}
                  <div className="space-y-2 border-t border-slate-100 pt-3 text-[11px] text-slate-500 font-medium">
                    <div className="flex items-center space-x-2">
                      <div className="w-3.5 h-3.5 rounded-md bg-white border-2 ring-2 ring-slate-900 border-transparent"></div>
                      <span>Active Question</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3.5 h-3.5 rounded-md bg-slate-900"></div>
                      <span>Answered / Saved</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3.5 h-3.5 rounded-md bg-amber-100 border border-amber-300"></div>
                      <span>Flagged for Review</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3.5 h-3.5 rounded-md bg-slate-50 border border-slate-200"></div>
                      <span>Unanswered</span>
                    </div>
                  </div>

                  {/* Quick stats on paper */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/60 mt-4 text-xs space-y-1.5 text-slate-600 font-semibold">
                    <div className="flex justify-between">
                      <span>Total Count:</span>
                      <span className="text-slate-900">{selectedQuestions.length} Items</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Completed:</span>
                      <span className="text-teal-600">{Object.keys(userAnswers).length} Saved</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Flagged review:</span>
                      <span className="text-amber-600">{Object.keys(flaggedQuestions).filter(k => flaggedQuestions[Number(k)]).length} Flagged</span>
                    </div>
                  </div>

                  {/* Jump to next unanswered block */}
                  {Object.keys(userAnswers).length < selectedQuestions.length && (
                    <button
                      onClick={() => {
                        const total = selectedQuestions.length;
                        // search from currentQuestionIndex + 1 to total - 1
                        for (let i = currentQuestionIndex + 1; i < total; i++) {
                          if (userAnswers[i] === undefined) {
                            setCurrentQuestionIndex(i);
                            return;
                          }
                        }
                        // wrap around from 0 to currentQuestionIndex - 1
                        for (let i = 0; i < currentQuestionIndex; i++) {
                          if (userAnswers[i] === undefined) {
                            setCurrentQuestionIndex(i);
                            return;
                          }
                        }
                      }}
                      className="w-full mt-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold text-xs transition duration-150 cursor-pointer flex items-center justify-center space-x-1.5 active:scale-95"
                    >
                      <Filter className="w-3.5 h-3.5 text-slate-500" />
                      <span>Go to Next Unanswered</span>
                    </button>
                  )}

                  {/* Keyboard Shortcuts Help Desk */}
                  <div className="border-t border-slate-100 pt-3 mt-4">
                    <div className="flex items-center space-x-1 text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
                      <Keyboard className="w-3.5 h-3.5 text-slate-500" />
                      <span>Shortcuts Desk</span>
                    </div>
                    <div className="space-y-1.5 font-mono text-[10px] text-slate-500">
                      <div className="flex justify-between items-center bg-slate-50 p-1.5 rounded">
                        <span>Prev / Next Item</span>
                        <span className="font-bold text-slate-700">← / →</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-50 p-1.5 rounded">
                        <span>Select Option</span>
                        <span className="font-bold text-slate-700">A, B, C, D</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-50 p-1.5 rounded">
                        <span>Toggle Flag</span>
                        <span className="font-bold text-slate-700">F key</span>
                      </div>
                    </div>
                  </div>

                </div>

              </motion.div>
            </div>
            )}

            {/* VIEW 4: RESULTS & EXPLANATIONS */}
            {testSubmitted && !showSubmittedOverlay && (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-4xl mx-auto space-y-6"
              >
                
                {/* Result Card with score percent, grade and specific remark ABOVE corrections */}
                <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xs p-6 md:p-8 text-center relative overflow-hidden">
                  
                  {/* Subtle top background decorative glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

                  <span className="text-xs font-bold tracking-widest text-slate-500 uppercase bg-slate-100 px-3 py-1 rounded-full inline-block mb-3">
                    Exam Performance Certificate
                  </span>

                  <h2 className="font-display font-black text-slate-900 text-2xl md:text-3xl tracking-tight mb-6">
                    Biology Practice Results
                  </h2>

                  {/* Big visual score display */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-4 border-y border-slate-100 my-4">
                    
                    {/* Big Circular Grade Badge */}
                    <div className="relative flex items-center justify-center">
                      <div className={`w-32 h-32 rounded-full flex flex-col items-center justify-center text-white shadow-md font-display ${
                        grade === "A" || grade === "B" 
                          ? "bg-teal-600" 
                          : grade === "C" 
                            ? "bg-emerald-500" 
                            : grade === "D" 
                              ? "bg-amber-500" 
                              : "bg-rose-500"
                      }`}>
                        <span className="text-5xl font-black">{grade}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider opacity-85 mt-1">Grade</span>
                      </div>
                    </div>

                    {/* Score stats details */}
                    <div className="text-center md:text-left space-y-2">
                      <div className="text-sm font-semibold text-slate-500">
                        Candidate: <span className="text-slate-900 font-bold">{name}</span>
                      </div>
                      <div className="text-sm font-semibold text-slate-500">
                        Email Address: <span className="text-slate-900 font-mono font-bold">{email}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
                        <div className="bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200/60 text-center">
                          <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Weighted Score</span>
                          <span className="font-mono font-black text-slate-900 text-lg">{scorePoints.toFixed(2)} / 70</span>
                        </div>
                        <div className="bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200/60 text-center">
                          <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Accuracy Percentage</span>
                          <span className="font-mono font-black text-slate-900 text-lg">{scorePercent.toFixed(1)}%</span>
                        </div>
                        <div className="bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200/60 text-center">
                          <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Correct Answers</span>
                          <span className="font-mono font-black text-slate-900 text-lg">
                            {Object.keys(userAnswers).filter(k => userAnswers[Number(k)] === correctIndexList[Number(k)]).length} / {selectedQuestions.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* REMARK (Explicitly comes above corrections) */}
                  <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 mt-6 text-center max-w-2xl mx-auto">
                    <span className="text-[10px] font-bold text-teal-600 tracking-wider uppercase block mb-1">
                      Academic Assessor's Remark
                    </span>
                    <p className="text-sm font-semibold text-slate-800 leading-relaxed font-display">
                      "{remark}"
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-center space-x-4 border-t border-slate-100 pt-6">
                    <button
                      onClick={handleRestartSession}
                      className="inline-flex items-center space-x-2 px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition duration-150 cursor-pointer active:scale-95 shadow-xs"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Take Another Test</span>
                    </button>
                  </div>
                </div>

                {/* CORRECTIONS PANEL (Strictly below remarks) */}
                <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xs p-6 md:p-8 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-100 pb-5">
                    <div>
                      <h3 className="font-display font-extrabold text-slate-900 text-xl tracking-tight flex items-center space-x-2">
                        <Award className="w-5.5 h-5.5 text-teal-600" />
                        <span>Detailed Corrections & Explanations</span>
                      </h3>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                        Review all {selectedQuestions.length} questions generated for this test session. Incorrect options were highly tricky, so analyze the scientific explanation provided for each item.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 p-1 bg-slate-50 border border-slate-200/60 rounded-xl self-start md:self-center shrink-0">
                      {[
                        { id: "all", label: "All Items", count: selectedQuestions.length },
                        { id: "correct", label: "Correct", count: Object.keys(userAnswers).filter(k => userAnswers[Number(k)] === correctIndexList[Number(k)]).length },
                        { id: "incorrect", label: "Incorrect", count: Object.keys(userAnswers).filter(k => userAnswers[Number(k)] !== undefined && userAnswers[Number(k)] !== correctIndexList[Number(k)]).length },
                        { id: "skipped", label: "Skipped", count: selectedQuestions.length - Object.keys(userAnswers).length }
                      ].map((tab) => {
                        const isActive = correctionFilter === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setCorrectionFilter(tab.id as any)}
                            className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition duration-150 cursor-pointer flex items-center space-x-1 ${
                              isActive
                                ? "bg-slate-900 text-white shadow-3xs"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                            }`}
                          >
                            <span>{tab.label}</span>
                            <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-mono ${
                              isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-500"
                            }`}>
                              {tab.count}
                            </span>
                          </button>
                        );
                      })}
                      <button
                        onClick={() => setShowLeaderboard(true)}
                        className="px-3 py-1.5 rounded-lg text-[11px] font-bold transition duration-150 cursor-pointer bg-amber-100 hover:bg-amber-200 text-amber-800"
                        title="View Leaderboard"
                      >
                        Leaderboard
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6 divide-y divide-slate-100">
                    {selectedQuestions.map((question, qIdx) => {
                      const userChoiceIdx = userAnswers[qIdx];
                      const correctChoiceIdx = correctIndexList[qIdx];
                      const currentShuffledOptions = shuffledOptionsList[qIdx];
                      
                      const isCorrect = userChoiceIdx !== undefined && userChoiceIdx === correctChoiceIdx;
                      const isSkipped = userChoiceIdx === undefined;

                      // Apply correction filter
                      if (correctionFilter === "correct" && !isCorrect) return null;
                      if (correctionFilter === "incorrect" && (isCorrect || isSkipped)) return null;
                      if (correctionFilter === "skipped" && !isSkipped) return null;

                      return (
                        <div key={question.id} className={`pt-6 ${qIdx === 0 ? "pt-0" : ""}`}>
                          <div className="flex items-start space-x-3">
                            <span className="text-xs font-mono font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-md shrink-0 mt-1">
                              Q{qIdx + 1}
                            </span>
                            <div className="flex-1 space-y-3">
                              
                              {/* Question statement */}
                              <h4 className="font-semibold text-slate-900 text-sm md:text-base leading-relaxed">
                                {question.question}
                              </h4>

                              {/* Selected answers display */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                                <div className={`p-3 rounded-xl border text-xs leading-relaxed flex items-start space-x-2 ${
                                  isCorrect 
                                    ? "bg-teal-50 border-teal-200 text-teal-800" 
                                    : "bg-rose-50 border-rose-200 text-rose-800"
                                }`}>
                                  {isCorrect ? (
                                    <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                                  ) : (
                                    <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                  )}
                                  <div>
                                    <strong className="block text-[11px] uppercase tracking-wider opacity-85">Your Chosen Option</strong>
                                    <span className="font-semibold block mt-1">
                                      {userChoiceIdx !== undefined 
                                        ? currentShuffledOptions[userChoiceIdx] 
                                        : "[No Answer Selected]"}
                                    </span>
                                  </div>
                                </div>

                                {!isCorrect && (
                                  <div className="p-3 bg-teal-50 border border-teal-200 text-teal-800 rounded-xl text-xs leading-relaxed flex items-start space-x-2">
                                    <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                                    <div>
                                      <strong className="block text-[11px] uppercase tracking-wider opacity-85">Correct Option</strong>
                                      <span className="font-semibold block mt-1">
                                        {currentShuffledOptions[correctChoiceIdx]}
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* Scientific Explanation reference */}
                              <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3.5 text-xs text-slate-600 leading-relaxed mt-2">
                                <strong className="text-slate-800 block mb-1 font-semibold">Explanatory Analysis:</strong>
                                {question.explanation}
                              </div>

                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        )}

      </main>

      {/* Modal Confirmation for manual submit */}
      <AnimatePresence>
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSubmitModal(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
            ></motion.div>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 max-w-sm w-full relative z-10 shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-200">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-lg mb-2">
                Submit Examination Paper?
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                You have answered <strong>{Object.keys(userAnswers).length} out of {selectedQuestions.length}</strong> questions. Once submitted, you cannot modify your answers.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="flex-1 py-2 border border-slate-200 text-slate-600 font-semibold text-xs rounded-xl hover:bg-slate-50 cursor-pointer active:scale-95"
                >
                  Return to Paper
                </button>
                <button
                  onClick={handleManualSubmit}
                  className="flex-1 py-2 bg-slate-900 text-white font-semibold text-xs rounded-xl hover:bg-slate-800 cursor-pointer active:scale-95 shadow-xs"
                >
                  Confirm Submission
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Visually polished 2-second Submitted Transition Overlay */}
      <AnimatePresence>
        {showSubmittedOverlay && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="w-20 h-20 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h2 className="font-display font-black text-white text-3xl tracking-tight">
                Exam Paper Submitted!
              </h2>
              <p className="text-teal-200 text-sm font-medium">
                Saving scripts and compiling results. Standby for evaluation...
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Elegant, subtle, unnoticed credit */}
      <footer className="py-2.5 px-4 border-t border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-center sm:text-left">
          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium tracking-wide">
            &copy; 2026 Biology CBT Practice Portal. Strict academic standards enforced.
          </p>
          <div className="text-[9px] text-slate-400 dark:text-slate-500 font-mono tracking-wider uppercase select-none mt-0.5 sm:mt-0">
            <a href="https://wa.me/2348116092816" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors underline">
              Contact Developer
            </a>
            <button onClick={() => setShowAdminPanel(true)} className="ml-4 underline">Admin</button>
          </div>
        </div>
      </footer>
      {showAdminPanel && <AdminPanel onClose={() => setShowAdminPanel(false)} />}
      {showLeaderboard && <Leaderboard onClose={() => setShowLeaderboard(false)} />}
    </div>
  );
}
