import { useState } from 'react';
import { BookOpen, Trophy } from 'lucide-react';
import QuizModal from './QuizModal';

interface HomePageProps {
  onStartQuiz: (username: string, subjectId: string) => void;
  onViewLeaderboard: () => void;
}

export default function HomePage({ onStartQuiz, onViewLeaderboard }: HomePageProps)  {
  const [showQuizModal, setShowQuizModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <header className="max-w-[100vw] px-6 pt-8">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">QuizMaster</h1>
          </div>
          <button 
            onClick={onViewLeaderboard}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <Trophy className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Test Your Knowledge
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interactive quizzes. Practice, compete, and improve your skills.
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowQuizModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-xl text-lg font-semibold transition"
          >
            Take a Quiz
          </button>
          <p className="text-gray-500 mt-4">
            Click to begin your assessment
          </p>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="text-gray-500">
          QuizMaster • Practice makes perfect
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Made with ❤︎ by Tayog
        </p>
      </footer>

      {showQuizModal && (
        <QuizModal
          onClose={() => setShowQuizModal(false)}
          onStart={onStartQuiz}
        />
      )}
    </div>
  );
}