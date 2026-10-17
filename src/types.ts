export interface Question {
  id: number;
  topic: string;
  question: string;
  options: [string, string, string, string];
  answerIndex: number;
  explanation: string;
  difficulty: 'Easy' | 'Logical' | 'Tactical';
  svgStructure?: string;
}
