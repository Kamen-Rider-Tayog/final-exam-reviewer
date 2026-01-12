import { useState, useEffect } from 'react';
import { SUBJECTS } from './data/subjects.ts';
import { QUESTIONS } from './data/index';
import { loadQuizState, clearQuizState, saveQuizState } from './utils/storage.ts';
import { shuffleQuestion } from './utils/shuffle';
import HomePage from './components/HomePage.tsx';
import QuizInterface from './components/QuizInterface.tsx';
import ResultsPage from './components/ResultsPage.tsx';
import type { QuizState } from './types';
import Leaderboard from './components/Leaderboard';
import ReviewAnswers from './components/ReviewAnswers';

type View = 'home' | 'quiz' | 'results' | 'leaderboard' | 'review';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [quizState, setQuizState] = useState<QuizState | null>(null);

  useEffect(() => {
    const saved = loadQuizState();
    if (saved && !saved.completed) {
      setQuizState(saved);
      setView('quiz');
    }
  }, []);

  const startQuiz = (username: string, subjectId: string) => {
    const subject = SUBJECTS.find(s => s.id === subjectId);
    if (!subject) return;

    // Get questions for this subject
    let questions = QUESTIONS[subjectId as keyof typeof QUESTIONS];
    
    // If no questions exist for this subject, use math1a questions as fallback
    if (!questions || questions.length === 0) {
      questions = QUESTIONS.math1a;
    }
    
    // Shuffle questions and their choices
    const shuffledQuestions = questions.map(shuffleQuestion);

    const newState: QuizState = {
      username,
      subjectId,
      currentQuestion: 0,
      answers: Array(shuffledQuestions.length).fill(null),
      startTime: Date.now(),
      completed: false,
      questions: shuffledQuestions
    };

    setQuizState(newState);
    saveQuizState(newState);
    setView('quiz');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {view === 'home' && (
        <HomePage 
          onStartQuiz={startQuiz}
          onViewLeaderboard={() => setView('leaderboard')}
        />
      )}
      {view === 'quiz' && quizState && (
        <QuizInterface 
          state={quizState} 
          onComplete={() => setView('results')}
          onUpdate={setQuizState}
        />
      )}
      {view === 'results' && quizState && (
        <ResultsPage 
          state={quizState}
          onRetake={() => {
            clearQuizState();
            setView('home');
          }}
          onReview={() => setView('review')}
          onLeaderboard={() => setView('leaderboard')}
          onHome={() => {
            clearQuizState();
            setView('home');
          }}
        />
      )}
      {view === 'leaderboard' && (
        <Leaderboard onBack={() => setView('home')} />
      )}
      {view === 'review' && quizState && (
        <ReviewAnswers 
          state={quizState}
          onBack={() => setView('results')}
        />
      )}
    </div>
  );
}