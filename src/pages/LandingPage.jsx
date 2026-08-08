import React from 'react';

export default function LandingPage({ studentInfo, setStudentInfo, tracks, onStart }) {
  
  const handleSelectTrack = (trackId) => {
    setStudentInfo(prev => ({
      ...prev,
      selectedTrack: trackId
    }));
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Hero Section */}
      <header style={{ textAlign: 'center', padding: '10px 0' }}>
        <span 
          style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            color: 'var(--primary)',
            background: 'rgba(6, 182, 212, 0.08)',
            padding: '4px 12px',
            borderRadius: '50px',
            border: '1px solid rgba(6, 182, 212, 0.2)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '16px'
          }}
        >
          Presented by AB Talks
        </span>
        
        <h1 
          className="gradient-text" 
          style={{
            fontSize: '2rem',
            fontWeight: 900,
            lineHeight: 1.25,
            letterSpacing: '-0.03em',
            marginBottom: '12px'
          }}
        >
          The 60-Day <br />
          <span className="brand-gradient-text">Coding Challenge</span>
        </h1>
        
        <p 
          style={{
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            maxWidth: '450px',
            margin: '0 auto 24px',
            padding: '0 8px'
          }}
        >
          Build a daily coding habit, share public proof of work, and showcase your consistent learning progress. No excuses. Just consistency.
        </p>

        {/* Highlighted Metric Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            maxWidth: '350px',
            margin: '0 auto 12px',
          }}
        >
          <div 
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '12px 8px',
            }}
          >
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>60 Days</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Daily Builds</div>
          </div>
          <div 
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '12px 8px',
            }}
          >
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent)' }}>2 Platforms</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>GitHub + LinkedIn</div>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="glass-card">
        <h2 
          style={{
            fontSize: '1.1rem',
            fontWeight: 800,
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ display: 'inline-block', width: '4px', height: '16px', background: 'var(--primary)', borderRadius: '2px' }}></span>
          The Daily Habit Routine
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <div 
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.85rem',
                flexShrink: 0,
              }}
            >
              1
            </div>
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '2px' }}>Get the Daily Task</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                Unlock a new, hands-on development assignment every day at 12:00 AM.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div 
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.85rem',
                flexShrink: 0,
              }}
            >
              2
            </div>
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '2px' }}>Write Code & Share</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                Implement the requirements, commit to GitHub, and write a quick LinkedIn post explaining your build.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div 
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                color: 'var(--success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.85rem',
                flexShrink: 0,
              }}
            >
              3
            </div>
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '2px' }}>Submit Proof & Maintain Streak</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                Provide URLs on your dashboard before 11:59 PM to maintain your learning streak.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Select Track Section */}
      <section 
        className="glass-card" 
        style={{
          border: '1px solid rgba(139, 92, 246, 0.2)',
          background: 'radial-gradient(100% 100% at 50% 0%, rgba(139, 92, 246, 0.05) 0%, rgba(17, 24, 39, 0.8) 100%)',
        }}
      >
        <h2 
          style={{
            fontSize: '1.1rem',
            fontWeight: 800,
            marginBottom: '4px',
            textAlign: 'center'
          }}
        >
          Select Your Specialization Track
        </h2>
        <p 
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          You can toggle tracks anytime on your dashboard.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          {tracks.map(track => {
            const isSelected = studentInfo.selectedTrack === track.id;
            return (
              <button
                key={track.id}
                onClick={() => handleSelectTrack(track.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: isSelected ? 'rgba(139, 92, 246, 0.08)' : 'rgba(255, 255, 255, 0.01)',
                  border: `2px solid ${isSelected ? 'var(--accent)' : 'var(--border)'}`,
                  borderRadius: '12px',
                  padding: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? 'var(--shadow-glow-accent)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 800, fontSize: '0.95rem', color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                    {track.name}
                  </span>
                  <div 
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      border: `2px solid ${isSelected ? 'var(--accent)' : 'var(--text-muted)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {isSelected && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }}></div>}
                  </div>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  {track.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Primary CTA */}
        <button 
          className="btn btn-primary"
          onClick={onStart}
          style={{
            fontSize: '1rem',
            padding: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          Start 60-Day Challenge
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </section>

      {/* Trust & Proof of Work details */}
      <footer style={{ textAlign: 'center', padding: '10px 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
          Join college developers showing daily proof of work. <br />
          No signup or payment required. Locally simulated dashboard.
        </p>
      </footer>

    </div>
  );
}
