import { useState, useEffect } from 'react';
import { Trophy, User, ArrowLeft } from 'lucide-react';
import { SUBJECTS } from '../data/subjects';
import { getLeaderboard } from '../utils/storage';
import type { LeaderboardEntry } from '../types';
import { calculateGrade } from '../utils/grading';

interface LeaderboardProps {
  onBack: () => void;
}

const ITEMS_PER_PAGE = 10;

export default function Leaderboard({ onBack }: LeaderboardProps) {
  const [selectedSubject, setSelectedSubject] = useState('math1a');
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const data = getLeaderboard(selectedSubject);
    setLeaderboardData(data);
    setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
    setCurrentPage(1);
  }, [selectedSubject]);

  const selectedSubjectData = SUBJECTS.find(s => s.id === selectedSubject);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = leaderboardData.slice(startIndex, endIndex);

  const getGrade = (percentage: number) => {
    if (percentage >= 97) return '1.00';
    if (percentage >= 94) return '1.25';
    if (percentage >= 91) return '1.50';
    if (percentage >= 88) return '1.75';
    if (percentage >= 85) return '2.00';
    if (percentage >= 82) return '2.25';
    if (percentage >= 79) return '2.50';
    if (percentage >= 76) return '2.75';
    if (percentage >= 75) return '3.00';
    if (percentage >= 70) return '4.00';
    return '5.00'; // Below 70%
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg mr-3"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Leaderboard</h1>
            <p className="text-gray-600 text-sm">Top scores by subject</p>
          </div>
        </div>
        
        {/* Subject Selector */}
        <div className="mb-4">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {SUBJECTS.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject.id)}
                className={`px-3 py-2 rounded-lg whitespace-nowrap text-sm md:text-base ${
                  selectedSubject === subject.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border text-gray-700 hover:bg-gray-50'
                }`}
              >
                {subject.code}
              </button>
            ))}
          </div>
        </div>

        {/* Subject Info */}
        <div className="bg-white rounded-lg p-4 mb-4 shadow">
          <div className="flex items-center justify-between">
            {/* Left side - Subject Info */}
            <div className="flex items-center min-w-0 flex-1 mr-4">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="min-w-0">
                <h2 className="text-base font-bold text-gray-800 truncate">{selectedSubjectData?.code}</h2>
                <p className="text-gray-600 text-xs truncate">{selectedSubjectData?.title}</p>
              </div>
            </div>

            {/* Right side - Stats */}
            <div className="flex items-center space-x-3">
              <div className="text-center min-w-16">
                <div className="text-base font-bold text-blue-600">
                  {leaderboardData[0]?.percentage || 0}%
                </div>
                <div className="text-gray-600 text-xs truncate">Top</div>
              </div>
              <div className="text-center min-w-16">
                <div className="text-base font-bold text-blue-600">
                  {leaderboardData.length > 0 
                    ? Math.round(leaderboardData.reduce((acc, entry) => acc + entry.percentage, 0) / leaderboardData.length)
                    : 0
                  }%
                </div>
                <div className="text-gray-600 text-xs truncate">Average</div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white border rounded-lg shadow">
          {/* Header - Columns exactly match data columns */}
          <div className="flex px-4 py-3 border-b bg-gray-50 text-gray-600 text-sm justify-between">
            <div className="w-8 md:w-9 flex items-center justify-center flex-shrink-0">
              <Trophy className="w-4 h-4" />
            </div>
            <div className="flex-1 md:flex-none md:w-[200px] lg:w-[250px] min-w-0 font-medium pl-2">Student</div>
            <div className="w-20 md:w-24 flex-shrink-0 text-right font-medium">Score</div>
            <div className="w-16 md:w-20 flex-shrink-0 text-center font-medium">Grade</div>
            <div className="w-24 md:w-32 flex-shrink-0 text-right font-medium">Date & Time</div>
          </div>

          {currentData.length > 0 ? (
            <div className="divide-y">
              {currentData.map((entry, index) => (
                <div key={startIndex + index} className="group hover:bg-gray-50">
                  {/* Full width one-line layout */}
                  <div className="flex items-center px-4 py-3 justify-between">
                    {/* Rank */}
                    <div className={`w-8 md:w-9 h-8 md:h-9 rounded flex items-center justify-center font-bold flex-shrink-0 ${
                      startIndex + index === 0 ? 'bg-yellow-100 text-yellow-800' :
                      startIndex + index === 1 ? 'bg-gray-100 text-gray-800' :
                      startIndex + index === 2 ? 'bg-amber-100 text-amber-800' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {startIndex + index + 1}
                    </div>

                    {/* Name */}
                    <div className="flex-1 md:flex-none md:w-[200px] lg:w-[250px] min-w-0 px-2">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                        <div className="font-medium truncate">{entry.username}</div>
                      </div>
                    </div>

                    {/* Score */}
                    <div className="w-20 md:w-24 flex-shrink-0 text-right">
                      <div className="font-bold md:text-lg">{entry.score}/50</div>
                      <div className="text-xs md:text-sm text-gray-500">{entry.percentage}%</div>
                    </div>

                    {/* Grade */}
                    <div className={`w-16 md:w-20 flex-shrink-0 text-center font-bold md:text-lg ${
                      entry.percentage >= 90 ? 'text-green-600' :
                      entry.percentage >= 80 ? 'text-blue-600' :
                      entry.percentage >= 70 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {getGrade(entry.percentage)}
                    </div>

                    {/* Time */}
                    <div className="w-24 md:w-32 flex-shrink-0 text-right text-sm text-gray-500">
                      <div className="hidden md:block truncate">{entry.date}</div>
                      <div className="truncate">{entry.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-400">
              No scores recorded yet
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="border-t p-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
                <div className="text-sm text-gray-600">
                  Showing {startIndex + 1}-{Math.min(endIndex, leaderboardData.length)} of {leaderboardData.length}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-sm border rounded disabled:opacity-30 hover:bg-gray-50"
                  >
                    ← Previous
                  </button>
                  <span className="px-3 py-1 bg-gray-100 rounded text-sm">
                    {currentPage}
                  </span>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm border rounded disabled:opacity-30 hover:bg-gray-50"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Simple Stats Footer */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="bg-white rounded-lg p-3 shadow text-center">
            <div className="text-lg font-bold text-blue-600">
              {leaderboardData.length > 0 
                ? calculateGrade(leaderboardData[0]?.percentage || 0)
                : 'N/A'
              }
            </div>
            <div className="text-gray-700 text-sm">Top Grade</div>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow text-center">
            <div className="text-lg font-bold text-blue-600">
              {leaderboardData.length > 0 
                ? Math.round(leaderboardData.reduce((acc, entry) => acc + entry.percentage, 0) / leaderboardData.length)
                : 0
              }%
            </div>
            <div className="text-gray-700 text-sm">Avg Score</div>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow text-center">
            <div className="text-lg font-bold text-blue-600">
              {leaderboardData.length}
            </div>
            <div className="text-gray-700 text-sm">Participants</div>
          </div>
        </div>
      </div>
    </div>
  );
}