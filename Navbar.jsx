import React from 'react';
import { Menu, Music, Bell, User, Download } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode, sidebarOpen, setSidebarOpen, showMusicPlayer, setShowMusicPlayer }) => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(10, 14, 39, 0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        gap: '1rem'
      }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '0.75rem',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <Menu color="white" size={22} />
          </button>

          <h1 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: '800',
            color: '#ffffff',
            letterSpacing: '-1px',
            cursor: 'pointer'
          }}>
            OpennShare
          </h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          
          {/* Download App Button */}
          <button
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              color: 'white',
              padding: '0.65rem 1.3rem',
              borderRadius: '10px',
              fontSize: '0.9rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <Download size={16} />
            <span>Download App</span>
          </button>

          {/* Music Button */}
          <button
            onClick={() => setShowMusicPlayer(!showMusicPlayer)}
            style={{
              background: showMusicPlayer 
                ? 'rgba(147, 51, 234, 0.15)'
                : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${showMusicPlayer ? 'rgba(147, 51, 234, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
              padding: '0.7rem',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = showMusicPlayer 
                ? 'rgba(147, 51, 234, 0.2)' 
                : 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = showMusicPlayer 
                ? 'rgba(147, 51, 234, 0.15)' 
                : 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <Music color="white" size={18} />
          </button>

          {/* Notifications Button */}
          <button
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '0.7rem',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <Bell color="white" size={18} />
            <span style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              width: '7px',
              height: '7px',
              background: '#9333ea',
              borderRadius: '50%'
            }}></span>
          </button>

          {/* Login/Sign Up Button */}
          <button
            style={{
              background: 'rgba(147, 51, 234, 0.15)',
              color: 'white',
              padding: '0.65rem 1.3rem',
              borderRadius: '10px',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(147, 51, 234, 0.25)';
              e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(147, 51, 234, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.3)';
            }}
          >
            <User size={16} />
            <span>Login / Sign Up</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
