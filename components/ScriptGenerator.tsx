'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScriptData {
  title: string;
  duration: string;
  format: string;
  hook: {
    timing: string;
    content: string;
  };
  body: Array<{
    timing: string;
    visual: string;
    audio: string;
    text: string;
  }>;
  cta: {
    timing: string;
    content: string;
  };
  technicalTips: string[];
  musicSuggestion: string;
  fullScript: string;
}

interface ScriptGeneratorProps {
  campaignTheme: string;
  business: string;
  audience: string;
  onGenerate: (format: 'appearing' | 'voiceover' | 'textonly') => Promise<ScriptData | null>;
}

type FormatType = 'appearing' | 'voiceover' | 'textonly';

const formats = [
  {
    id: 'appearing' as FormatType,
    name: 'Aparecendo e Falando',
    icon: '🎤',
    description: 'Você aparece no vídeo e fala',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'voiceover' as FormatType,
    name: 'Voz em Off',
    icon: '🎙️',
    description: 'Sua voz narra o vídeo',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 'textonly' as FormatType,
    name: 'Texto na Tela',
    icon: '📝',
    description: 'Apenas texto, sem falar',
    color: 'from-orange-500 to-red-500'
  }
];

export default function ScriptGenerator({
  campaignTheme,
  business,
  audience,
  onGenerate
}: ScriptGeneratorProps) {
  const [selectedFormat, setSelectedFormat] = useState<FormatType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [script, setScript] = useState<ScriptData | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!selectedFormat) return;
    
    setIsLoading(true);
    try {
      const result = await onGenerate(selectedFormat);
      setScript(result);
    } catch (error) {
      console.error('Error generating script:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyFullScript = () => {
    if (script?.fullScript) {
      navigator.clipboard.writeText(script.fullScript);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6 sm:mb-8"
      >
        <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs font-medium tracking-wider text-violet-400 uppercase bg-violet-500/10 rounded-full">
          Gerador de Roteiros
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
          Roteiro de 30 segundos
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Campanha: <span className="text-white font-medium">{campaignTheme}</span>
        </p>
      </motion.div>

      {/* Format Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {formats.map((format) => (
          <motion.button
            key={format.id}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedFormat(format.id)}
            className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl text-left transition-all duration-300 border-2 ${
              selectedFormat === format.id
                ? `bg-gradient-to-br ${format.color} border-transparent shadow-lg`
                : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
            }`}
          >
            <span className="text-2xl sm:text-3xl block mb-2 sm:mb-3">{format.icon}</span>
            <h3 className={`font-bold text-base sm:text-lg mb-0.5 sm:mb-1 ${
              selectedFormat === format.id ? 'text-white' : 'text-slate-200'
            }`}>
              {format.name}
            </h3>
            <p className={`text-xs sm:text-sm ${
              selectedFormat === format.id ? 'text-white/80' : 'text-slate-400'
            }`}>
              {format.description}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Generate Button */}
      <AnimatePresence>
        {selectedFormat && !script && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center mb-6 sm:mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGenerate}
              disabled={isLoading}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl transition-all duration-300 ${
                isLoading
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Gerando...
                </span>
              ) : (
                '🎬 Gerar Roteiro'
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Generated Script */}
      <AnimatePresence>
        {script && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Script Header */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-violet-900/50 to-purple-900/50 rounded-xl sm:rounded-2xl border border-violet-700/50">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{script.title}</h3>
                  <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-violet-500/20 text-violet-400 rounded-full">
                      ⏱️ {script.duration}
                    </span>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-500/20 text-purple-400 rounded-full">
                      🎬 {script.format}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setScript(null)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-700 text-slate-300 rounded-lg sm:rounded-xl hover:bg-slate-600 transition-colors text-sm"
                >
                  ← Voltar
                </button>
              </div>
            </div>

            {/* Hook */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-pink-900/30 to-red-900/30 border border-pink-700/50 rounded-xl sm:rounded-2xl">
              <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                <span className="px-2 py-0.5 sm:py-1 bg-pink-500/20 text-pink-400 text-xs rounded-full">
                  {script.hook.timing}
                </span>
                <h4 className="text-pink-400 font-bold text-sm sm:text-base">🎣 HOOK</h4>
              </div>
              <p className="text-white text-lg sm:text-xl font-medium">{script.hook.content}</p>
            </div>

            {/* Body */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-emerald-400 font-bold text-base sm:text-lg">📽️ Desenvolvimento</h4>
              {script.body.map((section, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 bg-slate-800/50 rounded-lg sm:rounded-xl border border-slate-700/50"
                >
                  <span className="inline-block px-2 py-0.5 sm:py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full mb-2 sm:mb-3">
                    {section.timing}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div>
                      <span className="text-slate-500 text-xs uppercase tracking-wider">Visual</span>
                      <p className="text-slate-300 mt-1 text-sm sm:text-base">{section.visual}</p>
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs uppercase tracking-wider">Áudio</span>
                      <p className="text-slate-300 mt-1 text-sm sm:text-base">{section.audio}</p>
                    </div>
                    {section.text && (
                      <div>
                        <span className="text-slate-500 text-xs uppercase tracking-wider">Texto</span>
                        <p className="text-slate-300 mt-1 text-sm sm:text-base">{section.text}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-700/50 rounded-xl sm:rounded-2xl">
              <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                <span className="px-2 py-0.5 sm:py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                  {script.cta.timing}
                </span>
                <h4 className="text-emerald-400 font-bold text-sm sm:text-base">👆 CTA</h4>
              </div>
              <p className="text-white text-lg sm:text-xl font-medium">{script.cta.content}</p>
            </div>

            {/* Technical Tips */}
            <div className="p-4 sm:p-6 bg-slate-800/50 rounded-xl sm:rounded-2xl border border-slate-700/50">
              <h4 className="text-amber-400 font-bold mb-3 sm:mb-4 text-sm sm:text-base">💡 Dicas Técnicas</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {script.technicalTips.map((tip, i) => (
                  <div key={i} className="p-2 sm:p-3 bg-amber-900/20 border border-amber-700/30 rounded-lg sm:rounded-xl">
                    <p className="text-slate-300 text-xs sm:text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Music */}
            <div className="p-3 sm:p-4 bg-slate-800/50 rounded-lg sm:rounded-xl border border-slate-700/50">
              <span className="text-slate-500 text-xs sm:text-sm">🎵 Música:</span>
              <p className="text-white mt-1 text-sm sm:text-base">{script.musicSuggestion}</p>
            </div>

            {/* Full Script */}
            <div className="p-4 sm:p-6 bg-slate-800/50 rounded-xl sm:rounded-2xl border border-slate-700/50">
              <div className="flex items-start justify-between gap-2 mb-3 sm:mb-4">
                <h4 className="text-violet-400 font-bold text-sm sm:text-base">📜 Roteiro Completo</h4>
                <button
                  onClick={copyFullScript}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg sm:rounded-xl transition-all flex-shrink-0 ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {copied ? '✓ Copiado!' : '📋 Copiar'}
                </button>
              </div>
              <div className="p-3 sm:p-4 bg-slate-900/50 rounded-lg sm:rounded-xl">
                <p className="text-slate-200 whitespace-pre-wrap font-mono text-xs sm:text-sm leading-relaxed">
                  {script.fullScript}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
