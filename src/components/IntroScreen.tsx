import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Clock, Target, Rocket, Heart } from 'lucide-react';
import { Cloud } from './Cloud';
import { Language } from '../types';

interface IntroScreenProps {
  onBack: () => void;
  lang: Language;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: 'FLIGHT MANUAL',
      back: 'BACK',
      howTo: 'Mission Briefing',
      rule1: 'Listen to the word and identify the Pinyin shape.',
      rule2: 'Use the 3D controls to navigate the plane safely.',
      rule3: 'Master tones: 0 (Stay), 1 (Level), 2 (Rise), 3 (Dip-Rise), 4 (Fall).',
      modes: 'Training Modes',
      solo: 'Solo: Survival mode. 60s fuel. Accuracy is key.',
      endless: 'Endless: Infinite flight. Correct moves refill fuel.',
      combos: 'Superstate: 3 correct moves trigger Supersonic x2 multiplier.',
    },
    mn: {
      title: 'НИСЛЭГИЙН ЗААВАР',
      back: 'БУЦАХ',
      howTo: 'Даалгаврын заавар',
      rule1: 'Үгийг сонсож, Пиньинийг харна уу.',
      rule2: 'Нисэх онгоцоо аюулгүй залуурдахын тулд 3D удирдлагыг ашиглана уу.',
      rule3: 'Өргөлтүүд: 0 (Түвшин), 1 (Шулуун), 2 (Өгсөх), 3 (Доошоо-Дээшээ), 4 (Буух).',
      modes: 'Сургалтын горимууд',
      solo: 'Ганцаарчилсан: Амьд үлдэх горим. 60 сек шатахуун.',
      endless: 'Хязгааргүй: Хязгааргүй нислэг. Зөв хариулт шатахуун нэмнэ.',
      combos: 'Супер төлөв: Дараалсан 3 зөв хариулт Supersonic x2 идэвхжүүлнэ.',
    }
  };

  const t = content[lang];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8 flex flex-col items-center relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%)' }}
    >
      <Cloud className="absolute top-20 left-10 w-32 h-20" opacity={0.8} blur />
      <Cloud className="absolute middle-40 right-10 w-40 h-24" opacity={0.5} blur />

      <div className="w-full max-w-4xl z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white bg-black/20 hover:bg-black/30 px-4 py-2 rounded-full border border-white/30 backdrop-blur-md transition-all font-bold w-fit mb-12"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>{t.back}</span>
        </button>

        <h1 className="text-6xl font-black text-white mb-12 text-center italic tracking-tighter drop-shadow-lg">
          {t.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-slate-900 border-[6px] border-slate-700 p-8 rounded-[2.5rem] shadow-2xl">
            <h2 className="text-2xl font-black flex items-center gap-3 mb-6 text-cyan-400 italic italic">
              <Target className="w-6 h-6" /> {t.howTo}
            </h2>
            <ul className="space-y-6 text-slate-300 font-bold uppercase tracking-wider text-sm">
              <li className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 font-mono">01</div>
                {t.rule1}
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 font-mono">02</div>
                {t.rule2}
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 font-mono">03</div>
                {t.rule3}
              </li>
            </ul>
          </section>

          <div className="space-y-8">
            <section className="bg-slate-900 border-[6px] border-slate-700 p-8 rounded-[2.5rem] shadow-2xl">
              <h2 className="text-2xl font-black flex items-center gap-3 mb-6 text-purple-400 italic">
                <Rocket className="w-6 h-6" /> {t.modes}
              </h2>
              <div className="space-y-4">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <p className="text-slate-300 text-sm font-bold leading-relaxed">{t.solo}</p>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <p className="text-slate-300 text-sm font-bold leading-relaxed">{t.endless}</p>
                </div>
              </div>
            </section>

            <section className="bg-emerald-500 border-b-[8px] border-emerald-700 p-8 rounded-[2.5rem] shadow-2xl">
              <div className="flex items-center gap-4 text-white">
                <Rocket className="w-10 h-10 animate-bounce" />
                <div>
                  <h3 className="font-black italic text-xl tracking-tighter">COMBO SYSTEM</h3>
                  <p className="text-emerald-100 text-sm font-bold">{t.combos}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
