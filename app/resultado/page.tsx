'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import WeekCard from '@/components/WeekCard';
import { monthsList } from '@/lib/calendar-2026';

interface WeekData {
  week: number;
  period: string;
  theme: string;
  relevantDate: string | null;
  dateJustification: string | null;
  strategy: string;
  whatsappScript: {
    applicable: boolean;
    message: string;
    context: string;
  };
  contentIdeas: {
    reels: {
      hook: string;
      concept: string;
      script: string;
      hashtags: string[];
    };
    post: {
      type: string;
      headline: string;
      content: string;
      cta: string;
    };
    stories: {
      sequence: string[];
      interactiveElement: string;
    };
    ad: {
      headline: string;
      primaryText: string;
      cta: string;
      targetingTips: string;
    };
  };
  actionChecklist: string[];
}

interface CampaignData {
  month: string;
  overview: string;
  weeks: WeekData[];
}

interface StoredData {
  profile: {
    business: string;
    objective: string;
    audience: string;
  };
  month: string;
  campaign: CampaignData;
}

export default function ResultadoPage() {
  const router = useRouter();
  const [data, setData] = useState<StoredData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem('gps-campaign-data');
    if (stored) {
      setData(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  const handleGenerateScript = (theme: string) => {
    if (!data) return;
    
    sessionStorage.setItem('gps-script-context', JSON.stringify({
      theme,
      business: data.profile.business,
      audience: data.profile.audience,
    }));
    
    router.push('/roteiros');
  };

  const handleNewCampaign = () => {
    sessionStorage.removeItem('gps-campaign-data');
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400 text-sm sm:text-base">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <span className="text-5xl sm:text-6xl block mb-4">🤔</span>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">Nenhuma campanha encontrada</h1>
          <p className="text-slate-400 mb-6 text-sm sm:text-base">Você precisa gerar uma campanha primeiro.</p>
          <button
            onClick={() => router.push('/')}
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors text-sm sm:text-base"
          >
            Gerar Campanha
          </button>
        </div>
      </div>
    );
  }

  const monthInfo = monthsList.find(m => m.key === data.month);
  const monthName = monthInfo?.abbr || data.month.toUpperCase();

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
                onClick={() => router.push('/roteiros')}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-violet-500 text-white rounded-lg sm:rounded-xl hover:bg-violet-600 transition-colors text-xs sm:text-sm font-medium"
              >
                🎬 <span className="hidden sm:inline">Roteiros</span>
              </button>
              <button
                onClick={handleNewCampaign}
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
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span>✅</span>
            <span>Campanhas geradas!</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Campanhas de{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {monthInfo?.name || data.month}
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            {data.campaign.overview}
          </p>
        </motion.div>

        {/* Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 sm:mb-8 p-4 sm:p-6 bg-slate-800/50 rounded-xl sm:rounded-2xl border border-slate-700"
        >
          <h3 className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider mb-3 sm:mb-4">
            Perfil do Negócio
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <span className="text-emerald-400 text-xs sm:text-sm">🏢 Negócio</span>
              <p className="text-white font-medium mt-1 text-sm sm:text-base">{data.profile.business}</p>
            </div>
            <div>
              <span className="text-emerald-400 text-xs sm:text-sm">🎯 Objetivo</span>
              <p className="text-white font-medium mt-1 text-sm sm:text-base">{data.profile.objective}</p>
            </div>
            <div>
              <span className="text-emerald-400 text-xs sm:text-sm">👥 Público</span>
              <p className="text-white font-medium mt-1 text-sm sm:text-base">{data.profile.audience}</p>
            </div>
          </div>
        </motion.div>

        {/* Weeks */}
        <div className="space-y-3 sm:space-y-4">
          {data.campaign.weeks.map((week, index) => (
            <motion.div
              key={week.week}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <WeekCard
                data={week}
                monthName={monthName}
                onGenerateScript={handleGenerateScript}
              />
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <button
            onClick={() => window.print()}
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-colors font-medium text-sm sm:text-base"
          >
            🖨️ Salvar PDF
          </button>
          <button
            onClick={handleNewCampaign}
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-colors font-medium text-sm sm:text-base"
          >
            🔄 Novas Campanhas
          </button>
        </motion.div>
      </div>
    </main>
  );
}
