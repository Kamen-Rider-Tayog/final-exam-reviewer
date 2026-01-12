import type { QuizState, LeaderboardEntry } from '../types';

const QUIZ_KEY = 'quiz_state';
const BOARD_KEY = 'leaderboard';

export const saveQuizState = (state: QuizState) => {
  localStorage.setItem(QUIZ_KEY, JSON.stringify(state));
};

export const loadQuizState = (): QuizState | null => {
  const saved = localStorage.getItem(QUIZ_KEY);
  return saved ? JSON.parse(saved) : null;
};

export const clearQuizState = () => {
  localStorage.removeItem(QUIZ_KEY);
};

export const saveToLeaderboard = (entry: LeaderboardEntry) => {
  const boards = JSON.parse(localStorage.getItem(BOARD_KEY) || '{}');
  const board = boards[entry.subjectId] || [];
  board.push(entry);
  board.sort((a, b) => b.score - a.score || a.duration - b.duration);
  boards[entry.subjectId] = board.slice(0, 10);
  localStorage.setItem(BOARD_KEY, JSON.stringify(boards));
};

export const getLeaderboard = (subjectId: string): LeaderboardEntry[] => {
  const boards = JSON.parse(localStorage.getItem(BOARD_KEY) || '{}');
  return boards[subjectId] || [];
};