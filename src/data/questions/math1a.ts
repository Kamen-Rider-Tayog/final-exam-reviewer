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
  },
  {
    id: 'math1a-6',
    question: 'Slope (m) measures steepness and direction of a line.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Slope measures steepness/direction.'
  },
  {
    id: 'math1a-7',
    question: 'Angle of inclination range is:',
    type: 'multiple',
    choices: ['0° to 90°', '0° to 180°', '-90° to 90°', '0° to 360°'],
    correctAnswer: 1,
    explanation: '0° ≤ θ < 180°'
  },
  {
    id: 'math1a-8',
    question: 'Slope from inclination: m = tan θ',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'm = tan θ'
  },
  {
    id: 'math1a-9',
    question: 'Vertical line slope is undefined.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Vertical line: undefined slope.'
  },
  {
    id: 'math1a-10',
    question: 'Slope from two points formula:',
    type: 'multiple',
    choices: [
      'm = (y₂ - y₁)/(x₂ - x₁)',
      'm = (x₂ - x₁)/(y₂ - y₁)',
      'm = y/x',
      'm = Δx/Δy'
    ],
    correctAnswer: 0,
    explanation: 'm = (y₂ - y₁)/(x₂ - x₁)'
  },
  {
    id: 'math1a-11',
    question: 'Perpendicular lines: m₁ × m₂ = -1',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Product of slopes = -1 for perpendicular.'
  },
  {
    id: 'math1a-12',
    question: 'Vertical line perpendicular to horizontal line.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Vertical (undefined) ⟂ horizontal (0 slope).'
  },
  {
    id: 'math1a-13',
    question: 'Angle between two lines formula uses:',
    type: 'multiple',
    choices: [
      'tan φ = |(m₂ - m₁)/(1 + m₁m₂)|',
      'sin φ = |m₂ - m₁|',
      'cos φ = m₁m₂',
      'φ = m₁ + m₂'
    ],
    correctAnswer: 0,
    explanation: 'tan φ = |(m₂ - m₁)/(1 + m₁m₂)|'
  },
  {
    id: 'math1a-14',
    question: 'Absolute value ensures acute angle.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Absolute value gives acute angle.'
  },
  {
    id: 'math1a-15',
    question: 'If 1 + m₁m₂ = 0, lines are perpendicular.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Denominator = 0 → perpendicular (φ = 90°).'
  },
  {
    id: 'math1a-16',
    question: 'General form of circle:',
    type: 'multiple',
    choices: [
      'x² + y² + Dx + Ey + F = 0',
      'x² - y² = r²',
      'y = mx + b',
      'Ax + By + C = 0'
    ],
    correctAnswer: 0,
    explanation: 'General: x² + y² + Dx + Ey + F = 0'
  },
  {
    id: 'math1a-17',
    question: 'Three non-collinear points determine a circle.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Three points (not collinear) determine circle.'
  },
  {
    id: 'math1a-18',
    question: 'Family of circles through intersection: C₁ + kC₂ = 0',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Family: C₁ + kC₂ = 0'
  },
  {
    id: 'math1a-19',
    question: 'Radical axis is obtained when k = -1.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'k = -1 gives radical axis.'
  },
  {
    id: 'math1a-20',
    question: 'Radical axis equation:',
    type: 'multiple',
    choices: [
      '(D₁ - D₂)x + (E₁ - E₂)y + (F₁ - F₂) = 0',
      'x² + y² = 0',
      'Dx + Ey = 0',
      'None'
    ],
    correctAnswer: 0,
    explanation: '(D₁ - D₂)x + (E₁ - E₂)y + (F₁ - F₂) = 0'
  },
  {
    id: 'math1a-21',
    question: 'Radical axis ⟂ line joining centers.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Radical axis perpendicular to center line.'
  },
  {
    id: 'math1a-22',
    question: 'Tangent to circle at point (x₁,y₁):',
    type: 'multiple',
    choices: [
      '(x₁ - h)(x - h) + (y₁ - k)(y - k) = r²',
      'y - y₁ = m(x - x₁)',
      'x² + y² = r²',
      'None'
    ],
    correctAnswer: 0,
    explanation: '(x₁ - h)(x - h) + (y₁ - k)(y - k) = r²'
  },
  {
    id: 'math1a-23',
    question: 'Center lies on line ⟂ to tangent through point.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Center on perpendicular through tangency point.'
  },
  {
    id: 'math1a-24',
    question: 'Area of triangle vertices (x₁,y₁), (x₂,y₂), (x₃,y₃):',
    type: 'multiple',
    choices: [
      '½|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|',
      '½(x₁ + x₂ + x₃)',
      'Base × Height',
      'πr²'
    ],
    correctAnswer: 0,
    explanation: 'Area = ½|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|'
  },
  {
    id: 'math1a-25',
    question: 'Absolute value ensures positive area.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Absolute value gives positive area.'
  },
  {
    id: 'math1a-26',
    question: 'Collinear points give area = 0.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Collinear → area = 0.'
  },
  {
    id: 'math1a-27',
    question: 'Given θ = 30°, slope = tan 30° = 1/√3 ≈ 0.577',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'tan 30° = 1/√3.'
  },
  {
    id: 'math1a-28',
    question: 'Given θ = 90°, slope is undefined.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'tan 90° undefined.'
  },
  {
    id: 'math1a-29',
    question: 'If m_A = 2/3, perpendicular slope = -3/2',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Perpendicular: negative reciprocal.'
  },
  {
    id: 'math1a-30',
    question: 'Find angle between lines m₁ = 1, m₂ = -2',
    type: 'multiple',
    choices: [
      'tan⁻¹(|(-2 - 1)/(1 + (1)(-2))|)',
      '45°',
      '90°',
      '0°'
    ],
    correctAnswer: 0,
    explanation: 'Use formula.'
  },
  {
    id: 'math1a-31',
    question: 'Circle through (0,0), (2,0), (0,4): solve system.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Substitute points into general form.'
  },
  {
    id: 'math1a-32',
    question: 'Find radical axis of x² + y² - 4 = 0 and x² + y² - 6x + 5 = 0',
    type: 'multiple',
    choices: [
      'Subtract equations: 6x - 9 = 0 → x = 1.5',
      'Add equations',
      'Multiply',
      'None'
    ],
    correctAnswer: 0,
    explanation: 'Subtract to get radical axis.'
  },
  {
    id: 'math1a-33',
    question: 'Tangent to (x-2)² + (y+1)² = 25 at (5,3): use point formula.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Use point-of-tangency formula.'
  },
  {
    id: 'math1a-34',
    question: 'Circle tangent to y = 2x at (1,2) with radius 5: find center.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Center on perpendicular through (1,2).'
  },
  {
    id: 'math1a-35',
    question: 'Area of triangle A(1,1), B(4,5), C(6,3): compute determinant.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Use area formula.'
  },
  {
    id: 'math1a-36',
    question: 'Points (0,1), (2,3), (4,5) are collinear if area = 0.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Check area = 0.'
  },
  {
    id: 'math1a-37',
    question: 'Standard circle form: (x-h)² + (y-k)² = r²',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Standard form.'
  },
  {
    id: 'math1a-38',
    question: 'Convert general to standard by completing square.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Complete square.'
  },
  {
    id: 'math1a-39',
    question: 'Distance between (x₁,y₁) and (x₂,y₂): √[(x₂-x₁)² + (y₂-y₁)²]',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Distance formula.'
  },
  {
    id: 'math1a-40',
    question: 'Midpoint formula: ((x₁+x₂)/2, (y₁+y₂)/2)',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Midpoint.'
  },
  {
    id: 'math1a-41',
    question: 'Parallel lines have equal slopes.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Parallel: m₁ = m₂.'
  },
  {
    id: 'math1a-42',
    question: 'Horizontal line slope = 0.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Horizontal: m = 0.'
  },
  {
    id: 'math1a-43',
    question: 'Equation of line: y - y₁ = m(x - x₁)',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Point-slope form.'
  },
  {
    id: 'math1a-44',
    question: 'Slope-intercept: y = mx + b',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Slope-intercept form.'
  },
  {
    id: 'math1a-45',
    question: 'Intercept form: x/a + y/b = 1',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Intercept form.'
  },
  {
    id: 'math1a-46',
    question: 'General line: Ax + By + C = 0',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'General line equation.'
  },
  {
    id: 'math1a-47',
    question: 'Distance point to line: |Ax₁ + By₁ + C|/√(A² + B²)',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Point-line distance.'
  },
  {
    id: 'math1a-48',
    question: 'Two lines intersect at one point unless parallel.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Intersection point.'
  },
  {
    id: 'math1a-49',
    question: 'Solve system of equations to find intersection.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Solve simultaneously.'
  },
  {
    id: 'math1a-50',
    question: 'Conic sections include circles, ellipses, parabolas, hyperbolas.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Conic sections.'
  }
];