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
  },
  {
    id: 'dcit50-6',
    question: 'A method is a block of code that performs a specific task.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Method performs specific task.'
  },
  {
    id: 'dcit50-7',
    question: 'Why use methods in Java?',
    type: 'multiple',
    choices: [
      'Code reusability',
      'Better organization',
      'Easier debugging',
      'All of the above'
    ],
    correctAnswer: 3,
    explanation: 'Methods provide reusability, organization, and easier maintenance.'
  },
  {
    id: 'dcit50-8',
    question: 'Methods can return multiple values.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Methods return only one value or void.'
  },
  {
    id: 'dcit50-9',
    question: 'What is a class in Java?',
    type: 'multiple',
    choices: [
      'Instance of an object',
      'Blueprint for creating objects',
      'Variable type',
      'Method collection'
    ],
    correctAnswer: 1,
    explanation: 'Class is blueprint for objects.'
  },
  {
    id: 'dcit50-10',
    question: 'Object is an instance of a class.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Object = instance of class.'
  },
  {
    id: 'dcit50-11',
    question: 'What is a constructor?',
    type: 'multiple',
    choices: [
      'Method that returns value',
      'Special method called when object is created',
      'Variable declaration',
      'Class type'
    ],
    correctAnswer: 1,
    explanation: 'Constructor initializes object.'
  },
  {
    id: 'dcit50-12',
    question: 'Constructor has same name as class.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Constructor name matches class name.'
  },
  {
    id: 'dcit50-13',
    question: 'Constructors have return types.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Constructors have no return type.'
  },
  {
    id: 'dcit50-14',
    question: 'Which constructor has no parameters?',
    type: 'multiple',
    choices: [
      'Default constructor',
      'Parameterized constructor',
      'Copy constructor',
      'Static constructor'
    ],
    correctAnswer: 0,
    explanation: 'Default constructor has no parameters.'
  },
  {
    id: 'dcit50-15',
    question: 'Encapsulation hides data using private fields.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Encapsulation uses private fields with public methods.'
  },
  {
    id: 'dcit50-16',
    question: 'What are getters and setters used for?',
    type: 'multiple',
    choices: [
      'Inheritance',
      'Polymorphism',
      'Encapsulation',
      'Abstraction'
    ],
    correctAnswer: 2,
    explanation: 'Getters/setters implement encapsulation.'
  },
  {
    id: 'dcit50-17',
    question: 'Inheritance uses "extends" keyword.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Inheritance uses extends.'
  },
  {
    id: 'dcit50-18',
    question: 'Child class acquires properties from parent class.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Child inherits from parent.'
  },
  {
    id: 'dcit50-19',
    question: 'Which inheritance type uses interfaces?',
    type: 'multiple',
    choices: [
      'Single',
      'Multilevel',
      'Hierarchical',
      'Multiple'
    ],
    correctAnswer: 3,
    explanation: 'Multiple inheritance uses interfaces.'
  },
  {
    id: 'dcit50-20',
    question: 'Polymorphism means "many forms".',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Polymorphism = many forms.'
  },
  {
    id: 'dcit50-21',
    question: 'Method overriding is runtime polymorphism.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Overriding = runtime polymorphism.'
  },
  {
    id: 'dcit50-22',
    question: 'Method overloading is compile-time polymorphism.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Overloading = compile-time polymorphism.'
  },
  {
    id: 'dcit50-23',
    question: 'What does abstraction hide?',
    type: 'multiple',
    choices: [
      'Complex details',
      'Simple methods',
      'Variables',
      'Constructors'
    ],
    correctAnswer: 0,
    explanation: 'Abstraction hides complexity.'
  },
  {
    id: 'dcit50-24',
    question: 'Abstract classes can have abstract and concrete methods.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Abstract classes can have both.'
  },
  {
    id: 'dcit50-25',
    question: 'Interfaces provide 100% abstraction.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Interfaces are fully abstract.'
  },
  {
    id: 'dcit50-26',
    question: 'Which OOP principle wraps data and methods?',
    type: 'multiple',
    choices: [
      'Encapsulation',
      'Abstraction',
      'Inheritance',
      'Polymorphism'
    ],
    correctAnswer: 0,
    explanation: 'Encapsulation wraps data/methods.'
  },
  {
    id: 'dcit50-27',
    question: 'Which shows only relevant details?',
    type: 'multiple',
    choices: [
      'Encapsulation',
      'Abstraction',
      'Inheritance',
      'Polymorphism'
    ],
    correctAnswer: 1,
    explanation: 'Abstraction shows relevant details.'
  },
  {
    id: 'dcit50-28',
    question: 'Which derives new classes?',
    type: 'multiple',
    choices: [
      'Encapsulation',
      'Abstraction',
      'Inheritance',
      'Polymorphism'
    ],
    correctAnswer: 2,
    explanation: 'Inheritance derives classes.'
  },
  {
    id: 'dcit50-29',
    question: 'Which uses same method in different contexts?',
    type: 'multiple',
    choices: [
      'Encapsulation',
      'Abstraction',
      'Inheritance',
      'Polymorphism'
    ],
    correctAnswer: 3,
    explanation: 'Polymorphism uses same method differently.'
  },
  {
    id: 'dcit50-30',
    question: 'Public access modifier is accessible everywhere.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Public = everywhere access.'
  },
  {
    id: 'dcit50-31',
    question: 'Private is accessible only within class.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Private = class only.'
  },
  {
    id: 'dcit50-32',
    question: 'Protected is accessible within package and subclasses.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Protected = package + subclasses.'
  },
  {
    id: 'dcit50-33',
    question: 'Default is accessible within package only.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Default = package only.'
  },
  {
    id: 'dcit50-34',
    question: 'Static belongs to class, not instances.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Static = class level.'
  },
  {
    id: 'dcit50-35',
    question: 'Final cannot be changed.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Final = unchangeable.'
  },
  {
    id: 'dcit50-36',
    question: 'Abstract is for abstract classes/methods.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Abstract modifier.'
  },
  {
    id: 'dcit50-37',
    question: '"this" refers to current object.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'this = current object.'
  },
  {
    id: 'dcit50-38',
    question: '"super" refers to parent class.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'super = parent class.'
  },
  {
    id: 'dcit50-39',
    question: 'Abstract classes can have constructors.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Abstract classes can have constructors.'
  },
  {
    id: 'dcit50-40',
    question: 'Interfaces cannot have constructors.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Interfaces have no constructors.'
  },
  {
    id: 'dcit50-41',
    question: 'Interface variables are public static final by default.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Interface variables = public static final.'
  },
  {
    id: 'dcit50-42',
    question: 'Abstract classes support single inheritance.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Abstract classes = single inheritance.'
  },
  {
    id: 'dcit50-43',
    question: 'Interfaces support multiple inheritance.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Interfaces = multiple inheritance.'
  },
  {
    id: 'dcit50-44',
    question: 'When to use abstract class?',
    type: 'multiple',
    choices: [
      'Shared code + common behavior',
      'Multiple unrelated classes',
      'No common behavior',
      'Simple data storage'
    ],
    correctAnswer: 0,
    explanation: 'Abstract class for shared code.'
  },
  {
    id: 'dcit50-45',
    question: 'When to use interface?',
    type: 'multiple',
    choices: [
      'Shared code',
      'Multiple unrelated classes need same behavior',
      'Single class hierarchy',
      'Data hiding only'
    ],
    correctAnswer: 1,
    explanation: 'Interface for unrelated classes with same behavior.'
  },
  {
    id: 'dcit50-46',
    question: 'What does the example SimpleTasks class demonstrate?',
    type: 'multiple',
    choices: [
      'Inheritance',
      'Method definitions and calling',
      'Abstract classes',
      'Interfaces'
    ],
    correctAnswer: 1,
    explanation: 'Shows method definition and calling.'
  },
  {
    id: 'dcit50-47',
    question: 'Method can accept parameters.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Methods accept parameters.'
  },
  {
    id: 'dcit50-48',
    question: 'After execution, control returns to caller.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Control returns to caller.'
  },
  {
    id: 'dcit50-49',
    question: 'Objects are created using "new" keyword.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'new creates objects.'
  },
  {
    id: 'dcit50-50',
    question: 'Which is NOT an OOP principle?',
    type: 'multiple',
    choices: [
      'Encapsulation',
      'Abstraction',
      'Compilation',
      'Polymorphism'
    ],
    correctAnswer: 2,
    explanation: 'Compilation is not OOP principle.'
  }
];