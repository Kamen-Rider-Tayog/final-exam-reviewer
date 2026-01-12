import { useState } from 'react';
import { X, BookOpen, ChevronDown } from 'lucide-react';
import { SUBJECTS } from '../data/subjects';

interface QuizModalProps {
  onClose: () => void;
  onStart: (username: string, subjectId: string) => void;
}

export default function QuizModal({ onClose, onStart }: QuizModalProps) {
  const [username, setUsername] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(SUBJECTS[0].id);
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);

  const handleStart = () => {
    if (username.trim()) {
      onStart(username, selectedSubject);
    }
  };

  const selectedSubjectData = SUBJECTS.find(s => s.id === selectedSubject);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Start New Quiz</h3>
              <p className="text-gray-600 text-sm">Choose your subject</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Username Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          {/* Subject Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Subject
            </label>
            <div className="relative">
              <button
                onClick={() => setShowSubjectDropdown(!showSubjectDropdown)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg flex items-center justify-between hover:border-gray-400 transition"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <BookOpen className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-800">{selectedSubjectData?.code}</div>
                    <div className="text-sm text-gray-600">{selectedSubjectData?.title}</div>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${showSubjectDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {showSubjectDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {SUBJECTS.map((subject) => (
                    <button
                      key={subject.id}
                      onClick={() => {
                        setSelectedSubject(subject.id);
                        setShowSubjectDropdown(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center border-b border-gray-100 last:border-b-0"
                    >
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <BookOpen className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{subject.code}</div>
                        <div className="text-sm text-gray-600">{subject.title}</div>
                      </div>
                      {selectedSubject === subject.id && (
                        <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quiz Info */}
          <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
            <div className="text-sm text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Questions:</span>
                <span className="font-medium">5</span>
              </div>
              <div className="flex justify-between">
                <span>Time:</span>
                <span className="font-medium">No limit</span>
              </div>
              <div className="flex justify-between">
                <span>Passing:</span>
                <span className="font-medium">60%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleStart}
              disabled={!username.trim()}
              className={`flex-1 py-3 rounded-lg font-medium transition ${
                username.trim()
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}