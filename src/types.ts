export type GameMode = 'SOLO' | 'PK' | 'ENDLESS' | 'INTRO';
export type Language = 'en' | 'mn';

export interface GameState {
  mode: GameMode;
  level: number;
  lesson: number;
  score: number;
  lives: number;
  p1Score?: number;
  p2Score?: number;
  p1Lives?: number;
  p2Lives?: number;
  timeLeft: number;
  combo: number;
  isPaused: boolean;
  isGameOver: boolean;
  history: GameHistoryItem[];
  lang: Language;
  totalWords?: number;
}

export interface GameHistoryItem {
  character: string;
  pinyin: string;
  pinyinPlain: string;
  correctTone: number;
  selectedTone: number;
  isCorrect: boolean;
  translation: string;
}
