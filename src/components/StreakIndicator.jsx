import React from 'react';

export default function StreakIndicator({ streak, active = true }) {
  return (
    <div 
      className={`streak-badge ${active ? 'active' : 'inactive'}`} 
      aria-label={`Current streak: ${streak} days`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        borderRadius: '50px',
        background: active ? 'rgba(249, 115, 22, 0.12)' : 'rgba(113, 113, 122, 0.1)',
        border: `1px solid ${active ? 'rgba(249, 115, 22, 0.3)' : 'rgba(113, 113, 122, 0.2)'}`,
        boxShadow: active ? '0 0 12px rgba(249, 115, 22, 0.15)' : 'none',
        transition: 'all 0.2s ease',
      }}
    >
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill={active ? '#f97316' : '#71717a'} 
        style={{ filter: active ? 'drop-shadow(0 0 4px rgba(249, 115, 22, 0.5))' : 'none' }}
        aria-hidden="true"
      >
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span 
        style={{
          fontSize: '0.85rem',
          fontWeight: '800',
          color: active ? '#f97316' : '#a1a1aa',
          fontFamily: 'var(--font-sans)',
        }}
      >
        {streak} DAY{streak !== 1 ? 'S' : ''}
      </span>
    </div>
  );
}
