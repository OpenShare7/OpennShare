import React from 'react';
import { X, Home, MessageCircle, BookOpen, Users, Video, CheckSquare, Settings, HelpCircle } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: MessageCircle, label: 'Ask Doubts', path: '/doubts' },
    { icon: BookOpen, label: 'Free Lectures', path: '/lectures' },
    { icon: Video, label: 'Global Chat', path: '/chat' },
    { icon: Users, label: 'Study Rooms', path: '/rooms' },
    { icon: CheckSquare, label: 'To-Do & Timer', path: '/todo' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Help & Support', path: '/support' }
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          zIndex: 1100,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease'
        }}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div style={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: '280px',
        background: 'rgba(10, 14, 39, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1200,
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '4px 0 24px rgba(0, 0, 0, 0.3)'
      }}>
        
        {/* Header */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            color: '#fbbf24',
            letterSpacing: '-0.5px'
          }}>
            OpennShare
          </h2>
          
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '0.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <X color="white" size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem'
        }}>
          {menuItems.map((item, index) => (
            <MenuItem 
              key={index}
              icon={item.icon}
              label={item.label}
              path={item.path}
            />
          ))}
        </div>

        {/* Footer */}
        <div style={{
          padding: '1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            background: 'rgba(147, 51, 234, 0.1)',
            border: '1px solid rgba(147, 51, 234, 0.3)',
            borderRadius: '10px',
            padding: '1rem',
            textAlign: 'center'
          }}>
            <p style={{
              color: '#9ca3af',
              fontSize: '0.85rem',
              marginBottom: '0.5rem'
            }}>
              Join our community
            </p>
            <p style={{
              color: '#ffffff',
              fontSize: '1.2rem',
              fontWeight: '700'
            }}>
              1M+ Students
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

function MenuItem({ icon: Icon, label, path }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={path}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.9rem 1rem',
        marginBottom: '0.5rem',
        borderRadius: '10px',
        background: isHovered ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
        border: '1px solid transparent',
        borderColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        textDecoration: 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon 
        color={isHovered ? '#fbbf24' : '#9ca3af'} 
        size={22}
        style={{ transition: 'color 0.2s ease' }}
      />
      <span style={{
        color: isHovered ? '#ffffff' : '#9ca3af',
        fontSize: '1rem',
        fontWeight: '600',
        transition: 'color 0.2s ease'
      }}>
        {label}
      </span>
    </a>
  );
}

export default Sidebar;
