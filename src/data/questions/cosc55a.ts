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
    correctAnswer: 1,
    explanation: 'Graphs can contain cycles, unlike trees which are acyclic.'
  },
  {
    id: 'cosc55a-6',
    question: 'A set is an unordered collection of distinct elements.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Sets can be ordered or unordered depending on implementation.'
  },
  {
    id: 'cosc55a-7',
    question: 'Set notation: A = {a, b, c}',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Set notation uses braces {}.'
  },
  {
    id: 'cosc55a-8',
    question: 'Order and repetition matter in sets.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Order and repetition do NOT matter in sets.'
  },
  {
    id: 'cosc55a-9',
    question: 'Roster form lists elements within braces.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Roster form lists elements within braces {}.'
  },
  {
    id: 'cosc55a-10',
    question: 'Set builder notation describes property.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Set builder: {x | x is a vowel}'
  },
  {
    id: 'cosc55a-11',
    question: 'A ⊆ B means:',
    type: 'multiple',
    choices: [
      'All elements of A are in B',
      'All elements of B are in A',
      'A equals B',
      'A and B disjoint'
    ],
    correctAnswer: 0,
    explanation: 'Subset: A ⊆ B'
  },
  {
    id: 'cosc55a-12',
    question: 'Equal sets have same elements.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Equal sets have identical elements.'
  },
  {
    id: 'cosc55a-13',
    question: 'Empty set = ∅ or {}',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Empty/null set can be denoted as ∅ or {}.'
  },
  {
    id: 'cosc55a-14',
    question: 'Singleton set has exactly one element.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Singleton set has exactly one element.'
  },
  {
    id: 'cosc55a-15',
    question: 'Finite set has definite number of elements.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Finite set has countable number of elements.'
  },
  {
    id: 'cosc55a-16',
    question: 'Infinite set has never-ending elements.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Infinite set has unlimited elements.'
  },
  {
    id: 'cosc55a-17',
    question: 'Disjoint sets have no common elements.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Disjoint sets share no elements.'
  },
  {
    id: 'cosc55a-18',
    question: 'Power set P(A) contains all subsets of A.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Power set includes all subsets including empty set and A itself.'
  },
  {
    id: 'cosc55a-19',
    question: 'Universal set contains all elements under consideration.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Universal set contains all elements in current context.'
  },
  {
    id: 'cosc55a-20',
    question: 'Union: A ∪ B = {x | x ∈ A or x ∈ B}',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Union includes elements from either set.'
  },
  {
    id: 'cosc55a-21',
    question: 'Intersection: A ∩ B = {x | x ∈ A and x ∈ B}',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Intersection includes only common elements.'
  },
  {
    id: 'cosc55a-22',
    question: 'Venn diagrams visualize set relationships.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Venn diagrams show set relationships visually.'
  },
  {
    id: 'cosc55a-23',
    question: 'Product rule: n₁ × n₂ ways for two tasks.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Product rule for sequential independent tasks.'
  },
  {
    id: 'cosc55a-24',
    question: 'Sum rule: n₁ + n₂ for mutually exclusive tasks.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Sum rule applies to mutually exclusive choices.'
  },
  {
    id: 'cosc55a-25',
    question: 'Inclusion-exclusion: |A₁ ∪ A₂| = |A₁| + |A₂| - |A₁ ∩ A₂|',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Inclusion-exclusion principle for two sets.'
  },
  {
    id: 'cosc55a-26',
    question: 'Division rule: n/d for d equivalent groups.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Division rule for counting when order doesn\'t matter.'
  },
  {
    id: 'cosc55a-27',
    question: 'Tree diagrams show multi-step processes.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Tree diagrams show sequential decision processes.'
  },
  {
    id: 'cosc55a-28',
    question: 'Permutations: order matters.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Permutations consider arrangement order.'
  },
  {
    id: 'cosc55a-29',
    question: 'nPr = n!/(n-r)!',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Permutations formula for selecting r from n.'
  },
  {
    id: 'cosc55a-30',
    question: 'Combinations: order does not matter.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Combinations ignore arrangement order.'
  },
  {
    id: 'cosc55a-31',
    question: 'nCr = n!/((n-r)! r!)',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Combinations formula.'
  },
  {
    id: 'cosc55a-32',
    question: 'Applications: poker hands, committees, seating.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'These are common applications of permutations/combinations.'
  },
  {
    id: 'cosc55a-33',
    question: 'Binomial theorem: (a + b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Binomial theorem expansion.'
  },
  {
    id: 'cosc55a-34',
    question: 'r-th term: Tᵣ = C(n, r-1) aⁿ⁻⁽ʳ⁻¹⁾ bʳ⁻¹',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Formula for r-th term in binomial expansion.'
  },
  {
    id: 'cosc55a-35',
    question: 'Examples: expand (8x + 3)⁵, (3x² + 2)⁴, (x - 7y)⁶',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'These are examples of binomial expansion applications.'
  },
  {
    id: 'cosc55a-36',
    question: 'Permutation with repetition: nʳ',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Permutation with repetition allows reuse of elements.'
  },
  {
    id: 'cosc55a-37',
    question: 'Combination with repetition: C(r + n - 1, r)',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Combination with repetition formula.'
  },
  {
    id: 'cosc55a-38',
    question: 'Permutation with indistinguishable: n!/(p! q! r! ...)',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Formula for permutations with identical items.'
  },
  {
    id: 'cosc55a-39',
    question: 'Distinguishable into distinguishable: multinomial coefficients.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Multinomial coefficients for distributing distinct items.'
  },
  {
    id: 'cosc55a-40',
    question: 'Indistinguishable into distinguishable: stars and bars C(r + n - 1, r)',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Stars and bars method for identical items to distinct bins.'
  },
  {
    id: 'cosc55a-41',
    question: 'Experiment: process with uncertain outcomes.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Experiment produces uncertain results.'
  },
  {
    id: 'cosc55a-42',
    question: 'Sample space S: set of all possible outcomes.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Sample space includes all possible outcomes.'
  },
  {
    id: 'cosc55a-43',
    question: 'Event E: subset of S.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Event is a subset of the sample space.'
  },
  {
    id: 'cosc55a-44',
    question: 'P(E) = (# favorable outcomes)/(# possible outcomes)',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Classical probability definition.'
  },
  {
    id: 'cosc55a-45',
    question: 'Coin toss: P(Head) = 1/2',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Fair coin has equal probability for heads and tails.'
  },
  {
    id: 'cosc55a-46',
    question: 'Die roll: P(Even) = 3/6 = 1/2',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Probability of rolling even number on fair die.'
  },
  {
    id: 'cosc55a-47',
    question: 'Deck: P(Ace) = 4/52 = 1/13',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Probability of drawing ace from standard deck.'
  },
  {
    id: 'cosc55a-48',
    question: 'Probability range: 0 ≤ P(E) ≤ 1',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Probability values are always between 0 and 1 inclusive.'
  },
  {
    id: 'cosc55a-49',
    question: 'P(S) = 1',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Probability of sample space is always 1.'
  },
  {
    id: 'cosc55a-50',
    question: 'Complement: P(E\') = 1 - P(E)',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Complement rule for probability.'
  }
];