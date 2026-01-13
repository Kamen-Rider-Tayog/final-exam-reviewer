import type { Question } from '../../types';

export const DCIT24A_QUESTIONS: Question[] = [
  {
    id: 'dcit24a-1',
    question: 'Which SQL command is used to retrieve data from a database?',
    type: 'multiple',
    choices: ['SELECT', 'UPDATE', 'DELETE', 'INSERT'],
    correctAnswer: 0,
    explanation: 'SELECT statement retrieves data from database tables.'
  },
  {
    id: 'dcit24a-2',
    question: 'A primary key can contain NULL values.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Primary key cannot contain NULL values, must be unique and not null.'
  },
  {
    id: 'dcit24a-3',
    question: 'What does the Data Administrator (DA) primarily handle?',
    type: 'multiple',
    choices: [
      'Physical database design',
      'High-level management of data resources',
      'Technical security implementation',
      'Database backup procedures'
    ],
    correctAnswer: 1,
    explanation: 'DA handles high-level management of data resources and corporate standards.'
  },
  {
    id: 'dcit24a-4',
    question: 'Database Administration (DBA) focuses on technical implementation.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'DBA focuses on physical design, security, performance, backup, and recovery.'
  },
  {
    id: 'dcit24a-5',
    question: 'Which phase of SDLC involves feasibility analysis?',
    type: 'multiple',
    choices: [
      'Preliminary Analysis',
      'System Design',
      'Programming',
      'Maintenance'
    ],
    correctAnswer: 0,
    explanation: 'Preliminary Analysis phase includes feasibility study.'
  },
  {
    id: 'dcit24a-6',
    question: 'Rapid Application Development (RAD) includes user design sessions.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'RAD includes User Design phase with IAD (Interactive Application Design) sessions.'
  },
  {
    id: 'dcit24a-7',
    question: 'Which Agile methodology value prioritizes individuals and interactions?',
    type: 'multiple',
    choices: [
      'Working software over documentation',
      'Responding to change over following a plan',
      'Individuals and interactions over processes and tools',
      'Customer collaboration over contract negotiation'
    ],
    correctAnswer: 2,
    explanation: 'Agile values individuals and interactions over processes and tools.'
  },
  {
    id: 'dcit24a-8',
    question: 'Three-Schema Architecture includes internal schema for physical storage.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Internal schema represents physical storage design.'
  },
  {
    id: 'dcit24a-9',
    question: 'Which SQL function concatenates strings with a separator?',
    type: 'multiple',
    choices: ['CONCAT', 'CONCAT_WS', 'SUBSTRING', 'REPLACE'],
    correctAnswer: 1,
    explanation: 'CONCAT_WS concatenates strings with a separator.'
  },
  {
    id: 'dcit24a-10',
    question: 'The CURTIME() function returns current time in SQL.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'CURTIME() or CURRENT_TIME returns current time.'
  },
  {
    id: 'dcit24a-11',
    question: 'In ER modeling, what represents an object in the system?',
    type: 'multiple',
    choices: ['Attribute', 'Entity', 'Relationship', 'Constraint'],
    correctAnswer: 1,
    explanation: 'Entity represents an object in the system.'
  },
  {
    id: 'dcit24a-12',
    question: 'Composite attributes can be divided into smaller sub-parts.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Composite attributes are made of multiple components.'
  },
  {
    id: 'dcit24a-13',
    question: 'Which relationship degree represents one entity related to many entities?',
    type: 'multiple',
    choices: ['One-to-One', 'One-to-Many', 'Many-to-Many', 'None of these'],
    correctAnswer: 1,
    explanation: 'One-to-Many (1:M) relationship.'
  },
  {
    id: 'dcit24a-14',
    question: 'All rows in a relation must be unique.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Every row in a relation must be unique.'
  },
  {
    id: 'dcit24a-15',
    question: 'What ensures foreign keys match primary keys?',
    type: 'multiple',
    choices: [
      'Domain Constraints',
      'Entity Integrity',
      'Referential Integrity',
      'Delete Rules'
    ],
    correctAnswer: 2,
    explanation: 'Referential Integrity ensures FK matches PK.'
  },
  {
    id: 'dcit24a-16',
    question: 'Delete rules include Restrict, Cascade, and Set-to-Null.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Correct delete rules for referential integrity.'
  },
  {
    id: 'dcit24a-17',
    question: 'Weak entities map to separate relations with foreign keys.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Weak entities become separate relations with FK from strong entity.'
  },
  {
    id: 'dcit24a-18',
    question: 'Which RAD phase involves iterative building?',
    type: 'multiple',
    choices: [
      'Requirements Planning',
      'User Design',
      'Construction',
      'Cutover'
    ],
    correctAnswer: 2,
    explanation: 'Construction phase involves iterative building.'
  },
  {
    id: 'dcit24a-19',
    question: 'Scrum is an example of Waterfall methodology.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Scrum is an Agile methodology.'
  },
  {
    id: 'dcit24a-20',
    question: 'Three-Tiered Architecture separates which layers?',
    type: 'multiple',
    choices: [
      'User, Business, Database',
      'Input, Process, Output',
      'Presentation, Logic, Data',
      'Client, Application, Enterprise'
    ],
    correctAnswer: 3,
    explanation: 'Client Tier, Application/Web Tier, Enterprise Tier.'
  },
  {
    id: 'dcit24a-21',
    question: 'LCASE() function converts text to lowercase.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'LCASE() or LOWER() converts to lowercase.'
  },
  {
    id: 'dcit24a-22',
    question: 'Which numeric function returns absolute value?',
    type: 'multiple',
    choices: ['ABS', 'ACOS', 'ASIN', 'AVG'],
    correctAnswer: 0,
    explanation: 'ABS() returns absolute value.'
  },
  {
    id: 'dcit24a-23',
    question: 'PI() function returns the mathematical constant π.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'PI() returns π value.'
  },
  {
    id: 'dcit24a-24',
    question: 'DATE_FORMAT() formats date values in SQL.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'DATE_FORMAT() formats dates.'
  },
  {
    id: 'dcit24a-25',
    question: 'What is the main purpose of Three-Schema Architecture?',
    type: 'multiple',
    choices: [
      'Improve performance',
      'Separate concerns between layers',
      'Reduce storage costs',
      'Simplify coding'
    ],
    correctAnswer: 1,
    explanation: 'Separates external, conceptual, and internal schemas.'
  },
  {
    id: 'dcit24a-26',
    question: 'Agile methodology follows strict sequential phases.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Agile is iterative, not sequential.'
  },
  {
    id: 'dcit24a-27',
    question: 'Which SQL function returns remainder of division?',
    type: 'multiple',
    choices: ['MOD', 'DIV', 'FLOOR', 'CEIL'],
    correctAnswer: 0,
    explanation: 'MOD() returns remainder.'
  },
  {
    id: 'dcit24a-28',
    question: 'CURDATE() returns current date.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'CURDATE() or CURRENT_DATE returns current date.'
  },
  {
    id: 'dcit24a-29',
    question: 'What transforms ER diagrams into relational tables?',
    type: 'multiple',
    choices: [
      'Normalization',
      'Denormalization',
      'ER to Relation mapping',
      'Indexing'
    ],
    correctAnswer: 2,
    explanation: 'ER to Relation transformation.'
  },
  {
    id: 'dcit24a-30',
    question: 'M:N relationships require new relations with composite keys.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'M:N relationships become new relations with composite PK.'
  },
  {
    id: 'dcit24a-31',
    question: 'Which function repeats a string multiple times?',
    type: 'multiple',
    choices: ['REPEAT', 'REPLACE', 'REVERSE', 'RIGHT'],
    correctAnswer: 0,
    explanation: 'REPEAT() repeats strings.'
  },
  {
    id: 'dcit24a-32',
    question: 'SUBSTR() extracts part of a string.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'SUBSTR() extracts substring.'
  },
  {
    id: 'dcit24a-33',
    question: 'POW() function raises a number to a power.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'POW() or POWER() raises to power.'
  },
  {
    id: 'dcit24a-34',
    question: 'Which Agile methodology uses sprints?',
    type: 'multiple',
    choices: ['Waterfall', 'RAD', 'Scrum', 'Spiral'],
    correctAnswer: 2,
    explanation: 'Scrum uses sprints.'
  },
  {
    id: 'dcit24a-35',
    question: 'Extreme Programming is an Agile example.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Extreme Programming (XP) is Agile.'
  },
  {
    id: 'dcit24a-36',
    question: 'Feature-Driven Development is Agile.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Feature-Driven Development is Agile methodology.'
  },
  {
    id: 'dcit24a-37',
    question: 'What does DBA handle during operations?',
    type: 'multiple',
    choices: [
      'Backup procedures',
      'Corporate standards',
      'Feasibility analysis',
      'User training'
    ],
    correctAnswer: 0,
    explanation: 'DBA handles backup during operations.'
  },
  {
    id: 'dcit24a-38',
    question: 'DA handles change control and technology evaluation.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'DA handles growth and change functions.'
  },
  {
    id: 'dcit24a-39',
    question: 'Which is part of system analysis?',
    type: 'multiple',
    choices: [
      'Coding',
      'Requirements gathering',
      'Physical design',
      'Implementation'
    ],
    correctAnswer: 1,
    explanation: 'System Analysis gathers requirements.'
  },
  {
    id: 'dcit24a-40',
    question: 'Testing includes Unit, System, and UAT.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Testing phases: Unit, System, User Acceptance.'
  },
  {
    id: 'dcit24a-41',
    question: 'Implementation includes user training.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Implementation phase includes training.'
  },
  {
    id: 'dcit24a-42',
    question: 'Maintenance involves support and updates.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Maintenance includes support.'
  },
  {
    id: 'dcit24a-43',
    question: 'External schema represents user views.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'External schema = user views.'
  },
  {
    id: 'dcit24a-44',
    question: 'Conceptual schema is technology-independent.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Conceptual schema is tech-independent.'
  },
  {
    id: 'dcit24a-45',
    question: 'Which function trims spaces from left?',
    type: 'multiple',
    choices: ['LTRIM', 'RTRIM', 'TRIM', 'LPAD'],
    correctAnswer: 0,
    explanation: 'LTRIM() trims left spaces.'
  },
  {
    id: 'dcit24a-46',
    question: 'RPAD() pads string on right.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'RPAD() right-pads string.'
  },
  {
    id: 'dcit24a-47',
    question: 'STRCMP() compares strings.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'STRCMP() compares strings.'
  },
  {
    id: 'dcit24a-48',
    question: 'SUBSTRING_INDEX() extracts substring by delimiter.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'SUBSTRING_INDEX() uses delimiter.'
  },
  {
    id: 'dcit24a-49',
    question: 'UCASE() converts to uppercase.',
    type: 'boolean',
    choices: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'UCASE() or UPPER() converts to uppercase.'
  },
  {
    id: 'dcit24a-50',
    question: 'What is the final SDLC phase?',
    type: 'multiple',
    choices: [
      'Analysis',
      'Design',
      'Maintenance',
      'Disposal'
    ],
    correctAnswer: 2,
    explanation: 'Maintenance is the ongoing final phase.'
  }
];