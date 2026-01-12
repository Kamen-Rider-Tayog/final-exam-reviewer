import type { Question } from '../types';

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function shuffleQuestion(question: Question): Question {
  if (question.type === 'boolean') return question;
  
  const indices = question.choices.map((_, i) => i);
  const shuffledIndices = shuffleArray(indices);
  const shuffledChoices = shuffledIndices.map(i => question.choices[i]);
  const newCorrectAnswer = shuffledIndices.indexOf(question.correctAnswer);

  return { ...question, choices: shuffledChoices, correctAnswer: newCorrectAnswer };
}