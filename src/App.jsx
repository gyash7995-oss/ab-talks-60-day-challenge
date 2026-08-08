import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ChallengeDayPage from './pages/ChallengeDayPage';

// Import central mock data
import initialData from './data/mockData.json';

function AppContent() {
  const navigate = useNavigate();

  // Central React state representing the database / application state
  const [studentInfo, setStudentInfo] = useState(initialData.student);
  const [days, setDays] = useState(initialData.days);
  const [achievements, setAchievements] = useState(initialData.achievements);
  const [tracks] = useState(initialData.tracks);

  // Landing page start challenge CTA
  const handleStartChallenge = () => {
    // If starting fresh, set streak to 1 and change Day 12 status to active if not completed
    setStudentInfo(prev => ({
      ...prev,
      streak: prev.streak === 0 ? 1 : prev.streak // keep existing if simulated Arjun
    }));
    navigate('/dashboard');
  };

  return (
    <div className="app-container">
      {/* Global Navigation Header */}
      <Navigation studentInfo={studentInfo} />
      
      {/* Main Content Area */}
      <main className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={
              <LandingPage 
                studentInfo={studentInfo} 
                setStudentInfo={setStudentInfo} 
                tracks={tracks}
                onStart={handleStartChallenge}
              />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <DashboardPage 
                studentInfo={studentInfo} 
                setStudentInfo={setStudentInfo} 
                tracks={tracks}
                days={days}
                achievements={achievements}
              />
            } 
          />
          <Route 
            path="/day/:dayId" 
            element={
              <ChallengeDayPage 
                studentInfo={studentInfo} 
                setStudentInfo={setStudentInfo} 
                days={days}
                setDays={setDays}
              />
            } 
          />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
