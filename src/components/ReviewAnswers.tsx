import { useState } from 'react';
import { CheckCircle, XCircle, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import type { QuizState } from '../types';

interface ReviewAnswersProps {
  state: QuizState;
  onBack: () => void;
}

export default function ReviewAnswers({ state, onBack }: ReviewAnswersProps) {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const calculateScore = () => {
    let correct = 0;
    state.questions.forEach((question, index) => {
      if (state.answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: state.questions.length };
  };

  const score = calculateScore();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pt-4">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="mr-4 p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Review Answers</h1>
              <p className="text-gray-600">Check your responses and explanations</p>
            </div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg px-4 py-2">
            <div className="font-bold text-gray-800">{score.correct}/{score.total} Correct</div>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {state.questions.map((question, index) => {
            const isCorrect = state.answers[index] === question.correctAnswer;
            const userAnswer = state.answers[index];
            const isExpanded = expandedQuestion === index;

            return (
              <div key={question.id} className="bg-white border border-gray-300 rounded-lg overflow-hidden">
                {/* Question Header */}
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded flex items-center justify-center mr-3 ${
                      isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-800">{question.question}</div>
                      <div className="flex items-center mt-1">
                        {isCorrect ? (
                          <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500 mr-1" />
                        )}
                        <span className={`text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                        <span className="text-gray-500 text-sm mx-2">•</span>
                        <span className="text-gray-600 text-sm">
                          Your answer: {userAnswer !== null ? 
                            String.fromCharCode(65 + userAnswer) : 'Skipped'}
                        </span>
                      </div>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-gray-200 p-4">
                    {/* Choices */}
                    <div className="mb-6">
                      <h3 className="font-medium text-gray-700 mb-3">Choices:</h3>
                      <div className="space-y-2">
                        {question.choices.map((choice, choiceIndex) => {
                          const isUserChoice = choiceIndex === userAnswer;
                          const isCorrectChoice = choiceIndex === question.correctAnswer;
                          
                          return (
                            <div
                              key={choiceIndex}
                              className={`p-3 rounded border ${
                                isCorrectChoice
                                  ? 'border-green-300 bg-green-50'
                                  : isUserChoice && !isCorrectChoice
                                  ? 'border-red-300 bg-red-50'
                                  : 'border-gray-200'
                              }`}
                            >
                              <div className="flex items-center">
                                <div className={`w-6 h-6 rounded flex items-center justify-center mr-3 ${
                                  isCorrectChoice
                                    ? 'bg-green-100 text-green-800'
                                    : isUserChoice && !isCorrectChoice
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-gray-100 text-gray-700'
                                }`}>
                                  {String.fromCharCode(65 + choiceIndex)}
                                </div>
                                <span className="text-gray-800">{choice}</span>
                                {isCorrectChoice && (
                                  <span className="ml-auto text-green-600 text-sm font-medium">
                                    ✓ Correct
                                  </span>
                                )}
                                {isUserChoice && !isCorrectChoice && (
                                  <span className="ml-auto text-red-600 text-sm font-medium">
                                    ✗ Your answer
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Explanation */}
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Explanation:</h3>
                      <p className="text-gray-800 p-3 bg-gray-50 rounded border border-gray-200">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">{score.correct}</div>
            <div className="text-gray-700">Correct Answers</div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">{score.total - score.correct}</div>
            <div className="text-gray-700">Incorrect Answers</div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {Math.round((score.correct / score.total) * 100)}%
            </div>
            <div className="text-gray-700">Accuracy</div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-8 border-t border-gray-300">
          <button
            onClick={onBack}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            Back to Results
          </button>
        </div>
      </div>
    </div>
  );
}