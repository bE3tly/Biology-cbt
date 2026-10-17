import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Trophy, X } from 'lucide-react';

export default function Leaderboard({ onClose }: { onClose: () => void }) {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const leaderboardSnapshot = await getDocs(collection(db, 'test_results'));
        const allEntries = leaderboardSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Aggregate: keep best score per user
        const bestScoresMap = new Map();
        allEntries.forEach(entry => {
          const existing = bestScoresMap.get(entry.userName);
          if (!existing || entry.score > existing.score || (entry.score === existing.score && entry.timeToFinish < existing.timeToFinish)) {
            bestScoresMap.set(entry.userName, entry);
          }
        });

        setLeaderboard(Array.from(bestScoresMap.values())
          .sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return a.timeToFinish - b.timeToFinish;
          })
          .slice(0, 20));
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="fixed inset-0 bg-white/95 dark:bg-slate-950/95 z-50 overflow-auto p-4 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
            Leaderboard
          </h1>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            <X className="text-slate-500" />
          </button>
        </div>
        
        {loading ? (
          <p className="text-center text-slate-500">Loading leaderboard...</p>
        ) : (
          <div className="space-y-2">
            {leaderboard.map((entry, index) => (
              <div key={entry.id} className="flex justify-between items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${index < 3 ? 'bg-amber-100 text-amber-700' : 'bg-slate-200 text-slate-600'}`}>
                    {index + 1}
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">{entry.userName || 'Anonymous'}</span>
                </div>
                <div className="text-right">
                    <span className="font-mono font-bold text-teal-600 block">{entry.score?.toFixed(1) || 0} pts</span>
                    <span className="text-xs text-slate-500">{entry.timeToFinish || 0}s</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
