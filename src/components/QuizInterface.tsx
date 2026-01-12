import { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight, Flag } from 'lucide-react';
import type { QuizState } from '../types';
import { saveQuizState } from '../utils/storage';

interface QuizInterfaceProps {
  state: QuizState;
  onComplete: () => void;
  onUpdate: (state: QuizState) => void;
}

export default function QuizInterface({ state, onComplete, onUpdate }: QuizInterfaceProps) {
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);

  const currentQuestion = state.questions[state.currentQuestion] || {
    id: '',
    question: 'Loading...',
    type: 'multiple',
    choices: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correctAnswer: 0,
    explanation: ''
  };

  const selectedAnswer = state.answers[state.currentQuestion];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (index: number) => {
    const newAnswers = [...state.answers];
    newAnswers[state.currentQuestion] = index;
    const newState = { ...state, answers: newAnswers };
    onUpdate(newState);
    saveQuizState(newState);
  };

  const handleNext = () => {
    if (state.currentQuestion < state.questions.length - 1) {
      const newState = { ...state, currentQuestion: state.currentQuestion + 1 };
      onUpdate(newState);
      saveQuizState(newState);
    }
  };

  const handlePrevious = () => {
    if (state.currentQuestion > 0) {
      const newState = { ...state, currentQuestion: state.currentQuestion - 1 };
      onUpdate(newState);
      saveQuizState(newState);
    }
  };

  const handleFlag = () => {
    if (flaggedQuestions.includes(state.currentQuestion)) {
      setFlaggedQuestions(flaggedQuestions.filter(q => q !== state.currentQuestion));
    } else {
      setFlaggedQuestions([...flaggedQuestions, state.currentQuestion]);
    }
  };

  const handleComplete = () => {
    const completedState = { ...state, completed: true };
    onUpdate(completedState);
    saveQuizState(completedState);
    onComplete();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((state.currentQuestion + 1) / state.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Header */}
        <div className="md:hidden bg-white border border-gray-300 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <div className="text-sm text-gray-600">Question</div>
              <div className="font-bold text-gray-800">{state.currentQuestion + 1}/{state.questions.length}</div>
            </div>
            <div className="flex items-center bg-blue-50 px-3 py-1 rounded">
              <Clock className="w-4 h-4 text-blue-600 mr-2" />
              <span className="font-bold text-blue-700">{formatTime(timeLeft)}</span>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block bg-white border border-gray-300 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-800">Quiz in Progress</h1>
              <p className="text-gray-600">Question {state.currentQuestion + 1} of {state.questions.length}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-bold text-blue-700">{formatTime(timeLeft)}</span>
              </div>
              <button
                onClick={handleComplete}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-medium"
              >
                Submit
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Questions Navigation - Mobile Top / Desktop Left */}
          <div className="lg:w-1/4">
            <div className="bg-white border border-gray-300 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-4">Questions</h3>
              <div className="grid grid-cols-5 gap-2">
                {state.questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const newState = { ...state, currentQuestion: index };
                      onUpdate(newState);
                      saveQuizState(newState);
                    }}
                    className={`h-10 rounded flex items-center justify-center text-sm font-medium ${
                      index === state.currentQuestion
                        ? 'bg-blue-500 text-white'
                        : state.answers[index] !== null
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } ${flaggedQuestions.includes(index) ? 'ring-2 ring-yellow-400' : ''}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              {/* Mobile Submit Button */}
              <button
                onClick={handleComplete}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded font-medium md:hidden"
              >
                Submit Quiz
              </button>
            </div>
          </div>

          {/* Question Card */}
          <div className="lg:w-3/4">
            <div className="bg-white border border-gray-300 rounded-lg p-4 md:p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Question {state.currentQuestion + 1}</div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-800">{currentQuestion.question}</h2>
                </div>
                <button
                  onClick={handleFlag}
                  className={`p-2 rounded ${
                    flaggedQuestions.includes(state.currentQuestion)
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Flag className="w-5 h-5" />
                </button>
              </div>

              {/* Choices */}
              <div className="space-y-3">
                {currentQuestion.choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded border-2 transition ${
                      selectedAnswer === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded flex items-center justify-center mr-4 ${
                        selectedAnswer === index
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-gray-800">{choice}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row justify-between mt-8 pt-6 border-t border-gray-200 space-y-3 sm:space-y-0">
                <button
                  onClick={handlePrevious}
                  disabled={state.currentQuestion === 0}
                  className={`flex items-center justify-center px-4 py-3 rounded ${
                    state.currentQuestion === 0
                      ? 'bg-gray-200 text-gray-500'
                      : 'bg-gray-800 hover:bg-gray-900 text-white'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </button>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={handleFlag}
                    className={`px-4 py-3 rounded ${
                      flaggedQuestions.includes(state.currentQuestion)
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {flaggedQuestions.includes(state.currentQuestion) ? 'Unflag' : 'Flag'}
                  </button>
                  {state.currentQuestion === state.questions.length - 1 ? (
                    <button
                      onClick={handleComplete}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-medium"
                    >
                      Submit Quiz
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-medium flex items-center justify-center"
                    >
                      Next
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}