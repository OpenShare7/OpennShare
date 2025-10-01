import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import OnboardingPage from './pages/OnboardingPage'
import DashboardPage from './pages/DashboardPage'
import DoubtDetailPage from './pages/DoubtDetailPage'  


function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showMusicPlayer, setShowMusicPlayer] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isOnboarded, setIsOnboarded] = useState(false)
  const [userData, setUserData] = useState(null)

  const handleOnboardingComplete = (data) => {
    setUserData(data)
    setIsOnboarded(true)
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <Router>
      {/* Show Onboarding if logged in but not onboarded */}
      {isLoggedIn && !isOnboarded ? (
        <OnboardingPage onComplete={handleOnboardingComplete} />
      ) : (
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0a0e27 0%, #141b2d 50%, #1a1f37 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated Background Blobs */}
          <div style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'float 8s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'float 10s ease-in-out infinite reverse'
          }} />

          <Navbar 
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            showMusicPlayer={showMusicPlayer}
            setShowMusicPlayer={setShowMusicPlayer}
          />

          <Sidebar 
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
          
          <main style={{ position: 'relative', zIndex: 1 }}>
            <Routes>
              <Route 
                path="/" 
                element={
                  isLoggedIn && isOnboarded ? (
                    <DashboardPage userData={userData} />
                  ) : (
                    <HomePage onLogin={handleLogin} />
                  )
                } 
              />
               <Route path="/doubt/:id" element={<DoubtDetailPage />} />
            </Routes>
          </main>

          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) translateX(0px); }
              50% { transform: translateY(-20px) translateX(20px); }
            }
          `}</style>
        </div>
      )}
    </Router>
  )
}

function HomePage({ onLogin }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      paddingTop: '6rem',
      textAlign: 'center',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      
      {/* Hero Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          fontWeight: '900',
          color: '#fbbf24',
          marginBottom: '1rem',
          letterSpacing: '-3px',
          lineHeight: '1.1'
        }}>
          OpennShare
        </h1>

        <p style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
          fontWeight: '600',
          color: '#ffffff',
          marginBottom: '1rem',
          letterSpacing: '-0.5px'
        }}>
          World's Largest Student Community :)
        </p>

        <p style={{
          fontSize: '1.15rem',
          color: '#6b7280',
          maxWidth: '700px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          Study smarter, vibe harder. Your ultimate squad for doubts, lectures & chill study sessions.
        </p>

        <button 
          onClick={onLogin}
          style={{
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            color: '#000000',
            padding: '1rem 2.5rem',
            borderRadius: '10px',
            fontSize: '1.05rem',
            fontWeight: '700',
            border: 'none',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(251, 191, 36, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Get Started
        </button>
      </div>

      {/* Feature Cards Grid */}
      <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  width: '100%',
  marginBottom: '3rem'
}}>

        <FeatureCard 
          icon="🎓"
          title="Ask Anything"
          description="Got doubts? Drop them here. Your squad's got your back 24/7"
          gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          glowColor="rgba(102, 126, 234, 0.4)"
        />
        
        <FeatureCard 
          icon="🎵"
          title="Study Vibes"
          description="Lo-fi beats while you grind. Keep the vibe going, stay focused"
          gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
          glowColor="rgba(240, 147, 251, 0.4)"
        />
        
        <FeatureCard 
          icon="📚"
          title="Free Lectures"
          description="Quality content, zero cost. Learn from the best, flex your knowledge"
          gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
          glowColor="rgba(79, 172, 254, 0.4)"
        />
        
        <FeatureCard 
          icon="💬"
          title="Global Chats"
          description="Connect worldwide or keep it local. Chat, share memes, make friends"
          gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
          glowColor="rgba(67, 233, 123, 0.4)"
        />
        
        <FeatureCard 
          icon="👥"
          title="Study Rooms"
          description="Solo or squad? Create private rooms or join public ones. Let's grind together"
          gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
          glowColor="rgba(250, 112, 154, 0.4)"
        />
        
        <FeatureCard 
          icon="✅"
          title="Smart Planning"
          description="To-do lists, timers & productivity tools. Organize like a boss"
          gradient="linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
          glowColor="rgba(48, 207, 208, 0.4)"
        />
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description, gradient, glowColor }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="glass-card" 
      style={{
        padding: '2rem',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-15px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? `0 30px 60px ${glowColor}, 0 0 0 1px rgba(255,255,255,0.1) inset`
          : '0 8px 32px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: gradient,
        opacity: isHovered ? 0.1 : 0,
        transition: 'opacity 0.4s ease',
        borderRadius: '20px',
        pointerEvents: 'none'
      }} />
      
      <div style={{ 
        fontSize: '3rem', 
        marginBottom: '1rem',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'inline-block'
      }}>
        {icon}
      </div>
      
      <h3 style={{ 
        fontSize: '1.4rem', 
        marginBottom: '0.8rem', 
        fontWeight: '800', 
        color: '#ffffff',
        background: isHovered ? gradient : 'transparent',
        WebkitBackgroundClip: isHovered ? 'text' : 'unset',
        WebkitTextFillColor: isHovered ? 'transparent' : '#ffffff',
        transition: 'all 0.4s ease'
      }}>
        {title}
      </h3>
      
      <p style={{ 
        color: '#b4b4b4', 
        fontSize: '1.05rem',
        lineHeight: '1.7'
      }}>
        {description}
      </p>
    </div>
  )
}

export default App
