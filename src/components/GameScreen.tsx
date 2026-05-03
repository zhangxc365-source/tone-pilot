import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Pause, Play, Home, RotateCcw, AlertTriangle } from 'lucide-react';
import { GameState, GameHistoryItem, Language } from '../types';
import { getLessonWords, Word, YCT_VOCAB } from '../data/vocabulary';
import audioManifest from '../data/audioManifest.json';
import { cn, resolveAudioUrl } from '../lib/utils';

// Core Game Arena Component (Shared between Solo and PK)
interface ArenaProps {
  id: string;
  gameState: GameState;
  currentWord: Word | null;
  currentSyllableIndex: number;
  onAnswer: (tone: number) => void;
  lang: Language;
  showSmoke: boolean;
  isCorrect: boolean | null;
}

const Arena: React.FC<ArenaProps> = ({ id, gameState, currentWord, currentSyllableIndex, onAnswer, lang, showSmoke, isCorrect }) => {
  const [planeY, setPlaneY] = useState(0);
  const [planeX, setPlaneX] = useState(0);

  const handleToneClick = (tone: number) => {
    onAnswer(tone);
    // Movement feedback
    if (tone === 1) { // Level
      setPlaneX(10);
      setTimeout(() => setPlaneX(0), 200);
    } else if (tone === 2) { // Rising
      setPlaneY(20);
      setTimeout(() => setPlaneY(0), 400);
    } else if (tone === 3) { // Dipping
      setPlaneY(30);
      setTimeout(() => {
        setPlaneY(-30);
        setTimeout(() => setPlaneY(0), 300);
      }, 300);
    } else if (tone === 4) { // Falling
      setPlaneY(-20);
      setTimeout(() => setPlaneY(0), 400);
    }
  };

  const clouds = useRef(Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    angle: Math.random() * Math.PI * 2,
    distance: 800 + Math.random() * 800,
    size: 100 + Math.random() * 200,
    duration: 2 + Math.random() * 4, // Slightly faster
    delay: Math.random() * 5
  })));

  const toneIcons = [
    { label: lang === 'en' ? "Neutral" : "Хөнгөн", char: "0", color: "bg-gray-500", border: "border-gray-700", text: "text-gray-300", num: "0" },
    { label: lang === 'en' ? "Level" : "Тэгш", char: "—", color: "bg-blue-500", border: "border-blue-700", text: "text-blue-300", num: "1" },
    { label: lang === 'en' ? "Rising" : "Өгсөх", char: "/", color: "bg-green-500", border: "border-green-700", text: "text-green-300", num: "2" },
    { label: lang === 'en' ? "Dipping" : "Уруудах", char: "v", color: "bg-yellow-500", border: "border-yellow-700", text: "text-yellow-300", num: "3" },
    { label: lang === 'en' ? "Falling" : "Буух", char: "\\", color: "bg-orange-500", border: "border-orange-700", text: "text-orange-300", num: "4" },
  ];

  return (
    <motion.div 
      animate={{ 
        y: planeY + (Math.sin(Date.now() / 200) * 2), // Subtle engine vibration
        x: planeX 
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className="relative flex-1 h-full bg-sky-400 overflow-hidden group select-none" 
      style={{ background: 'linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%)' }}
    >
      {/* Dynamic Zooming Clouds Background */}
      {clouds.current.map((cloud) => (
        <motion.div
           key={cloud.id}
           initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
           animate={{ 
             scale: [0, 2.5], 
             opacity: [0, 0.4, 0],
             x: ['-50%', `calc(-50% + ${Math.cos(cloud.angle) * cloud.distance}px)`],
             y: ['-50%', `calc(-50% + ${Math.sin(cloud.angle) * cloud.distance * 0.6}px)`]
           }}
           transition={{ duration: cloud.duration, repeat: Infinity, ease: "easeIn", delay: -cloud.delay }}
           className="absolute top-1/2 left-1/2 bg-white rounded-full blur-2xl pointer-events-none"
           style={{
             width: `${cloud.size}px`,
             height: `${cloud.size * 0.6}px`,
           }}
        />
      ))}
      
      {/* Radial Speed Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          return (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
              animate={{ 
                scale: [0, 3], 
                opacity: [0, 0.2, 0],
                x: ['-50%', `calc(-50% + ${Math.cos(angle) * 1000}px)`],
                y: ['-50%', `calc(-50% + ${Math.sin(angle) * 500}px)`]
              }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "linear", delay: Math.random() * 0.6 }}
              className="absolute top-1/2 left-1/2 w-1 h-24 bg-white/40 blur-[1px]"
              style={{ rotate: `${(angle * 180) / Math.PI + 90}deg` }}
            />
          );
        })}
      </div>

      {/* Cockpit Frame */}
      <div className="absolute inset-0 border-[60px] border-slate-700/30 pointer-events-none rounded-[100px] z-40" />
      <div className="absolute bottom-0 w-full h-[320px] bg-gradient-to-t from-white/30 to-transparent pointer-events-none z-40" />

      {/* Visual Disturbance / Smoke */}
      <AnimatePresence>
        {showSmoke && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/20 backdrop-blur-[2px] pointer-events-none z-10"
            />
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              className="absolute top-1/4 left-1/3 w-96 h-64 bg-gray-400/30 rounded-full blur-3xl pointer-events-none z-10"
            />
          </>
        )}
      </AnimatePresence>

      {/* Red Warning Flash */}
      <AnimatePresence>
        {showSmoke && (
          <motion.div 
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="absolute inset-0 border-[24px] border-red-500/40 pointer-events-none z-20"
          />
        )}
      </AnimatePresence>      {/* Central Monitor Display */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <motion.div
           key={currentWord?.character || 'transition'}
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.5 }}
           className="relative w-[500px] h-[300px] bg-white/90 border-[10px] border-white rounded-3xl shadow-2xl flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Scanline Grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          {!currentWord ? (
            <div className="flex flex-col items-center justify-center gap-2">
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [1, 1.2, 1], opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="flex flex-col items-center gap-1"
              >
                <AlertTriangle className="w-12 h-12 text-red-600 fill-red-200" />
                <span className="text-red-600 font-black text-sm tracking-[0.2em] italic">DANGER!</span>
              </motion.div>
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-blue-500/30 italic text-8xl font-black tracking-tighter"
              >
                NEXT
              </motion.div>
            </div>
          ) : (
            <>
              <motion.div 
                key={currentWord.character}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-slate-900 text-9xl font-bold mb-4 tracking-widest drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]"
              >
                {currentWord.character}
              </motion.div>
              <div className="text-blue-600 text-xl font-black tracking-widest flex gap-4">
                {currentWord.pinyinPlain.split(' ').map((syllable, i) => (
                  <span 
                    key={i} 
                    className={cn(
                      "transition-all duration-300 px-2 py-0.5 rounded-lg",
                      i === currentSyllableIndex 
                        ? "bg-blue-600 text-white font-black scale-110 shadow-[0_0_15px_rgba(37,99,235,0.6)]" 
                        : "opacity-40 font-bold"
                    )}
                  >
                    {syllable.replace(/[0-9]/g, '').toLowerCase()}
                  </span>
                ))}
              </div>
            </>
          )}
          
          {/* Animated Scanline */}
          <motion.div 
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1 bg-cyan-500/50 blur-sm shadow-[0_0_10px_cyan]" 
          />
        </motion.div>
      </div>

      {/* Combo Tracking (Bottom Left) */}
      <div className="absolute bottom-44 left-12 z-50">
        <div className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em] mb-2">Combo Streak</div>
        <div className="flex gap-2">
          {[1, 2, 3].map(i => (
            <div 
              key={i} 
              className={cn(
                "w-8 h-2 rounded-full transition-all duration-300",
                gameState.combo >= i ? "bg-cyan-400 shadow-[0_0_10px_cyan]" : "bg-slate-700"
              )} 
            />
          ))}
        </div>
        <div className="mt-2 text-white font-black text-2xl italic">x{gameState.combo >= 2 ? '2.0' : '1.0'}</div>
      </div>

      {/* Tone Selection Controls */}
      <div className="absolute bottom-0 left-0 w-full p-8 flex justify-center gap-6 z-50 bg-gradient-to-t from-white/20 via-white/10 to-transparent">
        {toneIcons.map((tone, idx) => (
          <button
            key={idx}
            onClick={() => handleToneClick(idx)}
            className="group relative"
          >
            <motion.div
              whileTap={{ translateY: 4 }}
              className={cn(
                "w-24 h-24 border-b-[8px] rounded-2xl flex flex-col items-center justify-center text-white shadow-xl transition-all",
                tone.color,
                tone.border
              )}
            >
              <span className="text-4xl font-black italic">{tone.char}</span>
              <span className="text-xs font-black opacity-40 absolute top-2 right-3">{tone.num}</span>
            </motion.div>
            <span className={cn(
              "absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest transition-opacity group-hover:opacity-100 opacity-60",
              tone.text
            )}>
              {tone.label}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export const GameScreen: React.FC<{
  gameState: GameState;
  onFinish: (history: GameHistoryItem[], score: number, totalWords: number, p1Score?: number, p2Score?: number) => void;
  onHome: () => void;
  lang: Language;
}> = ({ gameState: initialGameState, onFinish, onHome, lang }) => {
  const [state, setState] = useState<GameState>(() => {
    if (initialGameState.mode === 'PK') {
      return {
        ...initialGameState,
        p1Score: 0,
        p2Score: 0,
        p1Lives: initialGameState.lives,
        p2Lives: initialGameState.lives
      };
    }
    return initialGameState;
  });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentSyllableIndex, setCurrentSyllableIndex] = useState(0);
  const [words, setWords] = useState<Word[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSmoke, setShowSmoke] = useState(false);
  
  // Player specific state for PK
  const [p1SyllableIndex, setP1SyllableIndex] = useState(0);
  const [p2SyllableIndex, setP2SyllableIndex] = useState(0);
  
  const historyRef = useRef<GameHistoryItem[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const lessonWords = getLessonWords(state.level, state.lesson);
    // Shuffle words for random generation
    setWords([...lessonWords].sort(() => Math.random() - 0.5));
    setCurrentSyllableIndex(0);
    setP1SyllableIndex(0);
    setP2SyllableIndex(0);
  }, [state.level, state.lesson]);

  const playAudio = useCallback((word: Word) => {
    // 1. Prefer explicit audio path if defined on the word object
    if (word.audio) {
      const audioUrl = resolveAudioUrl(word.audio);
      const audio = new Audio(audioUrl);
      audio.play().catch(err => {
        console.error(`Failed to play explicit audio at ${audioUrl}:`, err);
        fallbackToSpeech(word.character);
      });
      return;
    }

    // 2. Fallback to manifest lookup for other levels
    const levelFolder = `YCT${word.level}`;
    const levelManifest = (audioManifest as any)[levelFolder];
    const fileName = levelManifest ? levelManifest[word.character] : null;
    
    if (fileName) {
      const audioPath = `/audio/${levelFolder}/${fileName}`;
      const audioUrl = resolveAudioUrl(audioPath);
      const audio = new Audio(audioUrl);
      audio.play().catch(err => {
        console.error(`Failed to play manifest audio at ${audioUrl}:`, err);
        fallbackToSpeech(word.character);
      });
    } else {
      console.warn(`No audio file found for character: ${word.character} in ${levelFolder}`);
      fallbackToSpeech(word.character);
    }
  }, []);

  const fallbackToSpeech = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.8;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (words[currentWordIndex]) {
      playAudio(words[currentWordIndex]);
    }
  }, [currentWordIndex, words, playAudio]);

  const nextWord = useCallback(() => {
    setIsTransitioning(true);
    
    // Small gap before moving to next word
    setTimeout(() => {
      setCurrentWordIndex(prev => (prev + 1) % words.length);
      setCurrentSyllableIndex(0);
      setP1SyllableIndex(0);
      setP2SyllableIndex(0);
      setIsTransitioning(false);
    }, 1500); // 1.5 second "breather" gap
  }, [words.length]);

  const handleAnswer = useCallback((selectedTone: number, arenaId: string) => {
    if (isPaused || state.isGameOver || isTransitioning) return;

    const isP1 = arenaId === '1';
    const currentIdx = state.mode === 'PK' 
      ? (isP1 ? p1SyllableIndex : p2SyllableIndex)
      : currentSyllableIndex;
    
    const currentWord = words[currentWordIndex];
    if (!currentWord) return;

    const targetTone = currentWord.tones[currentIdx];
    const isCorrect = selectedTone === targetTone;

    if (state.mode === 'PK') {
      if (isCorrect) {
        if (currentIdx < currentWord.tones.length - 1) {
          if (isP1) setP1SyllableIndex(prev => prev + 1);
          else setP2SyllableIndex(prev => prev + 1);
        } else {
          // Player won the word round
          setState(prev => ({
            ...prev,
            p1Score: isP1 ? (prev.p1Score || 0) + 10 : prev.p1Score,
            p2Score: !isP1 ? (prev.p2Score || 0) + 10 : prev.p2Score,
            score: prev.score + 10, // Global score tracking
          }));
          
          historyRef.current.push({
            character: currentWord.character,
            pinyin: currentWord.pinyin,
            pinyinPlain: currentWord.pinyinPlain,
            correctTone: targetTone,
            selectedTone,
            isCorrect: true,
            translation: currentWord.translation[lang],
          });
          nextWord();
        }
      } else {
        // Penalty for wrong answer in PK
        setShowSmoke(true);
        setTimeout(() => setShowSmoke(false), 500);

        setState(prev => ({
          ...prev,
          p1Score: isP1 ? Math.max(0, (prev.p1Score || 0) - 5) : prev.p1Score,
          p2Score: !isP1 ? Math.max(0, (prev.p2Score || 0) - 5) : prev.p2Score,
          p1Lives: isP1 ? Math.max(0, (prev.p1Lives || 0) - 1) : prev.p1Lives,
          p2Lives: !isP1 ? Math.max(0, (prev.p2Lives || 0) - 1) : prev.p2Lives,
          isGameOver: (isP1 && (prev.p1Lives || 0) <= 1) || (!isP1 && (prev.p2Lives || 0) <= 1)
        }));
        if (isP1) setP1SyllableIndex(0);
        else setP2SyllableIndex(0);
      }
    } else {
      // Solo / Endless logic
      if (isCorrect) {
        if (currentSyllableIndex < currentWord.tones.length - 1) {
          setCurrentSyllableIndex(prev => prev + 1);
        } else {
          // Word complete!
          const points = state.combo >= 2 ? 20 : 10;
          const timeBonus = state.mode === 'ENDLESS' ? 5 : 0;

          historyRef.current.push({
            character: currentWord.character,
            pinyin: currentWord.pinyin,
            pinyinPlain: currentWord.pinyinPlain,
            correctTone: targetTone,
            selectedTone,
            isCorrect: true,
            translation: currentWord.translation[lang],
          });

          setState(prev => ({
            ...prev,
            score: prev.score + points,
            timeLeft: prev.mode === 'ENDLESS' ? prev.timeLeft + timeBonus : prev.timeLeft,
            combo: prev.combo + 1,
          }));

          nextWord();
        }
      } else {
        // Penalty for wrong syllable
        setShowSmoke(true);
        setTimeout(() => setShowSmoke(false), 500);

        const points = -5;
        const timePenalty = -5;

        historyRef.current.push({
          character: currentWord.character,
          pinyin: currentWord.pinyin,
          pinyinPlain: currentWord.pinyinPlain,
          correctTone: targetTone,
          selectedTone,
          isCorrect: false,
          translation: currentWord.translation[lang],
        });

        setState(prev => {
          const nextLives = prev.lives - 1;
          const nextTime = Math.max(0, prev.timeLeft + timePenalty);
          const nextGameOver = nextLives <= 0 || (prev.mode === 'SOLO' && nextTime <= 0);
          
          return {
            ...prev,
            score: Math.max(0, prev.score + points),
            lives: nextLives,
            timeLeft: nextTime,
            combo: 0,
            isGameOver: nextGameOver
          };
        });

        setCurrentSyllableIndex(0); // Reset on wrong
        nextWord(); 
      }
    }
  }, [isPaused, isTransitioning, state.isGameOver, state.combo, state.mode, words, currentWordIndex, currentSyllableIndex, p1SyllableIndex, p2SyllableIndex, lang, nextWord]);

  // Timer Loop
  useEffect(() => {
    if (isPaused || state.isGameOver) return;

    timerRef.current = setInterval(() => {
      setState(prev => {
        if (prev.timeLeft <= 1) {
          clearInterval(timerRef.current!);
          return { ...prev, timeLeft: 0, isGameOver: true };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, state.isGameOver]);

  // Game End Checker
  useEffect(() => {
    if (state.isGameOver) {
      setTimeout(() => {
        onFinish(historyRef.current, state.score, words.length, state.p1Score, state.p2Score);
      }, 1000);
    }
  }, [state.isGameOver, onFinish, state.score, words.length, state.p1Score, state.p2Score]);

  const currentWord = words[currentWordIndex] || null;

  return (
    <div className="h-screen flex flex-col bg-black">
      {/* Global Header HUD */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-50 pointer-events-none">
        {/* Left Side: P1 Stats (or Solo Stats) */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex gap-2 pointer-events-auto">
            {Array.from({ length: 3 }).map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shadow-lg transition-all",
                  i < (state.mode === 'PK' ? (state.p1Lives || 0) : state.lives) ? "bg-red-500 scale-110" : "bg-gray-400 opacity-50 grayscale"
                )}
              >
                <Heart className={cn("w-5 h-5", i < (state.mode === 'PK' ? (state.p1Lives || 0) : state.lives) ? "fill-white text-white" : "text-white/50")} />
              </div>
            ))}
            {state.mode === 'PK' && (
              <div className="bg-blue-600 px-4 py-1.5 rounded-xl border-2 border-white shadow-lg flex items-center justify-center">
                <span className="text-white font-black text-xl tabular-nums">{(state.p1Score || 0).toLocaleString()}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-lg italic tracking-tighter leading-none">
              {state.mode === 'PK' ? 'PLAYER 1' : 'TONE PILOT'}
            </span>
            <span className="text-white text-[10px] font-bold opacity-60 uppercase tracking-widest">
              {state.mode === 'PK' ? '玩家一' : '音调飞行员'}
            </span>
          </div>
        </div>

        {/* Center: Timer */}
        <div className="flex flex-col items-center">
          <div className="pointer-events-auto bg-black/40 backdrop-blur-md border-2 border-white/30 rounded-xl px-6 py-2 flex items-center gap-3 shadow-lg">
            <span className="text-white font-mono text-4xl font-bold tracking-tighter tabular-nums">
              {Math.floor(state.timeLeft / 60)}:{(state.timeLeft % 60).toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        
        {/* Right Side: Score & Pause (Solo) or P2 Stats (PK) */}
        <div className="flex items-start gap-4">
          {state.mode === 'PK' ? (
            <div className="flex flex-col items-end gap-3 text-right">
              <div className="flex gap-2 pointer-events-auto">
                <div className="bg-red-600 px-4 py-1.5 rounded-xl border-2 border-white shadow-lg flex items-center justify-center">
                  <span className="text-white font-black text-xl tabular-nums">{(state.p2Score || 0).toLocaleString()}</span>
                </div>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shadow-lg transition-all",
                      i < (state.p2Lives || 0) ? "bg-red-500 scale-110" : "bg-gray-400 opacity-50 grayscale"
                    )}
                  >
                    <Heart className={cn("w-5 h-5", i < (state.p2Lives || 0) ? "fill-white text-white" : "text-white/50")} />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-end">
                <span className="text-white font-black text-lg italic tracking-tighter leading-none">PLAYER 2</span>
                <span className="text-white text-[10px] font-bold opacity-60 uppercase tracking-widest">玩家二</span>
              </div>
              
              <button 
                onClick={() => setIsPaused(!isPaused)}
                className="w-12 h-12 bg-yellow-400 border-4 border-yellow-600 rounded-xl flex items-center justify-center shadow-lg hover:bg-yellow-300 transition-colors pointer-events-auto mt-2"
              >
                {isPaused ? <Play className="w-6 h-6 fill-yellow-800 text-yellow-800 ml-1" /> : <Pause className="w-6 h-6 fill-yellow-800 text-yellow-800" />}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-6 pointer-events-auto">
              <div className="flex flex-col items-end">
                  <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Score</div>
                  <div className="text-white text-4xl font-black tabular-nums drop-shadow-lg">
                    {state.score.toLocaleString()}
                  </div>
              </div>
              <button 
                onClick={() => setIsPaused(!isPaused)}
                className="w-14 h-14 bg-yellow-400 border-4 border-yellow-600 rounded-xl flex items-center justify-center shadow-lg hover:bg-yellow-300 transition-colors"
              >
                {isPaused ? <Play className="w-8 h-8 fill-yellow-800 text-yellow-800 ml-1" /> : <Pause className="w-8 h-8 fill-yellow-800 text-yellow-800" />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Game Content */}
      <div className={cn(
        "flex-1 flex",
        state.mode === 'PK' ? "flex-col md:flex-row" : ""
      )}>
        <Arena 
          id="1"
          gameState={state}
          currentWord={isTransitioning ? null : currentWord}
          currentSyllableIndex={state.mode === 'PK' ? p1SyllableIndex : currentSyllableIndex}
          onAnswer={(t) => handleAnswer(t, "1")}
          lang={lang}
          showSmoke={showSmoke}
          isCorrect={null}
        />
        {state.mode === 'PK' && (
          <Arena 
            id="2"
            gameState={state}
            currentWord={isTransitioning ? null : currentWord}
            currentSyllableIndex={p2SyllableIndex}
            onAnswer={(t) => handleAnswer(t, "2")}
            lang={lang}
            showSmoke={showSmoke}
            isCorrect={null}
          />
        )}
      </div>

      {/* Pause Modal */}
      <AnimatePresence>
        {isPaused && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/40 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <div className="bg-white p-12 rounded-[2rem] border border-white/50 flex flex-col gap-4 w-full max-w-sm shadow-2xl">
               <h2 className="text-3xl font-black text-center mb-4 text-slate-900 italic">PAUSED</h2>
               <button 
                 onClick={() => setIsPaused(false)}
                 className="flex items-center justify-center gap-3 p-4 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-400 transition-all border-b-4 border-emerald-700"
               >
                 <Play className="w-5 h-5 fill-current" /> RESUME
               </button>
               <button 
                 onClick={() => window.location.reload()}
                 className="flex items-center justify-center gap-3 p-4 bg-blue-500 text-white rounded-2xl font-bold hover:bg-blue-400 transition-all border-b-4 border-blue-700"
               >
                 <RotateCcw className="w-5 h-5" /> RESTART
               </button>
               <button 
                 onClick={onHome}
                 className="flex items-center justify-center gap-3 p-4 bg-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-300 transition-all border-b-4 border-slate-400"
               >
                 <Home className="w-5 h-5" /> EXIT MISSION
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes infinite-slide-slow {
          from { transform: translateX(100%); }
          to { transform: translateX(-200vw); }
        }
        .animate-infinite-slide-slow {
          animation: infinite-slide-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
};
