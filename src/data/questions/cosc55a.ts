import type { Question } from '../../types';

export const COSC55A_QUESTIONS: Question[] = [
  {
    id: 'cosc55a-1',
    question: 'Which data structure uses LIFO (Last In First Out) principle?',
    type: 'multiple',
    choices: ['Queue', 'Stack', 'Linked List', 'Tree'],
    correctAnswer: 1,
    explanation: 'Stack uses LIFO principle, while Queue uses FIFO.'
  },
  {
    id: 'cosc55a-2',
    question: 'A binary tree can have more than two children per node.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Binary trees are limited to maximum two children per node.'
  },
  {
    id: 'cosc55a-3',
    question: 'What is the time complexity of binary search?',
    type: 'multiple',
    choices: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
    correctAnswer: 1,
    explanation: 'Binary search has O(log n) time complexity.'
  },
  {
    id: 'cosc55a-4',
    question: 'Which algorithm finds the shortest path in a weighted graph?',
    type: 'multiple',
    choices: ['Dijkstra', 'BFS', 'DFS', 'Bubble Sort'],
    correctAnswer: 0,
    explanation: 'Dijkstra algorithm finds shortest path in weighted graphs.'
  },
  {
    id: 'cosc55a-5',
    question: 'A graph can contain cycles.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Graphs can contain cycles unless specifically restricted (like trees).'
  }
];