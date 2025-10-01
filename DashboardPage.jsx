import React, { useState } from 'react';
import { TrendingUp, Clock, Award, HelpCircle, CheckCircle, Filter, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AskDoubtModal from '../components/AskDoubtModal';

const DashboardPage = ({ userData }) => {
    const navigate = useNavigate();
  const [filter, setFilter] = useState('all'); 
 const [showAskModal, setShowAskModal] = useState(false);

  // Mock data - baad mein backend se fetch hoga
  const doubts = [
    {
      id: 1,
      question: "How do I solve quadratic equations using the formula method?",
      subject: "Math",
      class: "10th",
      askedBy: "Rahul Sharma",
      timeAgo: "5 mins ago",
      answers: 0,
      difficulty: "Medium",
      urgent: true
    },
    {
      id: 2,
      question: "Explain Newton's Third Law with real-life examples",
      subject: "Physics",
      class: "9th",
      askedBy: "Priya Singh",
      timeAgo: "15 mins ago",
      answers: 2,
      difficulty: "Easy",
      urgent: false
    },
    {
      id: 3,
      question: "What is photosynthesis and write its chemical equation?",
      subject: "Biology",
      class: "10th",
      askedBy: "Amit Kumar",
      timeAgo: "1 hour ago",
      answers: 0,
      difficulty: "Easy",
      urgent: false
    },
    {
      id: 4,
      question: "Derive the mirror formula for concave mirrors",
      subject: "Physics",
      class: "10th",
      askedBy: "Sneha Patel",
      timeAgo: "2 hours ago",
      answers: 1,
      difficulty: "Hard",
      urgent: false
    }
  ];

  const stats = {
    answeredToday: 5,
    karmaPoints: 1247,
    helpedStudents: 89,
    currentStreak: 7
  };
  const handleDoubtSubmit = (formData) => {
    console.log('New doubt submitted:', formData);
    // Backend integration mein yeh actual API call hoga
    alert('Doubt posted successfully! 🎉');
  };

  const filteredDoubts = doubts.filter(d => {
    if (filter === 'unanswered') return d.answers === 0;
    if (filter === 'answered') return d.answers > 0;
    return true;
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e27 0%, #141b2d 50%, #1a1f37 100%)',
      paddingTop: '6rem',
      paddingBottom: '3rem'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        
        {/* Welcome Banner */}
        <div className="glass-card" style={{
          padding: '2rem',
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
          borderColor: 'rgba(251, 191, 36, 0.2)'
        }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '0.5rem'
          }}>
            Welcome back, {userData?.name || 'Student'}! 👋
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '1.1rem' }}>
            Ready to help your squad today? {filteredDoubts.filter(d => d.answers === 0).length} students need your help!
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <StatCard 
            icon={CheckCircle}
            label="Answered Today"
            value={stats.answeredToday}
            color="#10b981"
          />
          <StatCard 
            icon={Award}
            label="Karma Points"
            value={stats.karmaPoints}
            color="#fbbf24"
          />
          <StatCard 
            icon={TrendingUp}
            label="Students Helped"
            value={stats.helpedStudents}
            color="#3b82f6"
          />
          <StatCard 
            icon={Clock}
            label="Day Streak"
            value={`${stats.currentStreak} Days 🔥`}
            color="#ec4899"
          />
        </div>

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 350px',
          gap: '2rem'
        }}>
          
          {/* Doubts Feed */}
          <div>
            {/* Filter Bar */}
            <div className="glass-card" style={{
              padding: '1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <FilterButton 
                  label="All Doubts" 
                  active={filter === 'all'} 
                  onClick={() => setFilter('all')}
                  count={doubts.length}
                />
                <FilterButton 
                  label="Unanswered" 
                  active={filter === 'unanswered'} 
                  onClick={() => setFilter('unanswered')}
                  count={doubts.filter(d => d.answers === 0).length}
                />
                <FilterButton 
                  label="Answered" 
                  active={filter === 'answered'} 
                  onClick={() => setFilter('answered')}
                  count={doubts.filter(d => d.answers > 0).length}
                />
              </div>

              <button style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                color: '#000000',
                padding: '0.7rem 1.5rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: 'none'
              }}>
                <Plus size={18} />
                Ask Doubt
              </button>
            </div>

            {/* Doubt Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {filteredDoubts.map(doubt => (
                <DoubtCard key={doubt.id} doubt={doubt} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Quick Actions */}
            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h3 style={{
                color: '#ffffff',
                fontSize: '1.2rem',
                fontWeight: '700',
                marginBottom: '1rem'
              }}>
                Quick Actions
              </h3>
              
              <button style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(251, 191, 36, 0.1)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                borderRadius: '10px',
                color: '#fbbf24',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '0.75rem'
              }}>
                🎯 Daily Challenge: Answer 3 Doubts
              </button>

              <button style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(147, 51, 234, 0.1)',
                border: '1px solid rgba(147, 51, 234, 0.3)',
                borderRadius: '10px',
                color: '#9333ea',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                📚 Browse Lectures
              </button>
            </div>

            {/* Leaderboard Preview */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{
                color: '#ffffff',
                fontSize: '1.2rem',
                fontWeight: '700',
                marginBottom: '1rem'
              }}>
                🏆 Top Contributors
              </h3>
              
              {[
                { name: 'Arjun Mehta', points: 2547, rank: 1 },
                { name: 'Divya Reddy', points: 2301, rank: 2 },
                { name: 'Rohan Verma', points: 2156, rank: 3 }
              ].map(user => (
                <div key={user.rank} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem',
                  marginBottom: '0.5rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      background: user.rank === 1 ? '#fbbf24' : user.rank === 2 ? '#9ca3af' : '#cd7f32',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      color: '#000000'
                    }}>
                      {user.rank}
                    </span>
                    <span style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '600' }}>
                      {user.name}
                    </span>
                  </div>
                  <span style={{ color: '#fbbf24', fontSize: '0.9rem', fontWeight: '700' }}>
                    {user.points}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="glass-card" style={{
      padding: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        background: `${color}20`,
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Icon color={color} size={24} />
      </div>
      <div>
        <p style={{ color: '#9ca3af', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
          {label}
        </p>
        <p style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: '800' }}>
          {value}
        </p>
      </div>
    </div>
  );
}

function FilterButton({ label, active, onClick, count }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.65rem 1.25rem',
        background: active ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255, 255, 255, 0.05)',
        border: `1px solid ${active ? '#fbbf24' : 'rgba(255, 255, 255, 0.1)'}`,
        borderRadius: '10px',
        color: active ? '#fbbf24' : '#9ca3af',
        fontSize: '0.9rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
    >
      {label} ({count})
    </button>
  );
}

function DoubtCard({ doubt }) {
  const navigate = useNavigate();  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass-card"
      onClick={() => navigate(`/doubt/${doubt.id}`)} 
      style={{
        padding: '1.5rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        borderColor: isHovered ? 'rgba(251, 191, 36, 0.3)' : 'rgba(255, 255, 255, 0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <span style={{
          padding: '0.35rem 0.75rem',
          background: 'rgba(251, 191, 36, 0.2)',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          borderRadius: '6px',
          color: '#fbbf24',
          fontSize: '0.8rem',
          fontWeight: '600'
        }}>
          {doubt.subject}
        </span>
        
        <span style={{
          padding: '0.35rem 0.75rem',
          background: 'rgba(147, 51, 234, 0.2)',
          border: '1px solid rgba(147, 51, 234, 0.3)',
          borderRadius: '6px',
          color: '#9333ea',
          fontSize: '0.8rem',
          fontWeight: '600'
        }}>
          Class {doubt.class}
        </span>

        {doubt.urgent && (
          <span style={{
            padding: '0.35rem 0.75rem',
            background: 'rgba(239, 68, 68, 0.2)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '6px',
            color: '#ef4444',
            fontSize: '0.8rem',
            fontWeight: '600'
          }}>
            🔥 Urgent
          </span>
        )}

        <span style={{
          marginLeft: 'auto',
          color: '#6b7280',
          fontSize: '0.85rem'
        }}>
          {doubt.timeAgo}
        </span>
      </div>

      {/* Question */}
      <h3 style={{
        color: '#ffffff',
        fontSize: '1.1rem',
        fontWeight: '700',
        marginBottom: '1rem',
        lineHeight: '1.5'
      }}>
        {doubt.question}
      </h3>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, #9333ea 0%, #3b82f6 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '0.85rem',
            fontWeight: '700'
          }}>
            {doubt.askedBy.charAt(0)}
          </div>
          <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
            {doubt.askedBy}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{
            color: doubt.answers === 0 ? '#ef4444' : '#10b981',
            fontSize: '0.9rem',
            fontWeight: '600'
          }}>
            {doubt.answers === 0 ? 'No answers yet' : `${doubt.answers} ${doubt.answers === 1 ? 'answer' : 'answers'}`}
          </span>

          <button style={{
            padding: '0.5rem 1.25rem',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            color: '#000000',
            borderRadius: '8px',
            fontSize: '0.85rem',
            fontWeight: '700',
            cursor: 'pointer',
            border: 'none'
          }}>
            Help Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
