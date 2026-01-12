import type { Question } from '../../types';

export const INSY50_QUESTIONS: Question[] = [
  {
    id: 'insy50-1',
    question: 'Which component is considered the "brain" of a computer system?',
    type: 'multiple',
    choices: ['CPU', 'RAM', 'Hard Drive', 'Motherboard'],
    correctAnswer: 0,
    explanation: 'CPU (Central Processing Unit) is the brain that processes instructions.'
  },
  {
    id: 'insy50-2',
    question: 'Cloud computing eliminates the need for physical hardware.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Cloud computing uses remote hardware, but physical hardware still exists somewhere.'
  },
  {
    id: 'insy50-3',
    question: 'What does LAN stand for?',
    type: 'multiple',
    choices: [
      'Local Area Network',
      'Large Area Network',
      'Logical Area Network',
      'Linked Area Network'
    ],
    correctAnswer: 0,
    explanation: 'LAN stands for Local Area Network.'
  },
  {
    id: 'insy50-4',
    question: 'Which protocol is used for secure web browsing?',
    type: 'multiple',
    choices: ['HTTP', 'HTTPS', 'FTP', 'SMTP'],
    correctAnswer: 1,
    explanation: 'HTTPS (HyperText Transfer Protocol Secure) provides encrypted communication.'
  },
  {
    id: 'insy50-5',
    question: 'Data mining and data warehousing are the same thing.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Data warehousing stores data, data mining extracts patterns from stored data.'
  }
];