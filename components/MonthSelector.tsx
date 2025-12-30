'use client';

import { motion } from 'framer-motion';
import { monthsList } from '@/lib/calendar-2026';

interface MonthSelectorProps {
  onSelect: (month: string) => void;
  isLoading?: boolean;
}

const monthColors: Record<string, string> = {
  janeiro: 'from-blue-500 to-cyan-500',
  fevereiro: 'from-purple-500 to-pink-500',
  marco: 'from-pink-500 to-rose-500',
  abril: 'from-green-500 to-emerald-500',
  maio: 'from-yellow-500 to-orange-500',
  junho: 'from-red-500 to-orange-500',
  julho: 'from-amber-500 to-yellow-500',
  agosto: 'from-violet-500 to-purple-500',
  setembro: 'from-yellow-400 to-amber-500',
  outubro: 'from-pink-400 to-rose-500',
  novembro: 'from-blue-400 to-indigo-500',
  dezembro: 'from-red-400 to-rose-500',
};

const monthIcons: Record<string, string> = {
  janeiro: '🧠',
  fevereiro: '💜',
  marco: '👩',
  abril: '💙',
  maio: '🧡',
  junho: '🩸',
  julho: '💛',
  agosto: '💜',
  setembro: '💛',
  outubro: '🎀',
  novembro: '💙',
  dezembro: '🔴',
};

export default function MonthSelector({ onSelect, isLoading }: MonthSelectorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6 sm:mb-8"
      >
        <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs font-medium tracking-wider text-emerald-400 uppercase bg-emerald-500/10 rounded-full">
          Última etapa
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
          Escolha o mês
        </h2>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg px-4">
          Selecione o mês para gerar suas campanhas
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4"
      >
        {monthsList.map((month, index) => (
          <motion.button
            key={month.key}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.03 }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => !isLoading && onSelect(month.key)}
            disabled={isLoading}
            className={`relative group p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${monthColors[month.key]} 
              shadow-lg transition-all duration-300 overflow-hidden
              ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-2xl cursor-pointer active:scale-95'}
            `}
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${monthColors[month.key]} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`} />
            
            {/* Content */}
            <div className="relative z-10">
              <span className="block text-xl sm:text-2xl md:text-3xl mb-0.5 sm:mb-1">
                {monthIcons[month.key]}
              </span>
              <span className="block text-sm sm:text-lg md:text-xl font-bold text-white">
                {month.abbr}
              </span>
              <span className="hidden sm:block text-xs text-white/70 mt-0.5 sm:mt-1">
                {month.name}
              </span>
            </div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.button>
        ))}
      </motion.div>

      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 sm:mt-8 text-center px-4"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-slate-800 rounded-xl sm:rounded-2xl">
            <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 sm:border-3 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm sm:text-lg text-white font-medium">
              Gerando campanhas...
            </span>
          </div>
          <p className="text-slate-400 mt-2 sm:mt-3 text-xs sm:text-sm">
            Isso pode levar alguns segundos
          </p>
        </motion.div>
      )}
    </div>
  );
}
