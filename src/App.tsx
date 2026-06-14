/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { StartScreen } from './components/StartScreen';
import { SelectionScreen } from './components/SelectionScreen';
import { IntroScreen } from './components/IntroScreen';
import { PrepScreen } from './components/PrepScreen';
import { GameScreen } from './components/GameScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { GameState, GameMode, Language } from './types';

type Screen = 'START' | 'SELECTION' | 'INTRO' | 'PREP' | 'GAME' | 'RESULTS';

export default function App() {
  const [screen, setScreen] = useState<Screen>('START');
  const [gameState, setGameState] = useState<GameState>({
    mode: 'SOLO',
    level: 1,
    lesson: 1,
    score: 0,
    lives: 3,
    timeLeft: 60,
    combo: 0,
    isPaused: false,
    isGameOver: false,
    history: [],
    lang: 'en',
  });

  const resetGame = () => {
    setGameState(prev => ({
      ...prev,
      score: 0,
      lives: 3,
      timeLeft: 60,
      combo: 0,
      isPaused: false,
      isGameOver: false,
      history: [],
      totalWords: 0,
      p1Score: 0,
      p2Score: 0,
    }));
  };

  const startMode = (mode: GameMode) => {
    setGameState(prev => ({ ...prev, mode }));
    if (mode === 'INTRO') {
      setScreen('INTRO');
    } else {
      setScreen('SELECTION');
    }
  };

  const selectLevelAndLesson = (level: number, lesson: number) => {
    setGameState(prev => ({ ...prev, level, lesson }));
    setScreen('PREP');
  };

  const startGame = () => {
    resetGame();
    setScreen('GAME');
  };

  const finishGame = (finalHistory: any[], finalScore: number, totalWords: number, p1Score?: number, p2Score?: number) => {
    setGameState(prev => ({ 
      ...prev, 
      history: finalHistory, 
      score: finalScore, 
      isGameOver: true, 
      totalWords,
      p1Score: p1Score !== undefined ? p1Score : prev.p1Score,
      p2Score: p2Score !== undefined ? p2Score : prev.p2Score
    }));
    setScreen('RESULTS');
  };

  const toggleLang = () => {
    setGameState(prev => ({ ...prev, lang: prev.lang === 'en' ? 'mn' : 'en' }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30 overflow-hidden">
      <AnimatePresence mode="wait">
        {screen === 'START' && (
          <StartScreen key="start" onStart={startMode} onToggleLang={toggleLang} lang={gameState.lang} />
        )}
        {screen === 'SELECTION' && (
          <SelectionScreen 
            key="selection" 
            onBack={() => setScreen('START')} 
            onSelect={selectLevelAndLesson}
            lang={gameState.lang}
          />
        )}
        {screen === 'INTRO' && (
          <IntroScreen 
            key="intro" 
            onBack={() => setScreen('START')} 
            lang={gameState.lang}
          />
        )}
        {screen === 'PREP' && (
          <PrepScreen 
            key="prep" 
            level={gameState.level} 
            lesson={gameState.lesson} 
            onStart={startGame}
            onBack={() => setScreen('SELECTION')}
            lang={gameState.lang}
          />
        )}
        {screen === 'GAME' && (
          <GameScreen 
            key={`game-${gameState.level}-${gameState.lesson}-${gameState.mode}`}
            gameState={gameState} 
            onFinish={finishGame}
            onHome={() => setScreen('START')}
            lang={gameState.lang}
          />
        )}
        {screen === 'RESULTS' && (
          <ResultsScreen 
            key="results" 
            gameState={gameState} 
            onRestart={startGame}
            onHome={() => setScreen('START')}
            onNext={() => {
              const nextLesson = gameState.lesson < 12 ? gameState.lesson + 1 : 1;
              const nextLevel = nextLesson === 1 ? (gameState.level < 6 ? gameState.level + 1 : 1) : gameState.level;
              selectLevelAndLesson(nextLevel, nextLesson);
            }}
            lang={gameState.lang}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
