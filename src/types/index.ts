export interface Question {
  id: string;
  question: string;
  type: 'multiple' | 'boolean';
  choices: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Subject {
  id: string;
  code: string;
  title: string;
  color: string;
  icon: string;
}

export interface QuizState {
  username: string;
  subjectId: string;
  currentQuestion: number;
  answers: (number | null)[];
  startTime: number;
  completed: boolean;
  questions: Question[];
}

export interface LeaderboardEntry {
  username: string;
  score: number;
  percentage: number;
  date: string;
  time: string;
  duration: number;
  subjectId: string;
}