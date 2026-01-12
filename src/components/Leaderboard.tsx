import { useState, useEffect } from 'react';
import { Trophy, Medal, Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { SUBJECTS } from '../data/subjects';
import { getLeaderboard } from '../utils/storage';
import type { LeaderboardEntry } from '../types';

interface LeaderboardProps {
  onBack: () => void;
}

export default function Leaderboard({ onBack }: LeaderboardProps) {
  const [selectedSubject, setSelectedSubject] = useState('math1a');
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const data = getLeaderboard(selectedSubject);
    setLeaderboardData(data);
  }, [selectedSubject]);

  const selectedSubjectData = SUBJECTS.find(s => s.id === selectedSubject);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pt-4">
          <div className="flex items-center mb-4 md:mb-0">
            <button
              onClick={onBack}
              className="mr-4 p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Leaderboard</h1>
              <p className="text-gray-600">Top scores across all subjects</p>
            </div>
          </div>
          
          {/* Subject Selector */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {SUBJECTS.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
                  selectedSubject === subject.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {subject.code}
              </button>
            ))}
          </div>
        </div>

        {/* Subject Info */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">{selectedSubjectData?.code}</h2>
                <p className="text-gray-600">{selectedSubjectData?.title}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{leaderboardData.length}</div>
                <div className="text-gray-600 text-sm">Total Entries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {leaderboardData[0]?.percentage || 0}%
                </div>
                <div className="text-gray-600 text-sm">Top Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {leaderboardData.length > 1 ? leaderboardData[1]?.percentage || 0 : 0}%
                </div>
                <div className="text-gray-600 text-sm">2nd Place</div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 bg-gray-50 border-b border-gray-300 p-4 text-gray-700 font-medium">
            <div className="col-span-1">Rank</div>
            <div className="col-span-4">Name</div>
            <div className="col-span-2">Score</div>
            <div className="col-span-2">Grade</div>
            <div className="col-span-3">Date & Time</div>
          </div>

          {/* Table Body */}
          {leaderboardData.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {leaderboardData.map((entry, index) => (
                <div key={index} className="p-4 hover:bg-gray-50">
                  <div className="flex flex-col md:grid md:grid-cols-12 md:items-center">
                    {/* Rank */}
                    <div className="flex items-center mb-2 md:mb-0 md:col-span-1">
                      {index === 0 && <Medal className="w-5 h-5 text-yellow-500 mr-2" />}
                      {index === 1 && <Medal className="w-5 h-5 text-gray-400 mr-2" />}
                      {index === 2 && <Medal className="w-5 h-5 text-amber-700 mr-2" />}
                      <div className={`w-8 h-8 rounded flex items-center justify-center font-bold ${
                        index === 0 ? 'bg-yellow-100 text-yellow-800' :
                        index === 1 ? 'bg-gray-100 text-gray-800' :
                        index === 2 ? 'bg-amber-100 text-amber-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Name */}
                    <div className="flex items-center mb-2 md:mb-0 md:col-span-4">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="font-medium text-gray-800">{entry.username}</span>
                    </div>

                    {/* Score */}
                    <div className="mb-2 md:mb-0 md:col-span-2">
                      <div className="flex items-center">
                        <div className="font-bold text-gray-800">{entry.score}/5</div>
                        <div className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
                          {entry.percentage}%
                        </div>
                      </div>
                    </div>

                    {/* Grade */}
                      <div className="mb-2 md:mb-0 md:col-span-1">
                        <div className={`inline-block px-2 py-1 rounded text-xs font-bold ${
                          entry.percentage >= 90 ? 'bg-green-100 text-green-800' :
                          entry.percentage >= 80 ? 'bg-blue-100 text-blue-800' :
                          entry.percentage >= 70 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {entry.percentage >= 97 ? 'A+' :
                          entry.percentage >= 93 ? 'A' :
                          entry.percentage >= 90 ? 'A-' :
                          entry.percentage >= 87 ? 'B+' :
                          entry.percentage >= 83 ? 'B' :
                          entry.percentage >= 80 ? 'B-' :
                          entry.percentage >= 77 ? 'C+' :
                          entry.percentage >= 73 ? 'C' :
                          entry.percentage >= 70 ? 'C-' :
                          entry.percentage >= 60 ? 'D' : 'F'}
                        </div>
                      </div>

                    {/* Date & Time */}
                    <div className="flex items-center md:col-span-3">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-700 text-sm mr-4">{entry.date}</span>
                      <Clock className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-700 text-sm">{entry.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <Trophy className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-800 mb-2">No scores yet</h3>
              <p className="text-gray-600">Be the first to take a quiz for this subject!</p>
            </div>
          )}
        </div>

        {/* Stats Footer */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {leaderboardData.filter(e => e.percentage >= 90).length}
            </div>
            <div className="text-gray-700">A Grades</div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {leaderboardData.reduce((acc, entry) => acc + entry.score, 0)}
            </div>
            <div className="text-gray-700">Total Correct Answers</div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {leaderboardData.length > 0 
                ? Math.round(leaderboardData.reduce((acc, entry) => acc + entry.percentage, 0) / leaderboardData.length)
                : 0
              }%
            </div>
            <div className="text-gray-700">Average Score</div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-8 border-t border-gray-300">
          <p className="text-gray-600">
            Leaderboard updates after each completed quiz
          </p>
        </div>
      </div>
    </div>
  );
}