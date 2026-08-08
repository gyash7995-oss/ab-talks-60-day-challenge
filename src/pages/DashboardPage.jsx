import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskCard from '../components/TaskCard';

export default function DashboardPage({ 
  studentInfo, 
  setStudentInfo, 
  tracks, 
  days, 
  achievements 
}) {
  const navigate = useNavigate();
  const activeTrackId = studentInfo.selectedTrack;
  const activeTrack = tracks.find(t => t.id === activeTrackId) || tracks[0];
  const trackDays = days[activeTrackId] || [];
  
  // Find current day
  const currentDayData = trackDays.find(d => d.status === 'current') || trackDays[11]; // default day 12

  // Statistics calculations
  const totalDays = trackDays.length;
  const completedCount = trackDays.filter(d => d.status === 'completed').length;
  const missedCount = trackDays.filter(d => d.status === 'missed').length;
  const completionPercentage = Math.round((completedCount / totalDays) * 100);

  // Switch Track
  const handleTrackChange = (e) => {
    const trackId = e.target.value;
    setStudentInfo(prev => ({
      ...prev,
      selectedTrack: trackId
    }));
  };

  // State Simulation Handlers
  const handleResetStreak = () => {
    setStudentInfo(prev => ({
      ...prev,
      streak: 0,
      longestStreak: 0,
      points: 0
    }));
  };

  const handleSimulateEmptyProfile = () => {
    setStudentInfo(prev => ({
      ...prev,
      name: '',
      college: ''
    }));
  };

  const handleRestoreProfile = () => {
    setStudentInfo(prev => ({
      ...prev,
      name: 'Arjun Sharma',
      college: 'Indian Institute of Technology, Delhi',
      streak: 10,
      longestStreak: 10,
      points: 1450
    }));
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Student Profile Info Header */}
      <section 
        className="glass-card" 
        style={{ 
          padding: '16px 20px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '12px',
          background: 'radial-gradient(100% 100% at 0% 0%, rgba(6, 182, 212, 0.05) 0%, rgba(17, 24, 39, 0.8) 100%)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            {studentInfo.name ? (
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{studentInfo.name}</h2>
            ) : (
              <div 
                style={{ 
                  height: '24px', 
                  width: '160px', 
                  background: 'rgba(255, 255, 255, 0.06)', 
                  borderRadius: '6px', 
                  marginBottom: '4px' 
                }} 
                aria-label="Empty Profile Placeholder"
              />
            )}
            
            {studentInfo.college ? (
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{studentInfo.college}</p>
            ) : (
              <div 
                style={{ 
                  height: '16px', 
                  width: '240px', 
                  background: 'rgba(255, 255, 255, 0.04)', 
                  borderRadius: '4px' 
                }} 
                aria-label="Empty Profile Subtext Placeholder"
              />
            )}
          </div>
          
          {/* Track Selector Dropdown */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <label htmlFor="track-select" style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', uppercase: 'true' }}>
              ACTIVE TRACK
            </label>
            <select
              id="track-select"
              value={activeTrackId}
              onChange={handleTrackChange}
              style={{
                background: 'rgba(9, 13, 22, 0.9)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '6px 12px',
                color: 'var(--primary)',
                fontSize: '0.8rem',
                fontWeight: 700,
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              {tracks.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* PRIMARY visual focus: Today's Task Card */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h2 
          style={{ 
            fontSize: '0.9rem', 
            fontWeight: 800, 
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            paddingLeft: '4px'
          }}
        >
          Primary Focus
        </h2>
        {currentDayData ? (
          <TaskCard 
            dayData={currentDayData} 
            trackName={activeTrack.name}
            onStartChallenge={() => navigate(`/day/${currentDayData.day}`)}
          />
        ) : (
          <p>No active tasks found for this track.</p>
        )}
      </section>

      {/* SECONDARY visual focus: Streak, Stats and Overall Progress */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
        
        {/* Streak Details */}
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px' }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Consistency Streak
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '4px' }}>
              <span style={{ fontSize: '2rem', fontWeight: 900, color: studentInfo.streak > 0 ? '#f97316' : 'var(--text-muted)' }}>
                {studentInfo.streak}
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                days active
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Longest: <strong style={{ color: 'var(--text-primary)' }}>{studentInfo.longestStreak}d</strong>
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Points: <strong style={{ color: 'var(--primary)' }}>{studentInfo.points} XP</strong>
            </span>
          </div>
        </div>

        {/* Challenge Progress Metrics & Grid */}
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 800 }}>Challenge Progress</h3>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)' }}>
              {completionPercentage}% Complete
            </span>
          </div>

          {/* Progress Bar */}
          <div 
            style={{
              width: '100%',
              height: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '4px',
              overflow: 'hidden',
              marginBottom: '20px'
            }}
            role="progressbar"
            aria-valuenow={completionPercentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div 
              style={{
                width: `${completionPercentage}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)',
                borderRadius: '4px',
                transition: 'width 0.5s ease',
              }}
            />
          </div>

          {/* 60-day interactive mini-grid */}
          <div style={{ marginBottom: '14px' }}>
            <h4 style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 700, textTransform: 'uppercase' }}>
              60-Day Habit Grid
            </h4>
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(10, 1fr)',
                gap: '6px',
                maxWidth: '300px',
                margin: '0 auto'
              }}
            >
              {trackDays.map(d => {
                let dotBg = 'rgba(255,255,255,0.03)';
                let dotBorder = '1px solid var(--border)';
                let titleLabel = `Day ${d.day}: Locked`;

                if (d.status === 'completed') {
                  dotBg = 'var(--success)';
                  dotBorder = '1px solid var(--success)';
                  titleLabel = `Day ${d.day}: Completed`;
                } else if (d.status === 'missed') {
                  dotBg = 'rgba(239, 68, 68, 0.2)';
                  dotBorder = '1px solid var(--danger)';
                  titleLabel = `Day ${d.day}: Missed`;
                } else if (d.status === 'current') {
                  dotBg = 'rgba(139, 92, 246, 0.2)';
                  dotBorder = '2px solid var(--accent)';
                  titleLabel = `Day ${d.day}: Today's Task`;
                }

                return (
                  <div
                    key={d.day}
                    style={{
                      aspectRatio: '1',
                      borderRadius: '3px',
                      background: dotBg,
                      border: dotBorder,
                      cursor: d.status === 'locked' ? 'not-allowed' : 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    title={titleLabel}
                    onClick={() => {
                      if (d.status !== 'locked') {
                        navigate(`/day/${d.day}`);
                      }
                    }}
                  />
                );
              })}
            </div>
            
            {/* Grid Legend */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: 'var(--success)' }} />
                Completed ({completedCount})
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: 'rgba(239, 68, 68, 0.2)', border: '1px solid var(--danger)' }} />
                Missed ({missedCount})
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: 'rgba(139, 92, 246, 0.2)', border: '1px solid var(--accent)' }} />
                Today's Task
              </div>
            </div>
          </div>
        </div>

        {/* SUPPORTING: Achievements and standing */}
        <div className="glass-card" style={{ padding: '20px' }}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '12px' }}>Unlocked Badges</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {achievements.map(ach => (
              <div 
                key={ach.id} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  opacity: ach.unlocked ? 1 : 0.4,
                  background: ach.unlocked ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
                  border: `1px solid ${ach.unlocked ? 'var(--border)' : 'rgba(255, 255, 255, 0.02)'}`,
                  borderRadius: '10px',
                  padding: '8px 12px'
                }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: ach.unlocked ? 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)' : 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.85rem',
                    color: '#05070c',
                    flexShrink: 0
                  }}
                >
                  🏆
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: ach.unlocked ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                    {ach.title}
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* STATE SIMULATION CONTROLS WIDGET */}
      <section 
        className="glass-card" 
        style={{
          border: '1px dashed var(--border)',
          background: 'rgba(255, 255, 255, 0.01)',
          padding: '16px'
        }}
      >
        <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>
          Student State Sandbox
        </h4>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
          Test mandatory product edge-states (First Day: 0 streak, Missed Day info, Empty Profile).
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <button className="btn btn-secondary" style={{ fontSize: '0.7rem', padding: '8px' }} onClick={handleResetStreak}>
            Simulate 0-Streak (First Day)
          </button>
          <button className="btn btn-secondary" style={{ fontSize: '0.7rem', padding: '8px' }} onClick={handleSimulateEmptyProfile}>
            Simulate Empty Profile
          </button>
          <button 
            className="btn btn-primary" 
            style={{ fontSize: '0.7rem', padding: '8px', gridColumn: 'span 2', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--primary)', border: '1px solid rgba(6, 182, 212, 0.3)', boxShadow: 'none' }} 
            onClick={handleRestoreProfile}
          >
            Restore Default Arjun Profile (10d Streak)
          </button>
        </div>
      </section>

    </div>
  );
}
