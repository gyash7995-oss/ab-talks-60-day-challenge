import React from 'react';

export default function ReadinessCheck({ 
  githubUrl, 
  githubCommit, 
  linkedinUrl, 
  isSubmitted, 
  onSubmit, 
  isSubmitting 
}) {
  // Simple validation checks
  const isGithubRepoValid = githubUrl.trim().toLowerCase().includes('github.com/') && githubUrl.trim().length > 15;
  const isGithubCommitValid = /^[0-9a-fA-F]{7,40}$/.test(githubCommit.trim());
  const isLinkedinValid = linkedinUrl.trim().toLowerCase().includes('linkedin.com/') && linkedinUrl.trim().length > 15;

  const isGithubReady = isGithubRepoValid && isGithubCommitValid;
  const isLinkedinReady = isLinkedinValid;
  const isAllReady = isGithubReady && isLinkedinReady;

  return (
    <div 
      className="glass-card" 
      style={{
        marginTop: '24px',
        border: `1px solid ${isAllReady ? 'rgba(16, 185, 129, 0.3)' : 'var(--border)'}`,
        background: isAllReady ? 'rgba(16, 185, 129, 0.03)' : 'var(--bg-surface)',
        transition: 'all var(--transition-normal)',
      }}
    >
      <h4 
        style={{
          fontSize: '0.9rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '16px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span 
          style={{ 
            width: '6px', 
            height: '6px', 
            borderRadius: '50%', 
            background: isAllReady ? 'var(--success)' : 'var(--warning)',
            boxShadow: isAllReady ? '0 0 8px var(--success)' : 'none'
          }} 
        />
        Proof-of-Work Readiness Check
      </h4>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
        
        {/* GitHub validation feedback */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              GitHub Proof
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {!isGithubRepoValid ? 'Requires repo URL' : !isGithubCommitValid ? 'Requires valid commit hash (7+ hex characters)' : 'Repo & commit hash verified'}
            </span>
          </div>
          <span 
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '3px 8px',
              borderRadius: '4px',
              backgroundColor: isGithubReady ? 'rgba(16, 185, 129, 0.1)' : 'rgba(249, 115, 22, 0.1)',
              color: isGithubReady ? 'var(--success)' : 'var(--warning)',
              border: `1px solid ${isGithubReady ? 'rgba(16, 185, 129, 0.2)' : 'rgba(249, 115, 22, 0.2)'}`
            }}
          >
            {isGithubReady ? 'Ready' : 'Incomplete'}
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border)' }} />

        {/* LinkedIn validation feedback */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              LinkedIn Proof
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {!isLinkedinValid ? 'Requires public post URL' : 'LinkedIn post URL verified'}
            </span>
          </div>
          <span 
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '3px 8px',
              borderRadius: '4px',
              backgroundColor: isLinkedinReady ? 'rgba(16, 185, 129, 0.1)' : 'rgba(249, 115, 22, 0.1)',
              color: isLinkedinReady ? 'var(--success)' : 'var(--warning)',
              border: `1px solid ${isLinkedinReady ? 'rgba(16, 185, 129, 0.2)' : 'rgba(249, 115, 22, 0.2)'}`
            }}
          >
            {isLinkedinReady ? 'Ready' : 'Incomplete'}
          </span>
        </div>

      </div>

      {/* Global Readiness Message & Submit CTA */}
      <div 
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          padding: '12px 14px',
        }}
      >
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            STATUS:
          </span>
          <span 
            style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              color: isAllReady ? 'var(--success)' : 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            {isAllReady ? 'Ready to Submit' : 'Awaiting Proof'}
          </span>
        </div>

        <button 
          className={`btn ${isAllReady ? 'btn-primary' : 'btn-secondary'}`}
          disabled={!isAllReady || isSubmitting || isSubmitted}
          onClick={onSubmit}
          style={{
            width: '100%',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
          }}
        >
          {isSubmitting ? 'Submitting...' : isSubmitted ? 'Day 12 Completed' : 'Submit Day 12 Work'}
        </button>
      </div>
    </div>
  );
}
