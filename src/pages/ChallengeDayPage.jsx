import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReadinessCheck from '../components/ReadinessCheck';

export default function ChallengeDayPage({ 
  studentInfo, 
  setStudentInfo, 
  days, 
  setDays 
}) {
  const { dayId } = useParams();
  const navigate = useNavigate();
  const activeTrackId = studentInfo.selectedTrack;
  const trackDays = days[activeTrackId] || [];
  
  const parsedDayId = parseInt(dayId, 10);
  const dayData = trackDays.find(d => d.day === parsedDayId);

  // If the day is invalid, default to Day 12
  const activeDay = dayData || trackDays.find(d => d.day === 12);
  
  // State for form fields
  const [githubUrl, setGithubUrl] = useState('');
  const [githubCommit, setGithubCommit] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!activeDay) {
    return (
      <div className="glass-card animate-fade-in" style={{ textAlign: 'center', padding: '40px' }}>
        <h2>Day Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', margin: '12px 0 20px' }}>
          This challenge day is unavailable.
        </p>
        <Link to="/dashboard" className="btn btn-primary" style={{ display: 'inline-flex', width: 'auto' }}>
          Go to Dashboard
        </Link>
      </div>
    );
  }

  const isCompleted = activeDay.status === 'completed';
  const isMissed = activeDay.status === 'missed';
  const isLocked = activeDay.status === 'locked';

  // Handle Form Submission
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);

      // Update the day's status to completed in global state
      const updatedDays = { ...days };
      const dayIndex = updatedDays[activeTrackId].findIndex(d => d.day === activeDay.day);
      if (dayIndex !== -1) {
        updatedDays[activeTrackId][dayIndex] = {
          ...updatedDays[activeTrackId][dayIndex],
          status: 'completed',
          proof: { githubUrl, githubCommit, linkedinUrl }
        };
        setDays(updatedDays);
      }

      // Update student points and streak
      setStudentInfo(prev => {
        const nextStreak = prev.streak + 1;
        return {
          ...prev,
          streak: nextStreak,
          longestStreak: Math.max(prev.longestStreak, nextStreak),
          points: prev.points + (activeDay.points || 150)
        };
      });

    }, 1200);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Back to Dashboard Link */}
      <nav aria-label="Breadcrumb">
        <Link 
          to="/dashboard" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px', 
            fontSize: '0.85rem', 
            color: 'var(--text-secondary)',
            fontWeight: 600
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Command Center
        </Link>
      </nav>

      {/* Main task description container */}
      <section 
        className="glass-card" 
        style={{
          borderLeft: `4px solid ${isCompleted ? 'var(--success)' : isMissed ? 'var(--danger)' : 'var(--accent)'}`
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span 
            style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.8rem', 
              color: 'var(--primary)', 
              fontWeight: 700 
            }}
          >
            CHALLENGE DAY {activeDay.day} / 60
          </span>
          <span 
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: isCompleted ? 'var(--success)' : isMissed ? 'var(--danger)' : 'var(--accent)',
              backgroundColor: isCompleted ? 'rgba(16, 185, 129, 0.1)' : isMissed ? 'rgba(239, 68, 68, 0.1)' : 'rgba(139, 92, 246, 0.1)',
              padding: '3px 8px',
              borderRadius: '6px',
              border: `1px solid ${isCompleted ? 'rgba(16, 185, 129, 0.2)' : isMissed ? 'rgba(239, 68, 68, 0.2)' : 'rgba(139, 92, 246, 0.2)'}`
            }}
          >
            {activeDay.status}
          </span>
        </div>

        <h1 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '10px' }}>
          {activeDay.title}
        </h1>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
          {activeDay.description || "Daily challenge task details and execution guidelines."}
        </p>

        {/* Requirements */}
        {activeDay.requirements && (
          <div style={{ marginBottom: '16px' }}>
            <h2 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Build Guidelines
            </h2>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {activeDay.requirements.map((req, idx) => (
                <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)' }}>✓</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* EDGE STATE: Day is Locked */}
      {isLocked && (
        <section className="glass-card" style={{ textAlign: 'center', padding: '32px' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px' }}>🔒 This Day is Locked</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Complete today's active tasks on your dashboard first to unlock subsequent days.
          </p>
        </section>
      )}

      {/* EDGE STATE: Day was Missed - Motivational messaging */}
      {isMissed && !isCompleted && (
        <section 
          className="glass-card" 
          style={{ 
            border: '1px solid rgba(249, 115, 22, 0.2)',
            background: 'rgba(249, 115, 22, 0.02)'
          }}
        >
          <h2 
            style={{ 
              fontSize: '1rem', 
              fontWeight: 800, 
              color: 'var(--warning)', 
              marginBottom: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            ⚠️ Don't Break the Chain!
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            It looks like this day was missed, but consistency is a journey of recovery, not perfection. 
            You can submit your proof of work below to catch up and reactivate your streak immediately. Let's build!
          </p>
        </section>
      )}

      {/* SUBMITTED / COMPLETED SUCCESS STATE */}
      {isCompleted && (
        <section 
          className="glass-card" 
          style={{ 
            border: '1px solid var(--success)',
            background: 'radial-gradient(100% 100% at 50% 0%, rgba(16, 185, 129, 0.05) 0%, rgba(17, 24, 39, 0.8) 100%)',
            textAlign: 'center',
            padding: '32px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <div 
            style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              background: 'rgba(16, 185, 129, 0.1)', 
              color: 'var(--success)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              border: '2px solid var(--success)',
              boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)'
            }}
          >
            ✓
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              Day {activeDay.day} Complete!
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Proof submitted successfully. Daily coding streak maintained!
            </p>
          </div>
          
          <div 
            style={{ 
              display: 'flex', 
              gap: '12px', 
              width: '100%', 
              maxWidth: '280px', 
              marginTop: '12px',
              flexDirection: 'column' 
            }}
          >
            <Link to="/dashboard" className="btn btn-primary" style={{ fontSize: '0.85rem' }}>
              Back to Command Center
            </Link>
          </div>
        </section>
      )}

      {/* FORM AND SUBMISSION FOR ACTIVE / MISSED DAYS */}
      {!isCompleted && !isLocked && (
        <form onSubmit={handleSubmit} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 800 }}>Submit Your Proof</h2>

          {/* GitHub Repo Link Input */}
          <div className="form-group">
            <label className="form-label" htmlFor="github-url">
              GitHub Repository URL
            </label>
            <input 
              id="github-url"
              type="url" 
              className="form-input"
              placeholder="e.g., https://github.com/username/project"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              required
              disabled={isSubmitting}
              style={{ wordBreak: 'break-all' }} /* Prevent clipping for long links */
            />
          </div>

          {/* GitHub Commit Hash Input */}
          <div className="form-group">
            <label className="form-label" htmlFor="github-commit">
              Commit Hash
            </label>
            <input 
              id="github-commit"
              type="text" 
              className="form-input code-font"
              placeholder="e.g., a8c1b3f"
              maxLength={40}
              value={githubCommit}
              onChange={(e) => setGithubCommit(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          {/* LinkedIn Post Link Input */}
          <div className="form-group">
            <label className="form-label" htmlFor="linkedin-url">
              LinkedIn Post URL
            </label>
            <input 
              id="linkedin-url"
              type="url" 
              className="form-input"
              placeholder="e.g., https://linkedin.com/posts/activity..."
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              required
              disabled={isSubmitting}
              style={{ wordBreak: 'break-all' }} /* Prevent clipping for long links */
            />
          </div>

          {/* Embedded Readiness Check */}
          <ReadinessCheck 
            githubUrl={githubUrl}
            githubCommit={githubCommit}
            linkedinUrl={linkedinUrl}
            isSubmitted={isCompleted}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
          />
        </form>
      )}

    </div>
  );
}
