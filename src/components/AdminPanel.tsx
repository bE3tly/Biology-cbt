import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function AdminPanel({ onClose }: { onClose: () => void }) {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [testResults, setTestResults] = useState<any[]>([]);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);

  const handleAuth = () => {
    if (password === 'vault123') { // Simple password protection
      setAuthenticated(true);
      fetchData();
    } else {
      alert('Incorrect password');
    }
  };

  const fetchData = async () => {
    const usersSnapshot = await getDocs(collection(db, 'users'));
    setUsers(usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

    const resultsSnapshot = await getDocs(collection(db, 'test_results'));
    setTestResults(resultsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    
    const leaderboardSnapshot = await getDocs(collection(db, 'scores'));
    setLeaderboard(leaderboardSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).sort((a, b) => b.score - a.score));
  };

  if (!authenticated) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4">
        <div className="bg-slate-100 p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4">Admin Login</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Enter password"
          />
          <button onClick={handleAuth} className="w-full bg-slate-900 text-white p-2 rounded">Login</button>
          <button onClick={onClose} className="w-full mt-2 bg-gray-300 p-2 rounded">Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-slate-50 z-50 overflow-auto p-4">
      <button onClick={onClose} className="mb-4 bg-slate-900 text-white px-4 py-2 rounded">Close Admin Panel</button>
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <pre className="bg-white p-4 rounded shadow">{JSON.stringify(users, null, 2)}</pre>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Test Results</h2>
        <pre className="bg-white p-4 rounded shadow">{JSON.stringify(testResults, null, 2)}</pre>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
        <pre className="bg-white p-4 rounded shadow">{JSON.stringify(leaderboard, null, 2)}</pre>
      </section>
    </div>
  );
}
