import React from 'react';
import { motion } from 'motion/react';
import { Cloud } from './Cloud';
import { GameMode, Language } from '../types';
import { Play, Users, Infinity, Info, Globe, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface StartScreenProps {
  onStart: (mode: GameMode) => void;
  onToggleLang: () => void;
  lang: Language;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart, onToggleLang, lang }) => {
  const content = {
    en: {
      title: 'TONE PILOT',
      subtitle: 'Master Chinese Tones in Flight',
      solo: 'SOLO MODE',
      pk: 'PK BATTLE',
      endless: 'ENDLESS',
      intro: 'INTRODUCTION',
    },
    mn: {
      title: 'ДУУТ НИГЭГЧ',
      subtitle: 'Нислэгийн үед Хятад хэлний дуудлага сурах',
      solo: 'ГАНЦААРЧИЛСАН',
      pk: 'ТУЛААН',
      endless: 'ХЯЗГААРГҮЙ',
      intro: 'ЗААВАР',
    }
  };

  const t = content[lang];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center min-h-[100dvh] overflow-x-hidden relative font-sans select-none"
      style={{ background: 'linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%)' }}
    >
      {/* Background Decor */}
      <Cloud className="absolute top-10 left-10 w-24 h-16 md:w-32 md:h-20" opacity={0.6} blur />
      <Cloud className="absolute top-32 right-10 w-32 h-20 md:w-48 md:h-28" opacity={0.4} blur />
      <Cloud className="absolute bottom-32 left-20 w-24 h-16 md:w-40 md:h-24" opacity={0.5} />

      <div className="absolute top-4 md:top-8 right-4 md:right-8 z-50">
        <button 
          onClick={onToggleLang}
          className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-black/20 hover:bg-black/30 text-white rounded-full border border-white/30 backdrop-blur-md transition-all font-bold text-sm"
        >
          <Globe className="w-4 h-4" />
          <span>{lang === 'en' ? 'ENGLISH' : 'Монгол'}</span>
        </button>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl px-4 py-8 md:py-12 z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center mb-6 md:mb-12"
        >
          <h1 className="text-[clamp(3.5rem,12vh,8rem)] font-black tracking-tighter text-white drop-shadow-[0_8px_0_rgba(15,23,42,0.2)] leading-[0.9]">
            {t.title}
          </h1>
          <div className="text-[clamp(1.25rem,4vh,2.5rem)] font-black tracking-[0.3em] text-white/90 mt-2 drop-shadow-md">
            音调飞行员
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl">
          <MenuButton 
            icon={<Play className="w-5 h-5 md:w-6 md:h-6" />}
            label={t.solo}
            color="cyan"
            onClick={() => onStart('SOLO')}
          />
          <MenuButton 
            icon={<Users className="w-5 h-5 md:w-6 md:h-6" />}
            label={t.pk}
            color="purple"
            onClick={() => onStart('PK')}
          />
          <MenuButton 
            icon={<Infinity className="w-5 h-5 md:w-6 md:h-6" />}
            label={t.endless}
            color="emerald"
            onClick={() => onStart('ENDLESS')}
          />
          <MenuButton 
            icon={<Info className="w-5 h-5 md:w-6 md:h-6" />}
            label={t.intro}
            color="slate"
            onClick={() => onStart('INTRO')}
          />
        </div>

        <div className="bg-black/10 backdrop-blur-sm text-white/60 px-5 py-2 rounded-full font-bold tracking-widest mt-6 md:mt-10 border border-white/10 text-[10px] md:text-xs">
          {t.subtitle}
        </div>
      </main>

      <footer className="w-full py-4 md:py-6 flex justify-center sticky bottom-0 pointer-events-none">
        <div className="text-slate-800/40 text-[10px] font-black tracking-widest">
          PILOT ENGINE v2.0 // EST 2026
        </div>
      </footer>
    </motion.div>

  );
};

interface MenuButtonProps {
  icon: React.ReactNode;
  label: string;
  color: 'cyan' | 'purple' | 'emerald' | 'slate';
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ icon, label, color, onClick }) => {
  const themes = {
    cyan: "bg-blue-500 border-blue-700 hover:bg-blue-400 shadow-blue-900/20",
    purple: "bg-purple-500 border-purple-700 hover:bg-purple-400 shadow-purple-900/20",
    emerald: "bg-emerald-500 border-emerald-700 hover:bg-emerald-400 shadow-emerald-900/20",
    slate: "bg-slate-500 border-slate-700 hover:bg-slate-400 shadow-slate-900/20",
  };

  return (
    <motion.button
      whileTap={{ translateY: 4 }}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl border-b-[6px] md:border-b-[8px] text-white transition-all group relative overflow-hidden",
        themes[color]
      )}
    >
      <div className="bg-white/20 p-2 md:p-3 rounded-lg md:rounded-xl backdrop-blur-md">
        {icon}
      </div>
      <span className="text-xl md:text-2xl font-black italic tracking-tight">{label}</span>
      <div className="absolute top-0 right-0 p-2 opacity-10">
        <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
      </div>
    </motion.button>
  );
};
