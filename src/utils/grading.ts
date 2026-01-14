export function calculateGrade(percentage: number): string {
  if (percentage >= 96) return '1.20';
  if (percentage >= 93) return '1.25';
  if (percentage >= 90) return '1.50';
  if (percentage >= 87) return '1.75';
  if (percentage >= 84) return '2.00';
  if (percentage >= 81) return '2.25';
  if (percentage >= 78) return '2.50';
  if (percentage >= 75) return '2.75';
  if (percentage >= 70) return '3.00';
  return '5.00';
}

export function getPerformanceMessage(percentage: number): string {
  if (percentage >= 95) return 'Outstanding performance';
  if (percentage >= 85) return 'Excellent work';
  if (percentage >= 75) return 'Good job';
  if (percentage >= 65) return 'Review needed';
  return 'Keep practicing';
}

export function formatDuration(ms: number): string {
  const mins = Math.floor(ms / 60000);
  const secs = Math.floor((ms % 60000) / 1000);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}