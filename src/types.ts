export interface Answer {
  answer: string;
  correctAnswer: string;
}

export interface Answers {
  [answer: string]: Answer;
}

export interface Question {
  category: string;
  correct_answer: string;
  question: string;
}

export type Questions = Question[];
