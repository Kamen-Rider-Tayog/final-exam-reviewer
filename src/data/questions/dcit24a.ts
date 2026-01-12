import type { Question } from '../../types';

export const DCIT24A_QUESTIONS: Question[] = [
  {
    id: 'dcit24a-1',
    question: 'Which SQL command is used to retrieve data from a database?',
    type: 'multiple',
    choices: ['SELECT', 'UPDATE', 'DELETE', 'INSERT'],
    correctAnswer: 0,
    explanation: 'SELECT statement retrieves data from database tables.'
  },
  {
    id: 'dcit24a-2',
    question: 'A primary key can contain NULL values.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Primary key cannot contain NULL values, must be unique and not null.'
  },
  {
    id: 'dcit24a-3',
    question: 'Which normal form eliminates transitive dependencies?',
    type: 'multiple',
    choices: ['1NF', '2NF', '3NF', 'BCNF'],
    correctAnswer: 2,
    explanation: 'Third Normal Form (3NF) eliminates transitive dependencies.'
  },
  {
    id: 'dcit24a-4',
    question: 'What does ACID stand for in database transactions?',
    type: 'multiple',
    choices: [
      'Atomicity, Consistency, Isolation, Durability',
      'Accuracy, Consistency, Integrity, Durability',
      'Atomicity, Concurrency, Isolation, Durability',
      'Accuracy, Concurrency, Integrity, Durability'
    ],
    correctAnswer: 0,
    explanation: 'ACID: Atomicity, Consistency, Isolation, Durability.'
  },
  {
    id: 'dcit24a-5',
    question: 'An index improves data retrieval speed but slows down data modification.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Indexes speed up retrieval but slow down INSERT, UPDATE, DELETE operations.'
  }
];