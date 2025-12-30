'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ScriptGenerator from '@/components/ScriptGenerator';

interface ScriptContext {
  theme: string;
  business: string;
  audience: string;
}

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

export default function RoteirosPage() {
  const router = useRouter();
  const [context, setContext] = useState<ScriptContext | null>(null);
  const [customTheme, setCustomTheme] = useState('');
  const [customBusiness, setCustomBusiness] = useState('');
  const [customAudience, setCustomAudience] = useState('');
  const [useCustom, setUseCustom] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('gps-script-context');
    if (stored) {
      const parsed = JSON.parse(stored);
      setContext(parsed);
      setCustomTheme(parsed.theme || '');
      setCustomBusiness(parsed.business || '');
      setCustomAudience(parsed.audience || '');
    } else {
      setUseCustom(true);
    }
  }, []);

  const handleGenerate = async (format: 'appearing' | 'voiceover' | 'textonly'): Promise<ScriptData | null> => {
    const theme = useCustom ? customTheme : (context?.theme || customTheme);
    const business = useCustom ? customBusiness : (context?.business || customBusiness);
    const audience = useCustom ? customAudience : (context?.audience || customAudience);

    if (!theme || !business || !audience) {
      alert('Preencha todos os campos');
      return null;
    }

    try {
      const response = await fetch('/api/generate-script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campaignTheme: theme,
          business,
          audience,
          format,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate script');
      }

      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      alert('Erro ao gerar roteiro. Tente novamente.');
      return null;
    }
  };

  const activeTheme = useCustom ? customTheme : (context?.theme || '');
  const activeBusiness = useCustom ? customBusiness : (context?.business || '');
  const activeAudience = useCustom ? customAudience : (context?.audience || '');

  return (
    <main className="min-h-screen pb-24">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 sm:gap-3 text-white hover:text-emerald-400 transition-colors"
            >
              <span className="text-xl sm:text-2xl">🧭</span>
              <span className="text-lg sm:text-xl font-bold hidden xs:inline">
                GPS <span className="text-emerald-400">Marketing</span>
              </span>
            </button>
            
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={() => router.push('/resultado')}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500 text-white rounded-lg sm:rounded-xl hover:bg-emerald-600 transition-colors text-xs sm:text-sm font-medium"
              >
                📊 <span className="hidden sm:inline">Campanhas</span>
              </button>
              <button
                onClick={() => router.push('/')}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-700 text-white rounded-lg sm:rounded-xl hover:bg-slate-600 transition-colors text-xs sm:text-sm font-medium"
              >
                + <span className="hidden sm:inline">Nova</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="text-5xl sm:text-6xl block mb-3 sm:mb-4">🎬</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Gerador de{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Roteiros
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Crie roteiros de vídeo de 30 segundos
          </p>
        </motion.div>

        {/* Context Source Toggle */}
        {context && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8"
          >
            <div className="flex justify-center gap-2 mb-4 sm:mb-6">
              <button
                onClick={() => setUseCustom(false)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  !useCustom
                    ? 'bg-violet-500 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Usar campanha
              </button>
              <button
                onClick={() => setUseCustom(true)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  useCustom
                    ? 'bg-violet-500 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Criar do zero
              </button>
            </div>
          </motion.div>
        )}

        {/* Custom Inputs */}
        {useCustom && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8 p-4 sm:p-6 bg-slate-800/50 rounded-xl sm:rounded-2xl border border-slate-700"
          >
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Informações do Roteiro
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm text-slate-400 mb-1.5 sm:mb-2">
                  Tema da Campanha
                </label>
                <input
                  type="text"
                  value={customTheme}
                  onChange={(e) => setCustomTheme(e.target.value)}
                  placeholder="Ex: Promoção de Clareamento"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900/50 border border-slate-700 rounded-lg sm:rounded-xl text-white text-sm placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-slate-400 mb-1.5 sm:mb-2">
                  Seu Negócio
                </label>
                <input
                  type="text"
                  value={customBusiness}
                  onChange={(e) => setCustomBusiness(e.target.value)}
                  placeholder="Ex: Clínica Odontológica"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900/50 border border-slate-700 rounded-lg sm:rounded-xl text-white text-sm placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-slate-400 mb-1.5 sm:mb-2">
                  Público-Alvo
                </label>
                <input
                  type="text"
                  value={customAudience}
                  onChange={(e) => setCustomAudience(e.target.value)}
                  placeholder="Ex: Mulheres 30+ classe A"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900/50 border border-slate-700 rounded-lg sm:rounded-xl text-white text-sm placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Context Display (when using campaign) */}
        {!useCustom && context && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8 p-4 sm:p-6 bg-violet-900/20 rounded-xl sm:rounded-2xl border border-violet-700/50"
          >
            <h3 className="text-xs sm:text-sm font-medium text-violet-400 uppercase tracking-wider mb-3 sm:mb-4">
              Contexto da Campanha
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <span className="text-slate-500 text-xs sm:text-sm">Tema</span>
                <p className="text-white font-medium mt-1 text-sm sm:text-base">{context.theme}</p>
              </div>
              <div>
                <span className="text-slate-500 text-xs sm:text-sm">Negócio</span>
                <p className="text-white font-medium mt-1 text-sm sm:text-base">{context.business}</p>
              </div>
              <div>
                <span className="text-slate-500 text-xs sm:text-sm">Público</span>
                <p className="text-white font-medium mt-1 text-sm sm:text-base">{context.audience}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Script Generator */}
        {(activeTheme && activeBusiness && activeAudience) ? (
          <ScriptGenerator
            campaignTheme={activeTheme}
            business={activeBusiness}
            audience={activeAudience}
            onGenerate={handleGenerate}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 sm:py-12"
          >
            <span className="text-4xl sm:text-5xl block mb-3 sm:mb-4">📝</span>
            <p className="text-slate-400 text-sm sm:text-base">
              Preencha as informações acima para gerar um roteiro
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
