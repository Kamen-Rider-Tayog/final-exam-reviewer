import { Trophy, Clock, CheckCircle, XCircle, BarChart3, Home, RotateCcw } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Results</h1>
          <p className="text-gray-700">Congratulations on completing the quiz!</p>
        </div>

        {/* Score Card */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-gray-800">{state.username}</h2>
              <p className="text-gray-600">{state.subjectId.toUpperCase()} • {results.total} Questions</p>
            </div>
            <div className="text-center md:text-right">
              <div className="text-4xl font-bold text-blue-600">{results.score}%</div>
              <div className="text-gray-700">Final Score</div>
            </div>
          </div>

          {/* Performance */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Score Circle */}
            <div className="relative w-48 h-48 mx-auto md:mx-0">
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
                  <div className="text-2xl font-bold text-gray-800">{results.correct}/{results.total}</div>
                  <div className="text-gray-600">Correct</div>
                </div>
              </div>
            </div>

            {/* Grade & Stats */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-bold mb-4 md:mb-0">
                  Grade: {grade}
                </div>
                <div className="text-gray-700 font-medium">{message}</div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-bold text-gray-800">Time</h3>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{durationFormatted}</div>
                </div>

                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="font-bold text-gray-800">Correct</h3>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{results.correct}</div>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <XCircle className="w-5 h-5 text-red-600 mr-2" />
                    <h3 className="font-bold text-gray-800">Incorrect</h3>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{results.total - results.correct}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <button
            onClick={onRetake}
            className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg flex flex-col items-center justify-center transition"
          >
            <RotateCcw className="w-6 h-6 mb-2" />
            <span className="font-medium">Retake</span>
          </button>
          
          <button
            onClick={onReview}
            className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-lg flex flex-col items-center justify-center transition"
          >
            <BarChart3 className="w-6 h-6 mb-2" />
            <span className="font-medium">Review</span>
          </button>
          
          <button
            onClick={onLeaderboard}
            className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg flex flex-col items-center justify-center transition"
          >
            <Trophy className="w-6 h-6 mb-2" />
            <span className="font-medium">Leaderboard</span>
          </button>
          
          <button
            onClick={onHome}
            className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-lg flex flex-col items-center justify-center transition"
          >
            <Home className="w-6 h-6 mb-2" />
            <span className="font-medium">Home</span>
          </button>
        </div>

        {/* Question Breakdown */}
        <div className="bg-white border border-gray-300 rounded-lg p-4 md:p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Question Breakdown</h3>
          <div className="space-y-3">
            {state.questions.map((question, index) => {
              const isCorrect = state.answers[index] === question.correctAnswer;
              return (
                <div
                  key={question.id}
                  className={`flex items-center justify-between p-3 rounded border ${
                    isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded flex items-center justify-center mr-3 ${
                      isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Question {index + 1}</div>
                      <div className="text-sm text-gray-600">
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded text-sm font-medium ${
                    isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {isCorrect ? '+1' : '0'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-gray-300">
          <p className="text-gray-700">
            Want to improve your score? Review the questions you missed and try again!
          </p>
        </div>
      </div>
    </div>
  );
}