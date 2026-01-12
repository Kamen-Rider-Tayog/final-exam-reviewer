import type { Question } from '../../types';

export const DCIT50_QUESTIONS: Question[] = [
  {
    id: 'dcit50-1',
    question: 'Which principle allows objects of different types to be treated as objects of a common type?',
    type: 'multiple',
    choices: ['Encapsulation', 'Polymorphism', 'Inheritance', 'Abstraction'],
    correctAnswer: 1,
    explanation: 'Polymorphism allows objects of different types to respond to the same method call.'
  },
  {
    id: 'dcit50-2',
    question: 'In Java, all classes implicitly inherit from the Object class.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'All Java classes inherit from Object class directly or indirectly.'
  },
  {
    id: 'dcit50-3',
    question: 'Which access modifier provides the most restrictive access level?',
    type: 'multiple',
    choices: ['public', 'protected', 'private', 'default'],
    correctAnswer: 2,
    explanation: 'private is most restrictive, accessible only within the same class.'
  },
  {
    id: 'dcit50-4',
    question: 'What is used to achieve multiple inheritance in Java?',
    type: 'multiple',
    choices: ['Classes', 'Interfaces', 'Abstract Classes', 'Cannot be achieved'],
    correctAnswer: 1,
    explanation: 'Java uses interfaces to achieve multiple inheritance.'
  },
  {
    id: 'dcit50-5',
    question: 'A constructor can return a value.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Constructors do not return any value, not even void.'
  }
];