export interface Question {
  id: number;
  topic: string;
  question: string;
  options: [string, string, string, string];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: 'Easy' | 'Logical' | 'Tactical';
}

export const questions: Question[] = [
  {
    id: 1,
    topic: 'Cell structure and functions',
    question: 'Which cellular organelle is primarily responsible for the production of adenosine triphosphate (ATP) in eukaryotic cells?',
    options: ['Ribosome', 'Mitochondrion', 'Endoplasmic reticulum', 'Golgi apparatus'],
    correctAnswerIndex: 1,
    explanation: 'The mitochondrion is the site of aerobic respiration, where the majority of ATP is produced to power cellular activities.',
    difficulty: 'Easy'
  },
  {
    id: 2,
    topic: 'Nutrition in plants',
    question: 'During photosynthesis, which of the following is the primary role of light energy?',
    options: ['Fixing carbon dioxide', 'Splitting water molecules', 'Producing glucose directly', 'Synthesizing amino acids'],
    correctAnswerIndex: 1,
    explanation: 'Light energy is used in the light-dependent reactions to photolyze water, releasing electrons, protons, and oxygen.',
    difficulty: 'Logical'
  },
  {
    id: 3,
    topic: 'Genetics / Heredity',
    question: 'In a dihybrid cross, if two heterozygous organisms are crossed, what is the expected phenotypic ratio in the offspring?',
    options: ['9:3:3:1', '3:1', '1:2:1', '1:1:1:1'],
    correctAnswerIndex: 0,
    explanation: 'According to Mendelian inheritance for independent assortment, crossing two dihybrid organisms results in a 9:3:3:1 ratio.',
    difficulty: 'Tactical'
  },
  {
    id: 4,
    topic: 'Ecology',
    question: 'Which of the following best describes the role of decomposers in an ecosystem?',
    options: ['Consuming primary consumers', 'Synthesizing organic compounds', 'Breaking down organic matter', 'Regulating population size'],
    correctAnswerIndex: 2,
    explanation: 'Decomposers break down complex organic materials into simpler inorganic substances, recycling nutrients back into the ecosystem.',
    difficulty: 'Easy'
  }
];
