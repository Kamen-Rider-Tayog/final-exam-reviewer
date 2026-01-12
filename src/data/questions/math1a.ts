import type { Question } from '../../types';

export const MATH1A_QUESTIONS: Question[] = [
  {
    id: 'math1a-1',
    question: 'What is the derivative of f(x) = 3x² + 2x - 5?',
    type: 'multiple',
    choices: ['6x + 2', '3x + 2', '6x² + 2', '3x² + 2'],
    correctAnswer: 0,
    explanation: 'The derivative of 3x² is 6x, derivative of 2x is 2, and derivative of constant -5 is 0.'
  },
  {
    id: 'math1a-2',
    question: 'The limit of (sin x)/x as x approaches 0 is equal to 1.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'This is a fundamental limit in calculus known as the sinc function limit.'
  },
  {
    id: 'math1a-3',
    question: 'What is the integral of ∫ 2x dx?',
    type: 'multiple',
    choices: ['x² + C', '2x² + C', 'x²', '2x'],
    correctAnswer: 0,
    explanation: 'The integral of 2x is x² + C, where C is the constant of integration.'
  },
  {
    id: 'math1a-4',
    question: 'Find the slope of the line passing through points (2,3) and (5,11).',
    type: 'multiple',
    choices: ['8/3', '3', '2.67', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Slope = (11-3)/(5-2) = 8/3 ≈ 2.67'
  },
  {
    id: 'math1a-5',
    question: 'The Pythagorean theorem applies only to right triangles.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Pythagorean theorem: a² + b² = c² for right triangles only.'
  }
];