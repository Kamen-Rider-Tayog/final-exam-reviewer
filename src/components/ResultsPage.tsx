import { useState } from 'react';
import { Trophy, Clock, CheckCircle, XCircle, Home, RotateCcw, Eye, ChevronUp } from 'lucide-react';
import type { QuizState } from '../types';
import { calculateGrade, getPerformanceMessage, formatDuration } from '../utils/grading';
import { saveToLeaderboard } from '../utils/storage';

interface ResultsPageProps {
  state: QuizState;
  onRetake: () => void;
  onReview: () => void;
  onLeaderboard: () => void;
  onHome: () => void;
}

export default function ResultsPage({ 
  state, 
  onRetake, 
  onReview, 
  onLeaderboard, 
  onHome 
}: ResultsPageProps) {
  const [showQuestions, setShowQuestions] = useState(false);
  
  const calculateResults = () => {
    let correct = 0;
    state.questions.forEach((question, index) => {
      if (state.answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    const total = state.questions.length;
    const score = Math.round((correct / total) * 100);
    const duration = Date.now() - state.startTime;
    
    return { correct, total, score, duration };
  };

  const results = calculateResults();
  const grade = calculateGrade(results.score);
  const message = getPerformanceMessage(results.score);
  const durationFormatted = formatDuration(results.duration);

  const leaderboardEntry = {
    username: state.username,
    score: results.correct,
    percentage: results.score,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    duration: results.duration,
    subjectId: state.subjectId
  };
  
  saveToLeaderboard(leaderboardEntry);

  return (
    <div className="min-h-screen w-screen max-w-[100vw] bg-gray-50">
      <div className="p-4 w-full max-w-[100vw]">
        <div className="max-w-4xl mx-auto">
          {/* Header - Minimal */}
          <div className="text-center mb-8 pt-4">
            <h1 className="text-xl font-medium text-gray-800">Results</h1>
            <p className="text-gray-500 text-sm mt-1">{state.subjectId.toUpperCase()} • {results.total} Questions</p>
          </div>

          {/* Score Card - Minimal */}
          <div className="bg-white border rounded-lg p-6 mb-6">
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${results.score * 2.83} 283`}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800">{results.score}%</div>
                    <div className="text-sm text-gray-500">{results.correct}/{results.total}</div>
                  </div>
                </div>
              </div>

              {/* Centered Grade */}
              <div className="text-center mb-3">
                <div className="text-lg font-medium text-gray-700 mb-1">Grade</div>
                <div className="text-4xl font-bold text-blue-600">{grade}</div>
              </div>

              <p className="text-gray-600 text-sm">{message}</p>
            </div>

            {/* Simple Stats */}
            <div className="grid grid-cols-3 gap-3 border-t pt-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Clock className="w-4 h-4 text-gray-500 mr-1" />
                  <div className="text-sm text-gray-600">Time</div>
                </div>
                <div className="font-medium">{durationFormatted}</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                  <div className="text-sm text-gray-600">Correct</div>
                </div>
                <div className="font-medium">{results.correct}</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <XCircle className="w-4 h-4 text-red-500 mr-1" />
                  <div className="text-sm text-gray-600">Wrong</div>
                </div>
                <div className="font-medium">{results.total - results.correct}</div>
              </div>
            </div>
          </div>

          {/* Action Buttons - Simple */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            <button
              onClick={onRetake}
              className="bg-white border rounded-lg p-3 flex flex-col items-center hover:bg-gray-50 transition"
              title="Retake Quiz"
            >
              <RotateCcw className="w-5 h-5 text-gray-600 mb-1" />
              <span className="text-xs text-gray-600">Retake</span>
            </button>
            
            <button
              onClick={() => setShowQuestions(!showQuestions)}
              className="bg-white border rounded-lg p-3 flex flex-col items-center hover:bg-gray-50 transition"
              title="View Details"
            >
              <Eye className="w-5 h-5 text-gray-600 mb-1" />
              <span className="text-xs text-gray-600">Details</span>
            </button>
            
            <button
              onClick={onLeaderboard}
              className="bg-white border rounded-lg p-3 flex flex-col items-center hover:bg-gray-50 transition"
              title="Leaderboard"
            >
              <Trophy className="w-5 h-5 text-gray-600 mb-1" />
              <span className="text-xs text-gray-600">Rank</span>
            </button>
            
            <button
              onClick={onHome}
              className="bg-white border rounded-lg p-3 flex flex-col items-center hover:bg-gray-50 transition"
              title="Home"
            >
              <Home className="w-5 h-5 text-gray-600 mb-1" />
              <span className="text-xs text-gray-600">Home</span>
            </button>
          </div>

          {/* Question Breakdown - Minimal */}
          {showQuestions && (
            <div className="bg-white border rounded-lg mb-6">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-sm font-medium text-gray-700">Question Details</h3>
                <button
                  onClick={() => setShowQuestions(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
              
              <div className="max-h-64 overflow-y-auto">
                {state.questions.map((question, index) => {
                  const isCorrect = state.answers[index] === question.correctAnswer;
                  return (
                    <div
                      key={question.id}
                      className={`p-3 border-b ${isCorrect ? '' : 'bg-red-50'}`}
                    >
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded flex items-center justify-center text-xs mr-3 ${isCorrect ? 'bg-gray-100 text-gray-700' : 'bg-red-100 text-red-700'}`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-700">
                            Your answer: {String.fromCharCode(65 + (state.answers[index] || 0))}
                            {!isCorrect && ` • Correct: ${String.fromCharCode(65 + question.correctAnswer)}`}
                          </div>
                        </div>
                        <div className={`text-xs px-2 py-1 rounded ${isCorrect ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-100'}`}>
                          {isCorrect ? '✓' : '✗'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="p-3 border-t">
                <button
                  onClick={onReview}
                  className="w-full text-sm border rounded-lg py-2 hover:bg-gray-50 transition"
                >
                  Review Questions
                </button>
              </div>
            </div>
          )}

          {/* Simple Footer */}
          <div className="text-center text-sm text-gray-500 pt-4 border-t">
            Score saved to leaderboard • Ready for another challenge?
          </div>
        </div>
      </div>
    </div>
  );
}