import type { Question } from '../../types';

export const COSC60A_QUESTIONS: Question[] = [
  {
    id: 'cosc60a-1',
    question: 'Which logic gate produces output 1 only when all inputs are 1?',
    type: 'multiple',
    choices: ['AND', 'OR', 'NOT', 'XOR'],
    correctAnswer: 0,
    explanation: 'AND gate produces 1 only when all inputs are 1.'
  },
  {
    id: 'cosc60a-2',
    question: 'NAND gate is a universal gate.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'NAND and NOR gates are universal gates.'
  },
  {
    id: 'cosc60a-3',
    question: 'What is the binary equivalent of decimal 13?',
    type: 'multiple',
    choices: ['1101', '1011', '1110', '1001'],
    correctAnswer: 0,
    explanation: '13 in decimal = 1101 in binary (8+4+0+1)'
  },
  {
    id: 'cosc60a-4',
    question: 'Which flip-flop has a clock input?',
    type: 'multiple',
    choices: ['D Flip-Flop', 'SR Latch', 'Both', 'Neither'],
    correctAnswer: 2,
    explanation: 'D Flip-Flop has clock input, basic SR Latch does not.'
  },
  {
    id: 'cosc60a-5',
    question: 'Half adder can add three binary bits.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Half adder adds two bits, full adder adds three bits.'
  }
];