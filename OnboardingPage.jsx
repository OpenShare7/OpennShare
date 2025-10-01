import React, { useState } from 'react';
import { ArrowRight, GraduationCap } from 'lucide-react';

const OnboardingPage = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    class: '',
    board: '',
    stream: '',
    subjects: [],
    goal: ''
  });

  const classes = ['8th', '9th', '10th', '11th', '12th', 'College', 'Other'];
  const boards = ['CBSE', 'ICSE', 'State Board', 'IB', 'Other'];
  const streams = ['Science', 'Commerce', 'Arts'];
  const subjects = {
    science: ['Physics', 'Chemistry', 'Math', 'Biology', 'Computer Science'],
    commerce: ['Accountancy', 'Business Studies', 'Economics', 'Math'],
    arts: ['History', 'Geography', 'Political Science', 'Psychology', 'Sociology']
  };
  const goals = ['Board Exam Prep', 'JEE Preparation', 'NEET Preparation', 'General Learning', 'Competitive Exams'];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else onComplete(formData);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleSubject = (subject) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e27 0%, #141b2d 50%, #1a1f37 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="glass-card" style={{
        maxWidth: '600px',
        width: '100%',
        padding: '2.5rem',
        position: 'relative'
      }}>
        
        {/* Progress Bar */}
        <div style={{
          marginBottom: '2rem',
          display: 'flex',
          gap: '0.5rem'
        }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{
              flex: 1,
              height: '4px',
              background: i <= step ? '#fbbf24' : 'rgba(255, 255, 255, 0.1)',
              borderRadius: '2px',
              transition: 'background 0.3s ease'
            }} />
          ))}
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <GraduationCap size={48} color="#fbbf24" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '0.5rem'
          }}>
            Welcome to OpennShare!
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1rem' }}>
            Let's personalize your experience
          </p>
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div>
            <h3 style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
              Tell us about yourself
            </h3>
            
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{
                width: '100%',
                padding: '1rem',
                marginBottom: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                color: '#ffffff',
                fontSize: '1rem'
              }}
            />

            <input
              type="number"
              placeholder="Your Age"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
              style={{
                width: '100%',
                padding: '1rem',
                marginBottom: '1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                color: '#ffffff',
                fontSize: '1rem'
              }}
            />

            <label style={{ color: '#9ca3af', display: 'block', marginBottom: '0.5rem' }}>
              Select Your Class
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {classes.map(cls => (
                <button
                  key={cls}
                  onClick={() => setFormData({...formData, class: cls})}
                  style={{
                    padding: '0.75rem',
                    background: formData.class === cls ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${formData.class === cls ? '#fbbf24' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '8px',
                    color: formData.class === cls ? '#fbbf24' : '#9ca3af',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cls}
                </button>
              ))}
            </div>

            <label style={{ color: '#9ca3af', display: 'block', marginBottom: '0.5rem' }}>
              Select Your Board
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
              {boards.map(board => (
                <button
                  key={board}
                  onClick={() => setFormData({...formData, board: board})}
                  style={{
                    padding: '0.75rem',
                    background: formData.board === board ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${formData.board === board ? '#fbbf24' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '8px',
                    color: formData.board === board ? '#fbbf24' : '#9ca3af',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {board}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Stream & Subjects */}
        {step === 2 && (
          <div>
            <h3 style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
              Choose Your Stream & Subjects
            </h3>

            {['11th', '12th', 'College'].includes(formData.class) && (
              <>
                <label style={{ color: '#9ca3af', display: 'block', marginBottom: '0.5rem' }}>
                  Select Stream
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {streams.map(stream => (
                    <button
                      key={stream}
                      onClick={() => setFormData({...formData, stream: stream, subjects: []})}
                      style={{
                        padding: '0.75rem',
                        background: formData.stream === stream ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${formData.stream === stream ? '#fbbf24' : 'rgba(255, 255, 255, 0.1)'}`,
                        borderRadius: '8px',
                        color: formData.stream === stream ? '#fbbf24' : '#9ca3af',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {stream}
                    </button>
                  ))}
                </div>
              </>
            )}

            <label style={{ color: '#9ca3af', display: 'block', marginBottom: '0.5rem' }}>
              Select Subjects (Multiple)
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
              {(formData.stream && subjects[formData.stream.toLowerCase()] || subjects.science).map(subject => (
                <button
                  key={subject}
                  onClick={() => toggleSubject(subject)}
                  style={{
                    padding: '0.75rem',
                    background: formData.subjects.includes(subject) ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${formData.subjects.includes(subject) ? '#fbbf24' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '8px',
                    color: formData.subjects.includes(subject) ? '#fbbf24' : '#9ca3af',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Goal */}
        {step === 3 && (
          <div>
            <h3 style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
              What's your learning goal?
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {goals.map(goal => (
                <button
                  key={goal}
                  onClick={() => setFormData({...formData, goal: goal})}
                  style={{
                    padding: '1rem',
                    background: formData.goal === goal ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${formData.goal === goal ? '#fbbf24' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '10px',
                    color: formData.goal === goal ? '#fbbf24' : '#9ca3af',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease',
                    textAlign: 'left'
                  }}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          {step > 1 && (
            <button
              onClick={handleBack}
              style={{
                flex: 1,
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                color: '#ffffff',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              Back
            </button>
          )}
          
          <button
            onClick={handleNext}
            disabled={
              (step === 1 && (!formData.name || !formData.class || !formData.board)) ||
              (step === 2 && formData.subjects.length === 0) ||
              (step === 3 && !formData.goal)
            }
            style={{
              flex: 1,
              padding: '1rem',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              border: 'none',
              borderRadius: '10px',
              color: '#000000',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              opacity: (step === 1 && (!formData.name || !formData.class || !formData.board)) ||
                      (step === 2 && formData.subjects.length === 0) ||
                      (step === 3 && !formData.goal) ? 0.5 : 1
            }}
          >
            {step === 3 ? 'Complete' : 'Next'}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
