import React from 'react';
import { motion } from 'motion/react';
import { Home, RotateCcw, ChevronRight, CheckCircle2, XCircle } from 'lucide-react';
import { Cloud } from './Cloud';
import { GameState, Language, GameHistoryItem } from '../types';
import { cn } from '../lib/utils';

interface ResultsScreenProps {
  gameState: GameState;
  onRestart: () => void;
  onHome: () => void;
  onNext: () => void;
  lang: Language;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ gameState, onRestart, onHome, onNext, lang }) => {
  const { history, score, totalWords } = gameState;
  const attemptedTotal = history.length;
  const correctCount = history.filter(h => h.isCorrect).length;
  const incorrectCount = history.filter(h => !h.isCorrect).length;
  const missionTotal = totalWords || attemptedTotal;
  const accuracy = missionTotal > 0 ? Math.round((correctCount / missionTotal) * 100) : 0;

  // Split calculations for PK mode
  const p1History = history.filter(h => h.player === '1');
  const p2History = history.filter(h => h.player === '2');

  const p1Correct = p1History.filter(h => h.isCorrect).length;
  const p1Incorrect = p1History.filter(h => !h.isCorrect).length;
  const p1Total = p1History.length;
  const p1Accuracy = p1Total > 0 ? Math.round((p1Correct / p1Total) * 100) : 0;

  const p2Correct = p2History.filter(h => h.isCorrect).length;
  const p2Incorrect = p2History.filter(h => !h.isCorrect).length;
  const p2Total = p2History.length;
  const p2Accuracy = p2Total > 0 ? Math.round((p2Correct / p2Total) * 100) : 0;

  const toneStats = [1, 2, 3, 4].map(tone => {
    const toneAttempts = history.filter(h => h.correctTone === tone);
    const correctAttempts = toneAttempts.filter(h => h.isCorrect).length;
    return {
      name: ['—', '/', 'v', '\\'][tone - 1],
      tone,
      accuracy: toneAttempts.length > 0 ? Math.round((correctAttempts / toneAttempts.length) * 100) : 0,
      correct: correctAttempts,
      incorrect: toneAttempts.length - correctAttempts
    };
  });

  const t = {
    score: lang === 'en' ? 'MISSION SCORE' : 'НИЙТ ОНОО',
    p1Score: lang === 'en' ? 'PLAYER 1' : 'ТОГЛОГЧ 1',
    p2Score: lang === 'en' ? 'PLAYER 2' : 'ТОГЛОГЧ 2',
    winner: lang === 'en' ? 'WINNER' : 'ЯЛАГЧ',
    draw: lang === 'en' ? "IT'S A DRAW!" : 'ТЭНЦЛЭЭ!',
    accuracy: lang === 'en' ? 'Accuracy' : 'Нарийн',
    correct: lang === 'en' ? 'Confirmed' : 'Зөв',
    incorrect: lang === 'en' ? 'Deflections' : 'Алдаа',
    analysis: lang === 'en' ? 'Tone Performance Scan' : 'Дуудлагын гүйцэтгэлийн анализ',
    history: lang === 'en' ? 'Mission Log' : 'НИСЛЭГИЙН БҮРТГЭЛ',
    restart: lang === 'en' ? 'Rethink' : 'Дахин',
    home: lang === 'en' ? 'Base' : 'Нүүр',
    next: lang === 'en' ? 'Proceed' : 'Дараагийн',
  };

  const getUniqueHistory = (playerHistory: GameHistoryItem[]) => {
    return Array.from(
      playerHistory.reduce((acc, current) => {
        const existing = acc.get(current.character);
        if (!existing || (!existing.isCorrect && current.isCorrect) || (existing.isCorrect === current.isCorrect)) {
          acc.set(current.character, current);
        }
        return acc;
      }, new Map<string, GameHistoryItem>()).values()
    ).sort((a, b) => (a.isCorrect === b.isCorrect ? 0 : a.isCorrect ? 1 : -1));
  };

  const p1UniqueHistory = getUniqueHistory(p1History);
  const p2UniqueHistory = getUniqueHistory(p2History);
  const soloUniqueHistory = getUniqueHistory(history);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-sky-400 p-8 flex flex-col items-center custom-scrollbar overflow-y-auto"
      style={{ background: 'linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%)' }}
    >
      <div className="w-full max-w-4xl space-y-6 pb-32 z-10">
        {/* Top Summary Block */}
        <section className="bg-white border-[4px] border-white/50 rounded-[1.5rem] shadow-xl overflow-hidden max-w-2xl mx-auto">
          {gameState.mode === 'PK' ? (
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100">
               <div className={cn(
                 "md:w-1/2 p-8 flex flex-col items-center justify-center transition-all",
                 (gameState.p1Score || 0) >= (gameState.p2Score || 0) ? "bg-white" : "bg-slate-50 opacity-60"
               )}>
                 <h2 className="text-[10px] font-mono tracking-[0.2em] text-blue-500 mb-2 font-black uppercase flex items-center gap-2">
                    {t.p1Score} {(gameState.p1Score || 0) > (gameState.p2Score || 0) && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                 </h2>
                 <div className="text-[5rem] font-black text-slate-900 italic tracking-tighter leading-none">
                   {(gameState.p1Score || 0).toLocaleString()}
                 </div>

                 {/* Separate Statistics for Player 1 */}
                 <div className="grid grid-cols-3 gap-2 mt-6 w-full max-w-xs">
                    <div className="bg-slate-100/70 p-2 rounded-xl text-center">
                      <div className="text-lg font-black text-blue-500 italic leading-none">{p1Accuracy}%</div>
                      <div className="text-[7px] font-mono text-slate-400 uppercase tracking-widest mt-1">{t.accuracy}</div>
                    </div>
                    <div className="bg-slate-100/70 p-2 rounded-xl text-center">
                      <div className="text-lg font-black text-emerald-500 italic leading-none">{p1Correct}</div>
                      <div className="text-[7px] font-mono text-slate-400 uppercase tracking-widest mt-1">{lang === 'en' ? 'OK' : 'Зөв'}</div>
                    </div>
                    <div className="bg-slate-100/70 p-2 rounded-xl text-center">
                      <div className="text-lg font-black text-red-500 italic leading-none">{p1Incorrect}</div>
                      <div className="text-[7px] font-mono text-slate-400 uppercase tracking-widest mt-1">{lang === 'en' ? 'ERR' : 'Алдаа'}</div>
                    </div>
                 </div>
               </div>

               <div className={cn(
                 "md:w-1/2 p-8 flex flex-col items-center justify-center transition-all",
                 (gameState.p2Score || 0) >= (gameState.p1Score || 0) ? "bg-white" : "bg-slate-50 opacity-60"
               )}>
                 <h2 className="text-[10px] font-mono tracking-[0.2em] text-red-500 mb-2 font-black uppercase flex items-center gap-2">
                    {t.p2Score} {(gameState.p2Score || 0) > (gameState.p1Score || 0) && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                 </h2>
                 <div className="text-[5rem] font-black text-slate-900 italic tracking-tighter leading-none">
                   {(gameState.p2Score || 0).toLocaleString()}
                 </div>

                 {/* Separate Statistics for Player 2 */}
                 <div className="grid grid-cols-3 gap-2 mt-6 w-full max-w-xs">
                    <div className="bg-slate-100/70 p-2 rounded-xl text-center">
                      <div className="text-lg font-black text-red-500 italic leading-none">{p2Accuracy}%</div>
                      <div className="text-[7px] font-mono text-slate-400 uppercase tracking-widest mt-1">{t.accuracy}</div>
                    </div>
                    <div className="bg-slate-100/70 p-2 rounded-xl text-center">
                      <div className="text-lg font-black text-emerald-500 italic leading-none">{p2Correct}</div>
                      <div className="text-[7px] font-mono text-slate-400 uppercase tracking-widest mt-1">{lang === 'en' ? 'OK' : 'Зөв'}</div>
                    </div>
                    <div className="bg-slate-100/70 p-2 rounded-xl text-center">
                      <div className="text-lg font-black text-red-400 italic leading-none">{p2Incorrect}</div>
                      <div className="text-[7px] font-mono text-slate-400 uppercase tracking-widest mt-1">{lang === 'en' ? 'ERR' : 'Алдаа'}</div>
                    </div>
                 </div>
               </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-100 w-full h-full relative z-20">
               <div className="sm:w-1/2 p-6 flex flex-col items-center justify-center sm:bg-slate-50/50">
                  <h2 className="text-[8px] font-mono tracking-[0.4em] text-blue-500 mb-1 font-black uppercase">{t.score}</h2>
                  <div className="text-[4rem] font-black text-slate-900 italic tracking-tighter leading-none drop-shadow-sm">
                    {score.toLocaleString()}
                  </div>
               </div>

               <div className="sm:w-1/2 p-6 grid grid-cols-2 gap-2">
                  <ResultStat label={t.accuracy} value={`${accuracy}%`} color="text-cyan-500" />
                  <ResultStat label={t.correct} value={correctCount} color="text-emerald-500" />
                  <ResultStat label={t.incorrect} value={incorrectCount} color="text-red-500" />
                  <ResultStat label="Rank" value={accuracy > 90 ? "ACE" : accuracy > 70 ? "PRO" : "REC"} color="text-yellow-500" />
               </div>
            </div>
          )}
        </section>

        {/* Tone Statistics Grid */}
        <section className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
          {toneStats.map((stat, i) => (
            <div key={i} className="bg-white/30 backdrop-blur-lg rounded-2xl p-5 border border-white/30 flex flex-col items-center shadow-lg">
              <span className="text-4xl font-black text-white italic leading-none mb-2">{stat.name}</span>
              <span className="text-sm font-black text-cyan-100 tracking-wider">{stat.accuracy}%</span>
            </div>
          ))}
        </section>

        {/* Log Table */}
        <section className="space-y-6">
          <h3 className="text-3xl font-black text-white italic tracking-tighter flex items-center gap-4">
             <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-sm not-italic">L</div>
             {t.history}
          </h3>

          {gameState.mode === 'PK' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Player 1 Log */}
              <div className="space-y-3">
                <h4 className="text-lg font-black text-blue-500 italic drop-shadow-sm flex items-center gap-2">
                   <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
                   {lang === 'en' ? 'P1 FLIGHT LOG' : '玩家一 飞线日志'}
                </h4>
                <div className="bg-black/20 backdrop-blur-md p-2 rounded-[2rem] border border-white/10">
                  <div className="max-h-[320px] overflow-y-auto pr-2 custom-scrollbar grid gap-3">
                    {p1UniqueHistory.length === 0 ? (
                      <div className="text-center py-12 text-white/40 italic text-sm">
                        {lang === 'en' ? 'No recorded maneuvers' : '暂无飞行动作记录'}
                      </div>
                    ) : (
                      p1UniqueHistory.map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.03 }}
                          className={cn(
                            "flex items-center gap-4 p-4 rounded-2xl border-b-[4px] transition-all",
                            item.isCorrect 
                              ? "bg-emerald-500 border-emerald-700 text-white" 
                              : "bg-red-500 border-red-700 text-white"
                          )}
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                            {item.isCorrect ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                          </div>
                          <div className="flex-1 flex items-center justify-between gap-3 overflow-hidden">
                            <div className="text-2xl font-black italic truncate">{item.character}</div>
                            <div className="font-mono text-white/80 text-sm tracking-wider truncate pl-1">
                              {item.pinyin}
                            </div>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Player 2 Log */}
              <div className="space-y-3">
                <h4 className="text-lg font-black text-red-500 italic drop-shadow-sm flex items-center gap-2">
                   <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                   {lang === 'en' ? 'P2 FLIGHT LOG' : '玩家二 飞线日志'}
                </h4>
                <div className="bg-black/20 backdrop-blur-md p-2 rounded-[2rem] border border-white/10">
                  <div className="max-h-[320px] overflow-y-auto pr-2 custom-scrollbar grid gap-3">
                    {p2UniqueHistory.length === 0 ? (
                      <div className="text-center py-12 text-white/40 italic text-sm">
                        {lang === 'en' ? 'No recorded maneuvers' : '暂无飞行动作记录'}
                      </div>
                    ) : (
                      p2UniqueHistory.map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.03 }}
                          className={cn(
                            "flex items-center gap-4 p-4 rounded-2xl border-b-[4px] transition-all",
                            item.isCorrect 
                              ? "bg-emerald-500 border-emerald-700 text-white" 
                              : "bg-red-500 border-red-700 text-white"
                          )}
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                            {item.isCorrect ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                          </div>
                          <div className="flex-1 flex items-center justify-between gap-3 overflow-hidden">
                            <div className="text-2xl font-black italic truncate">{item.character}</div>
                            <div className="font-mono text-white/80 text-sm tracking-wider truncate pl-1">
                              {item.pinyin}
                            </div>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-black/20 backdrop-blur-md p-2 rounded-[2rem] border border-white/10">
              <div className="max-h-[320px] overflow-y-auto pr-2 custom-scrollbar grid gap-3">
                {soloUniqueHistory.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className={cn(
                      "flex items-center gap-6 p-5 rounded-2xl border-b-[6px] transition-all",
                      item.isCorrect 
                        ? "bg-emerald-500 border-emerald-700 text-white" 
                        : "bg-red-500 border-red-700 text-white"
                    )}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 shadow-inner">
                      {item.isCorrect ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                      <div className="text-3xl font-black italic">{item.character}</div>
                      <div className="font-mono text-white/70 text-lg tracking-widest">
                        Pinyin: <span className="text-white font-black lowercase">{item.pinyin}</span>
                      </div>
                      <div className="text-lg font-bold opacity-60 truncate uppercase">{item.translation}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Navigation Footer */}
      <div className="fixed bottom-0 inset-x-0 p-8 flex justify-center gap-6 bg-gradient-to-t from-white via-white to-transparent z-50">
        <button 
          onClick={onHome}
          className="flex items-center justify-center w-48 py-4 bg-slate-700 border-b-8 border-slate-900 rounded-2xl text-white font-black hover:bg-slate-600 transition-all uppercase tracking-widest italic"
        >
          <Home className="w-5 h-5 mr-3" /> {t.home}
        </button>
        <button 
          onClick={onRestart}
          className="flex items-center justify-center w-48 py-4 bg-blue-500 border-b-8 border-blue-900 rounded-2xl text-white font-black hover:bg-blue-400 transition-all uppercase tracking-widest italic"
        >
          <RotateCcw className="w-5 h-5 mr-3" /> {t.restart}
        </button>
        <button 
          onClick={onNext}
          className="flex items-center justify-center px-12 py-4 bg-yellow-500 border-b-8 border-yellow-800 rounded-2xl text-white font-black hover:bg-yellow-400 transition-all uppercase tracking-widest italic shadow-xl"
        >
          {t.next} <ChevronRight className="w-6 h-6 ml-1" />
        </button>
      </div>
    </motion.div>
  );
};

const ResultStat: React.FC<{ label: string, value: string | number, color: string }> = ({ label, value, color }) => (
  <div className="bg-slate-100/50 p-4 rounded-xl flex flex-col items-center justify-center text-center">
    <div className={cn("text-3xl font-black italic mb-0.5", color)}>{value}</div>
    <div className="text-[8px] font-mono text-slate-400 uppercase tracking-[0.2em]">{label}</div>
  </div>
);
