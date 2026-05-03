import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Cloud } from './Cloud';
import { Language } from '../types';
import { cn } from '../lib/utils';

interface SelectionScreenProps {
  onBack: () => void;
  onSelect: (level: number, lesson: number) => void;
  lang: Language;
}

export const SelectionScreen: React.FC<SelectionScreenProps> = ({ onBack, onSelect, lang }) => {
  const [level, setLevel] = useState(1);
  const [lesson, setLesson] = useState(1);

  const t = {
    level: lang === 'en' ? 'SELECT LEVEL' : 'ТҮВШИН СОНГОХ',
    lesson: lang === 'en' ? 'SELECT MISSION' : 'ДААЛГАВАР СОНГОХ',
    review: lang === 'en' ? 'Review All' : 'Бүгдийг давтах',
    start: lang === 'en' ? 'ENGAGE ENGINE' : 'ХӨДӨЛГҮҮР ЭХЛҮҮЛЭХ',
    back: lang === 'en' ? 'BACK' : 'БУЦАХ'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen flex flex-col p-8 bg-sky-400 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%)' }}
    >
      {/* Background Decor */}
      <Cloud className="absolute top-10 right-20 w-48 h-28" opacity={0.6} blur />
      <Cloud className="absolute bottom-10 left-10 w-32 h-20" opacity={0.4} blur />
      
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-white bg-black/20 hover:bg-black/30 px-4 py-2 rounded-full border border-white/30 backdrop-blur-md transition-all font-bold w-fit mb-8 z-10"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>{t.back}</span>
      </button>

      <div className="flex-1 flex flex-col items-center justify-center -mt-8">
        <div className="max-w-6xl w-full space-y-12 z-10 px-4">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-8 bg-white/40 rounded-full" />
              <h2 className="text-4xl font-black text-white italic tracking-tighter drop-shadow-md">{t.level}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6].map((l) => (
                  <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className={cn(
                    "py-5 rounded-2xl font-black border-b-[8px] transition-all relative overflow-hidden text-lg",
                    level === l 
                      ? "bg-yellow-500 border-yellow-700 text-white scale-110 shadow-2xl shadow-yellow-900/30" 
                      : "bg-white/60 border-white/30 text-blue-900 hover:bg-white/80"
                  )}
                >
                  YCT {l}
                  {level === l && <div className="absolute top-0 right-0 bg-white/20 p-1 rounded-bl-lg">★</div>}
                </button>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-8 bg-white/40 rounded-full" />
              <h2 className="text-4xl font-black text-white italic tracking-tighter drop-shadow-md">{t.lesson}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {Array.from({ length: (level === 5 || level === 6) ? 15 : 12 }).map((_, i) => {
                const lNum = i + 1;
                const isReview = (level === 5 || level === 6) ? lNum === 15 : lNum === 12;
                return (
                  <button
                    key={lNum}
                    onClick={() => setLesson(lNum)}
                    className={cn(
                      "py-6 rounded-2xl font-black border-b-[8px] transition-all flex flex-col items-center justify-center shadow-lg",
                      lesson === lNum 
                        ? "bg-purple-500 border-purple-700 text-white scale-110 shadow-2xl shadow-purple-900/40" 
                        : "bg-white/60 border-white/30 text-blue-900 hover:bg-white/80"
                    )}
                  >
                    <span className="text-2xl">{isReview ? t.review : lNum < 10 ? `0${lNum}` : lNum}</span>
                    <div className="text-[12px] opacity-70 uppercase tracking-widest leading-none mt-1 font-bold">{isReview ? "Review" : "Mission"}</div>
                  </button>
                );
              })}
            </div>
          </section>

          <div className="pt-8 flex justify-center">
            <motion.button
              whileTap={{ translateY: 4 }}
              onClick={() => onSelect(level, lesson)}
              className="px-20 py-8 rounded-[2rem] bg-yellow-500 text-white font-black text-3xl border-b-[10px] border-yellow-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-yellow-400 transition-all italic tracking-tighter flex items-center gap-6"
            >
              <div className="w-10 h-10 rounded-full border-4 border-white flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              {t.start}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
