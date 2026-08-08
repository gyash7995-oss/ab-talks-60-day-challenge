import React from 'react';

export default function TaskCard({ dayData, onStartChallenge, trackName }) {
  const { day, title, status, points, description, requirements, proofRequirements } = dayData;

  const getStatusStyle = () => {
    switch (status) {
      case 'completed':
        return { bg: 'rgba(16, 185, 129, 0.1)', text: 'var(--success)', border: 'rgba(16, 185, 129, 0.3)', label: 'Completed' };
      case 'missed':
        return { bg: 'rgba(239, 68, 68, 0.1)', text: 'var(--danger)', border: 'rgba(239, 68, 68, 0.3)', label: 'Missed' };
      case 'current':
        return { bg: 'rgba(139, 92, 246, 0.12)', text: 'var(--accent)', border: 'rgba(139, 92, 246, 0.4)', label: "Today's Task" };
      default:
        return { bg: 'rgba(255, 255, 255, 0.03)', text: 'var(--text-muted)', border: 'var(--border)', label: 'Locked' };
    }
  };

  const statusStyle = getStatusStyle();

  return (
    <article 
      className="glass-card" 
      style={{
        position: 'relative',
        opacity: status === 'locked' ? 0.6 : 1,
        borderLeft: `4px solid ${status === 'current' ? 'var(--accent)' : status === 'completed' ? 'var(--success)' : status === 'missed' ? 'var(--danger)' : 'transparent'}`,
        padding: '24px 20px',
      }}
    >
      {/* Card Header Info */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: '14px',
          gap: '10px'
        }}
      >
        <span 
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--primary)',
            background: 'rgba(6, 182, 212, 0.08)',
            padding: '3px 8px',
            borderRadius: '6px',
          }}
        >
          DAY {day} / 60
        </span>
        
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
          <span 
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: statusStyle.text,
              backgroundColor: statusStyle.bg,
              border: `1px solid ${statusStyle.border}`,
              padding: '3px 8px',
              borderRadius: '6px',
            }}
          >
            {statusStyle.label}
          </span>
          {points > 0 && (
            <span 
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                background: 'rgba(255, 255, 255, 0.06)',
                padding: '3px 8px',
                borderRadius: '6px',
              }}
            >
              +{points} XP
            </span>
          )}
        </div>
      </div>

      {/* Task Title */}
      <h3 
        style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          marginBottom: '10px',
          color: status === 'locked' ? 'var(--text-secondary)' : 'var(--text-primary)',
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>

      {/* Track info if available */}
      {trackName && status === 'current' && (
        <div 
          style={{ 
            fontSize: '0.75rem', 
            color: 'var(--text-muted)', 
            marginBottom: '16px',
            textTransform: 'uppercase',
            fontWeight: 600,
            letterSpacing: '0.05em'
          }}
        >
          Track: {trackName}
        </div>
      )}

      {/* Collapsed view for locked days */}
      {status === 'locked' ? (
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
          Unlocked when you complete previous tasks. Keep building!
        </p>
      ) : (
        <>
          {description && (
            <p 
              style={{ 
                fontSize: '0.925rem', 
                color: 'var(--text-secondary)', 
                marginBottom: '20px', 
                lineHeight: 1.6 
              }}
            >
              {description}
            </p>
          )}

          {/* Build Requirements */}
          {requirements && requirements.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <h4 
                style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 700, 
                  color: 'var(--text-primary)', 
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span style={{ width: '4px', height: '12px', background: 'var(--primary)', borderRadius: '2px' }}></span>
                Build Requirements
              </h4>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {requirements.map((req, idx) => (
                  <li 
                    key={idx} 
                    style={{ 
                      fontSize: '0.875rem', 
                      color: 'var(--text-secondary)', 
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      lineHeight: 1.5
                    }}
                  >
                    <span style={{ color: 'var(--primary)', marginTop: '2px' }}>✓</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Proof Requirements */}
          {proofRequirements && proofRequirements.length > 0 && (
            <div 
              style={{ 
                background: 'rgba(255, 255, 255, 0.02)', 
                border: '1px dashed var(--border)',
                borderRadius: '10px',
                padding: '12px 14px',
                marginBottom: '20px'
              }}
            >
              <h4 
                style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: 700, 
                  color: 'var(--text-secondary)', 
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Required Proof of Work
              </h4>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {proofRequirements.map((proof, idx) => (
                  <li 
                    key={idx} 
                    style={{ 
                      fontSize: '0.825rem', 
                      color: 'var(--text-secondary)', 
                      marginBottom: '6px',
                      display: 'flex',
                      gap: '6px',
                      lineHeight: 1.4
                    }}
                  >
                    <span style={{ color: 'var(--accent)' }}>•</span>
                    <span>{proof}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Action trigger button */}
          {onStartChallenge && status === 'current' && (
            <button 
              className="btn btn-accent" 
              onClick={onStartChallenge}
              style={{ marginTop: '4px' }}
            >
              Submit Proof of Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          )}
        </>
      )}
    </article>
  );
}
