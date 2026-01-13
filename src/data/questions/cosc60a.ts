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
  },
  {
    id: 'cosc60a-6',
    question: 'Binary digits are 0 and 1.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Binary digits.'
  },
  {
    id: 'cosc60a-7',
    question: 'Octal digits: 0–7',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Octal digits.'
  },
  {
    id: 'cosc60a-8',
    question: 'Decimal digits: 0–9',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Decimal digits.'
  },
  {
    id: 'cosc60a-9',
    question: 'Hexadecimal digits: 0–9, A–F',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Hex digits.'
  },
  {
    id: 'cosc60a-10',
    question: 'A=10, B=11, C=12, D=13, E=14, F=15 in hex.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Hex values.'
  },
  {
    id: 'cosc60a-11',
    question: 'Decimal to binary: division method.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Division method for integer part.'
  },
  {
    id: 'cosc60a-12',
    question: 'Fractional part: successive multiplication.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Multiplication for fractional part.'
  },
  {
    id: 'cosc60a-13',
    question: 'Example: 53₁₀ → 110101₂',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Conversion example.'
  },
  {
    id: 'cosc60a-14',
    question: '0.625₁₀ → 0.101₂',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Fraction conversion.'
  },
  {
    id: 'cosc60a-15',
    question: 'Other bases to decimal: power series expansion.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Power series method.'
  },
  {
    id: 'cosc60a-16',
    question: 'Binary → octal: group 3 bits.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: '3-bit groups.'
  },
  {
    id: 'cosc60a-17',
    question: 'Binary → hex: group 4 bits.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: '4-bit groups.'
  },
  {
    id: 'cosc60a-18',
    question: 'Octal/hex → binary: convert each digit to 3/4 bits.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Reverse conversion.'
  },
  {
    id: 'cosc60a-19',
    question: 'Binary addition: 0+0=0, 0+1=1, 1+0=1, 1+1=0 carry 1',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Addition rules.'
  },
  {
    id: 'cosc60a-20',
    question: 'Binary subtraction: 0-0=0, 0-1=1 borrow 1, 1-0=1, 1-1=0',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Subtraction rules.'
  },
  {
    id: 'cosc60a-21',
    question: 'Binary multiplication: 0×0=0, 0×1=0, 1×0=0, 1×1=1',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Multiplication rules.'
  },
  {
    id: 'cosc60a-22',
    question: 'Sign-magnitude: leftmost bit = sign (0=+, 1=-)',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Sign-magnitude.'
  },
  {
    id: 'cosc60a-23',
    question: 'Problem: two zeros (+0 and -0).',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Sign-magnitude issue.'
  },
  {
    id: 'cosc60a-24',
    question: '1\'s complement: negative = invert all bits.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: '1\'s complement.'
  },
  {
    id: 'cosc60a-25',
    question: 'Addition: if carry-out, add back (end-around carry).',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: '1\'s complement addition.'
  },
  {
    id: 'cosc60a-26',
    question: '2\'s complement: negative = invert bits + 1.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: '2\'s complement.'
  },
  {
    id: 'cosc60a-27',
    question: 'No end-around carry in 2\'s complement.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: '2\'s complement advantage.'
  },
  {
    id: 'cosc60a-28',
    question: '2\'s complement most common in computers.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Standard representation.'
  },
  {
    id: 'cosc60a-29',
    question: 'Boolean identity: X + 0 = X, X · 1 = X',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Identity laws.'
  },
  {
    id: 'cosc60a-30',
    question: 'Null: X + 1 = 1, X · 0 = 0',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Null laws.'
  },
  {
    id: 'cosc60a-31',
    question: 'Idempotent: X + X = X, X · X = X',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Idempotent laws.'
  },
  {
    id: 'cosc60a-32',
    question: 'Complement: X + X\' = 1, X · X\' = 0',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Complement laws.'
  },
  {
    id: 'cosc60a-42',
    question: 'DeMorgan: (X + Y)\' = X\'Y\'',  // Escape the apostrophes
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'DeMorgan\'s law.'
  },
  {
    id: 'cosc60a-34',
    question: 'Commutative: X + Y = Y + X',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Commutative.'
  },
  {
    id: 'cosc60a-35',
    question: 'Associative: (X + Y) + Z = X + (Y + Z)',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Associative.'
  },
  {
    id: 'cosc60a-36',
    question: 'Distributive: X(Y + Z) = XY + XZ',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Distributive.'
  },
  {
    id: 'cosc60a-37',
    question: 'Boolean only: X + YZ = (X + Y)(X + Z)',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Boolean distributive.'
  },
  {
    id: 'cosc60a-38',
    question: 'Simplification: XY + XY\' = X',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Simplification theorem.'
  },
  {
    id: 'cosc60a-39',
    question: 'X + XY = X',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Absorption.'
  },
  {
    id: 'cosc60a-40',
    question: '(X + Y\')Y = XY',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Simplification.'
  },
  {
    id: 'cosc60a-41',
    question: 'Consensus: XY + YZ + X\'Z = XY + X\'Z',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Consensus theorem.'
  },
  {
    id: 'cosc60a-42',
    question: 'DeMorgan: (X + Y)\' = X\'Y\'',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'DeMorgan\'s law.'
  },
  {
    id: 'cosc60a-43',
    question: '(XY)\' = X\' + Y\'',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'DeMorgan\'s second.'
  },
  {
    id: 'cosc60a-44',
    question: 'Complement of sum = product of complements.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'DeMorgan general.'
  },
  {
    id: 'cosc60a-45',
    question: 'Complement of product = sum of complements.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'DeMorgan general.'
  },
  {
    id: 'cosc60a-46',
    question: 'Basic gates: AND, OR, NOT, XOR, XNOR, NAND, NOR',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Logic gates.'
  },
  {
    id: 'cosc60a-47',
    question: 'Universal gates: NAND, NOR',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Universal gates.'
  },
  {
    id: 'cosc60a-48',
    question: 'Used for circuit optimization.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Universal gate use.'
  },
  {
    id: 'cosc60a-49',
    question: 'Half adder: A, B → Sum, Carry',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Half adder.'
  },
  {
    id: 'cosc60a-50',
    question: 'Full adder: A, B, Cin → Sum, Cout',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Full adder.'
  }
];