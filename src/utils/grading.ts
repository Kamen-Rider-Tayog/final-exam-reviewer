export function calculateGrade(percentage: number): string {
  if (percentage >= 97) return 'A+';
  if (percentage >= 93) return 'A';
  if (percentage >= 90) return 'A-';
  if (percentage >= 87) return 'B+';
  if (percentage >= 83) return 'B';
  if (percentage >= 80) return 'B-';
  if (percentage >= 77) return 'C+';
  if (percentage >= 73) return 'C';
  if (percentage >= 70) return 'C-';
  if (percentage >= 60) return 'D';
  return 'F';
}

export function getPerformanceMessage(percentage: number): string {
  if (percentage >= 95) return '🎉 Outstanding! You\'ve mastered this!';
  if (percentage >= 85) return '🌟 Excellent work! Well-prepared!';
  if (percentage >= 75) return '👍 Great job! Keep it up!';
  if (percentage >= 65) return '📚 Good effort! Review missed topics.';
  return '💪 Keep practicing! You can do it!';
}

export function formatDuration(ms: number): string {
  const mins = Math.floor(ms / 60000);
  const secs = Math.floor((ms % 60000) / 1000);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}