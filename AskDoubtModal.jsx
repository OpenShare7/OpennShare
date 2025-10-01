import React, { useState } from 'react';
import { X, Upload, Image as ImageIcon, Send } from 'lucide-react';

const AskDoubtModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    question: '',
    subject: '',
    chapter: '',
    description: '',
    urgent: false
  });

  const subjects = [
    'Math', 'Physics', 'Chemistry', 'Biology', 
    'English', 'Hindi', 'Social Science', 'Computer Science', 
    'Accountancy', 'Business Studies', 'Economics'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.question && formData.subject) {
      onSubmit(formData);
      setFormData({
        question: '',
        subject: '',
        chapter: '',
        description: '',
        urgent: false
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          animation: 'fadeIn 0.2s ease'
        }}
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="glass-card"
          style={{
            maxWidth: '650px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '2rem',
            position: 'relative',
            animation: 'slideUp 0.3s ease'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: '800',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem'
              }}>
                📝
              </span>
              Ask Your Doubt
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
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <X color="white" size={22} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            
            {/* Question Title */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                color: '#9ca3af',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                Question Title <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., How do I solve quadratic equations?"
                value={formData.question}
                onChange={(e) => setFormData({...formData, question: e.target.value})}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(251, 191, 36, 0.5)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              />
            </div>

            {/* Subject & Chapter */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{
                  display: 'block',
                  color: '#9ca3af',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  Subject <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="" style={{ background: '#1a1f37' }}>Select Subject</option>
                  {subjects.map(sub => (
                    <option key={sub} value={sub} style={{ background: '#1a1f37' }}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  color: '#9ca3af',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  Chapter (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g., Quadratic Equations"
                  value={formData.chapter}
                  onChange={(e) => setFormData({...formData, chapter: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Detailed Description */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                color: '#9ca3af',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                Detailed Description (Optional)
              </label>
              <textarea
                placeholder="Add more context, what you've tried, where you're stuck..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={4}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  outline: 'none'
                }}
              />
            </div>

            {/* Image Upload (Placeholder) */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                color: '#9ca3af',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                Attach Image (Optional)
              </label>
              <div style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '2px dashed rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.5)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              }}>
                <ImageIcon size={32} color="#9ca3af" style={{ margin: '0 auto 0.5rem' }} />
                <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                  Click to upload or drag & drop
                </p>
                <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                  PNG, JPG up to 10MB
                </p>
              </div>
            </div>

            {/* Urgent Checkbox */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  checked={formData.urgent}
                  onChange={(e) => setFormData({...formData, urgent: e.target.checked})}
                  style={{
                    width: '20px',
                    height: '20px',
                    cursor: 'pointer'
                  }}
                />
                <span style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
                  🔥 Mark as urgent (need answer within 1 hour)
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.question || !formData.subject}
              style={{
                width: '100%',
                padding: '1.1rem',
                background: (formData.question && formData.subject) 
                  ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: (formData.question && formData.subject) ? '#000000' : '#6b7280',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1.05rem',
                fontWeight: '800',
                cursor: (formData.question && formData.subject) ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s ease',
                opacity: (formData.question && formData.subject) ? 1 : 0.5
              }}
              onMouseOver={(e) => {
                if (formData.question && formData.subject) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(251, 191, 36, 0.4)';
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Send size={20} />
              Post Your Doubt
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default AskDoubtModal;
