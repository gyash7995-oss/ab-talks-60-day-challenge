import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import StreakIndicator from './StreakIndicator';

export default function Navigation({ studentInfo }) {
  const { streak, selectedTrack } = studentInfo;

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '64px',
        background: 'rgba(9, 13, 22, 0.8)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
      }}
      aria-label="Main Navigation"
    >
      {/* Brand Logo */}
      <Link 
        to="/" 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 800,
          fontSize: '1.1rem',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}
      >
        <span 
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
            color: '#05070c',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '0.85rem',
            fontWeight: 900,
          }}
        >
          AB
        </span>
        <span style={{ fontSize: '0.95rem' }}>Talks</span>
      </Link>

      {/* Center: Streak Indicator */}
      <StreakIndicator streak={streak} active={streak > 0} />

      {/* Right: Route Navigation */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <NavLink 
          to="/dashboard" 
          style={({ isActive }) => ({
            fontSize: '0.8rem',
            fontWeight: 700,
            padding: '6px 10px',
            borderRadius: '8px',
            transition: 'all 0.15s ease',
            color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
            background: isActive ? 'rgba(6, 182, 212, 0.08)' : 'transparent',
            border: `1px solid ${isActive ? 'rgba(6, 182, 212, 0.2)' : 'transparent'}`,
          })}
        >
          Dash
        </NavLink>
        <NavLink 
          to="/day/12" 
          style={({ isActive }) => ({
            fontSize: '0.8rem',
            fontWeight: 700,
            padding: '6px 10px',
            borderRadius: '8px',
            transition: 'all 0.15s ease',
            color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
            background: isActive ? 'rgba(139, 92, 246, 0.08)' : 'transparent',
            border: `1px solid ${isActive ? 'rgba(139, 92, 246, 0.2)' : 'transparent'}`,
          })}
        >
          Day 12
        </NavLink>
      </div>
    </nav>
  );
}
