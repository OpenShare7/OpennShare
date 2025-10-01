import React, { useState } from 'react';
import { ArrowLeft, ThumbsUp, MessageCircle, Share2, Award, Clock, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DoubtDetailPage = () => {
  const navigate = useNavigate();
  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState([
    {
      id: 1,
      author: "Priya Sharma",
      authorClass: "10th CBSE",
      authorKarma: 1547,
      content: "The quadratic formula is: x = [-b ± √(b² - 4ac)] / 2a\n\nSteps:\n1. Identify a, b, c from your equation ax² + bx + c = 0\n2. Calculate discriminant: b² - 4ac\n3. Apply the formula\n4. Simplify to get two solutions",
      timestamp: "10 mins ago",
      upvotes: 15,
      isVerified: true,
      hasUpvoted: false
    },
    {
      id: 2,
      author: "Arjun Mehta",
      authorClass: "11th Science",
      authorKarma: 2301,
      content: "Great explanation above! I'll add an example:\n\nSolve: x² + 5x + 6 = 0\na=1, b=5, c=6\n\nx = [-5 ± √(25-24)] / 2\nx = [-5 ± 1] / 2\nx = -2 or x = -3",
      timestamp: "5 mins ago",
      upvotes: 8,
      isVerified: false,
      hasUpvoted: false
    }
  ]);

  // Mock doubt data
  const doubt = {
    id: 1,
    question: "How do I solve quadratic equations using the formula method? I understand factorization but struggling with the formula approach.",
    subject: "Math",
    chapter: "Quadratic Equations",
    class: "10th",
    board: "CBSE",
    askedBy: "Rahul Kumar",
    askerKarma: 234,
    timeAgo: "25 mins ago",
    views: 47,
    difficulty: "Medium"
  };

  const handlePostAnswer = () => {
    if (newAnswer.trim()) {
      const newAnswerObj = {
        id: answers.length + 1,
        author: "You",
        authorClass: "10th CBSE",
        authorKarma: 1247,
        content: newAnswer,
        timestamp: "Just now",
        upvotes: 0,
        isVerified: false,
        hasUpvoted: false
      };
      setAnswers([...answers, newAnswerObj]);
      setNewAnswer('');
    }
  };

  const handleUpvote = (id) => {
    setAnswers(answers.map(ans => 
      ans.id === id ? { ...ans, upvotes: ans.hasUpvoted ? ans.upvotes - 1 : ans.upvotes + 1, hasUpvoted: !ans.hasUpvoted } : ans
    ));
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e27 0%, #141b2d 50%, #1a1f37 100%)',
      paddingTop: '6rem',
      paddingBottom: '3rem'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '0.75rem 1.25rem',
            borderRadius: '10px',
            color: '#9ca3af',
            cursor: 'pointer',
            marginBottom: '2rem',
            fontSize: '0.95rem',
            fontWeight: '600',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.color = '#9ca3af';
          }}
        >
          <ArrowLeft size={20} />
          Back to Feed
        </button>

        {/* Question Card */}
        <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
          
          {/* Tags */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{
              padding: '0.4rem 0.9rem',
              background: 'rgba(251, 191, 36, 0.2)',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              borderRadius: '8px',
              color: '#fbbf24',
              fontSize: '0.85rem',
              fontWeight: '700'
            }}>
              {doubt.subject}
            </span>
            
            <span style={{
              padding: '0.4rem 0.9rem',
              background: 'rgba(147, 51, 234, 0.2)',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              borderRadius: '8px',
              color: '#9333ea',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              Class {doubt.class} • {doubt.board}
            </span>

            <span style={{
              padding: '0.4rem 0.9rem',
              background: 'rgba(59, 130, 246, 0.2)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '8px',
              color: '#3b82f6',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              {doubt.chapter}
            </span>

            <span style={{
              marginLeft: 'auto',
              color: '#6b7280',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Clock size={16} />
              {doubt.timeAgo} • {doubt.views} views
            </span>
          </div>

          {/* Question */}
          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '1.5rem',
            lineHeight: '1.4'
          }}>
            {doubt.question}
          </h1>

          {/* Asker Info */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: '800',
                color: '#000000'
              }}>
                {doubt.askedBy.charAt(0)}
              </div>
              <div>
                <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '700' }}>
                  {doubt.askedBy}
                </p>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>
                  {doubt.askerKarma} karma points
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button style={{
                padding: '0.65rem 1rem',
                background: 'rgba(59, 130, 246, 0.15)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '10px',
                color: '#3b82f6',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Answers Section */}
        <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <MessageCircle size={24} color="#fbbf24" />
            {answers.length} {answers.length === 1 ? 'Answer' : 'Answers'}
          </h2>

          {/* Answers List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {answers.map(answer => (
              <AnswerCard 
                key={answer.id} 
                answer={answer} 
                onUpvote={() => handleUpvote(answer.id)}
              />
            ))}
          </div>
        </div>

        {/* Post Answer Section */}
        <div className="glass-card" style={{ padding: '2rem' }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            Your Answer
          </h3>

          <textarea
            placeholder="Write your answer here... Be detailed and helpful!"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            style={{
              width: '100%',
              minHeight: '150px',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#ffffff',
              fontSize: '1rem',
              fontFamily: 'inherit',
              resize: 'vertical',
              marginBottom: '1rem'
            }}
          />

          <button
            onClick={handlePostAnswer}
            disabled={!newAnswer.trim()}
            style={{
              padding: '0.9rem 2rem',
              background: newAnswer.trim() ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)' : 'rgba(255, 255, 255, 0.1)',
              color: newAnswer.trim() ? '#000000' : '#6b7280',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: newAnswer.trim() ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              opacity: newAnswer.trim() ? 1 : 0.5
            }}
          >
            <Send size={18} />
            Post Answer
          </button>
        </div>
      </div>
    </div>
  );
};

function AnswerCard({ answer, onUpvote }) {
  return (
    <div style={{
      padding: '1.5rem',
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      position: 'relative'
    }}>
      
      {/* Verified Badge */}
      {answer.isVerified && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          padding: '0.35rem 0.75rem',
          background: 'rgba(16, 185, 129, 0.2)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '6px',
          color: '#10b981',
          fontSize: '0.75rem',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem'
        }}>
          <Award size={14} />
          Best Answer
        </div>
      )}

      {/* Author Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{
          width: '40px',
          height: '40px',
          background: 'linear-gradient(135deg, #9333ea 0%, #3b82f6 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1rem',
          fontWeight: '800',
          color: '#ffffff'
        }}>
          {answer.author.charAt(0)}
        </div>
        <div>
          <p style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700' }}>
            {answer.author}
          </p>
          <p style={{ color: '#9ca3af', fontSize: '0.8rem' }}>
            {answer.authorClass} • {answer.authorKarma} karma
          </p>
        </div>
        <span style={{
          marginLeft: 'auto',
          color: '#6b7280',
          fontSize: '0.85rem'
        }}>
          {answer.timestamp}
        </span>
      </div>

      {/* Answer Content */}
      <p style={{
        color: '#e5e7eb',
        fontSize: '1rem',
        lineHeight: '1.7',
        whiteSpace: 'pre-line',
        marginBottom: '1rem'
      }}>
        {answer.content}
      </p>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={onUpvote}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: answer.hasUpvoted ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${answer.hasUpvoted ? 'rgba(251, 191, 36, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
            borderRadius: '8px',
            color: answer.hasUpvoted ? '#fbbf24' : '#9ca3af',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <ThumbsUp size={16} />
          {answer.upvotes}
        </button>
      </div>
    </div>
  );
}

export default DoubtDetailPage;
