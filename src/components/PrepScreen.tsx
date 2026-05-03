import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Play } from 'lucide-react';
import { getLessonWords } from '../data/vocabulary';
import { Cloud } from './Cloud';
import { Language } from '../types';

interface PrepScreenProps {
  level: number;
  lesson: number;
  onStart: () => void;
  onBack: () => void;
  lang: Language;
}

export const PrepScreen: React.FC<PrepScreenProps> = ({ level, lesson, onStart, onBack, lang }) => {
  const words = getLessonWords(level, lesson);

  const t = {
    title: lang === 'en' ? 'FLIGHT PREP' : 'БЭЛТГЭЛ',
    subtitle: lang === 'en' ? 'Review the vocabulary before takeoff' : 'Нислэгийн өмнө үгсээ давтана уу',
    start: lang === 'en' ? 'COMMENCE' : 'ЭХЛЭХ',
    back: lang === 'en' ? 'BACK' : 'БУЦАХ'
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-sky-400 p-8 flex flex-col relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%)' }}
    >
      {/* Background Decor */}
      <Cloud className="absolute top-20 right-10 w-32 h-20" opacity={0.6} blur />
      <Cloud className="absolute bottom-40 left-10 w-48 h-32" opacity={0.3} blur />

      <div className="max-w-6xl mx-auto w-full flex flex-col h-full z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white bg-black/20 hover:bg-black/30 px-4 py-2 rounded-full border border-white/30 backdrop-blur-md transition-all font-bold w-fit mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>{t.back}</span>
        </button>

        <div className="mb-8">
          <h1 className="text-6xl font-black text-white italic tracking-tighter drop-shadow-lg">
            {t.title} <span className="text-blue-900/50">Y{level} L{lesson}</span>
          </h1>
          <div className="bg-white/30 backdrop-blur-md text-blue-900 px-4 py-1 rounded-lg font-bold text-sm inline-block mt-2 border border-white/40">
            {t.subtitle}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto mb-6 pr-4 custom-scrollbar">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {words.map((word, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border-[4px] border-white/50 p-6 rounded-[2.5rem] flex flex-col gap-2 relative overflow-hidden shadow-lg group/card"
              >
                <div className="absolute -top-2 -right-2 opacity-5">
                   <div className="w-10 h-10 rounded-full border-2 border-blue-400" />
                </div>
                <div className="flex flex-col items-center text-center relative z-10">
                  <p className="text-blue-600 font-black text-2xl italic tracking-tight leading-tight">{word.pinyin}</p>
                  <span className="text-5xl font-black text-slate-800 leading-tight my-1">{word.character}</span>
                  <p className="text-slate-500 text-base uppercase tracking-wider font-black font-mono leading-tight max-w-full truncate px-1">
                    {word.translation[lang]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pb-12 mt-4">
          <motion.button
            whileTap={{ translateY: 4 }}
            onClick={onStart}
            className="px-20 py-8 rounded-3xl bg-yellow-500 text-white font-black text-3xl border-b-[10px] border-yellow-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-yellow-400 transition-all italic tracking-tighter flex flex-col items-center gap-1"
          >
            <div className="flex items-center gap-4">
              <Play className="w-8 h-8 fill-current" />
              <span>{t.start}</span>
            </div>
            <span className="text-sm font-bold opacity-80 uppercase tracking-[0.3em] mt-1 -mb-1">Ready for Mission</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
