'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Quiz from '@/components/Quiz';
import MonthSelector from '@/components/MonthSelector';
import { useAuth } from '@/lib/useAuth';

type Step = 'quiz' | 'month';

interface ProfileData {
  business: string;
  objective: string;
  audience: string;
}

export default function Home() {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();
  const [currentStep, setCurrentStep] = useState<Step>('quiz');
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'campaigns' | 'scripts'>('campaigns');

  // Show loading while checking auth
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const handleQuizComplete = (data: ProfileData) => {
    setProfileData(data);
    setCurrentStep('month');
  };

  const handleMonthSelect = async (month: string) => {
    if (!profileData) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/generate-campaign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...profileData,
          month,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate campaign');
      }

      const campaignData = await response.json();
      
      // Store data in sessionStorage and navigate
      sessionStorage.setItem('gps-campaign-data', JSON.stringify({
        profile: profileData,
        month,
        campaign: campaignData,
      }));
      
      router.push('/resultado');
    } catch (error) {
      console.error('Error:', error);
      alert('Erro ao gerar campanhas. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToQuiz = () => {
    setCurrentStep('quiz');
    setProfileData(null);
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">🧭</span>
              <span className="text-lg sm:text-xl font-bold text-white">
                GPS <span className="text-emerald-400">Marketing</span>
              </span>
            </div>
            
            {/* Tabs */}
            <div className="flex gap-1 bg-slate-800 rounded-lg sm:rounded-xl p-1">
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'campaigns'
                    ? 'bg-emerald-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="hidden sm:inline">📊 </span>Campanhas
              </button>
              <button
                onClick={() => {
                  setActiveTab('scripts');
                  router.push('/roteiros');
                }}
                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'scripts'
                    ? 'bg-violet-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="hidden sm:inline">🎬 </span>Roteiros
              </button>
            </div>

            {/* Logout button */}
            <button
              onClick={logout}
              className="ml-2 sm:ml-4 px-2.5 sm:px-3 py-1.5 sm:py-2 text-slate-400 hover:text-red-400 transition-colors text-xs sm:text-sm"
              title="Sair"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 sm:pt-24 pb-20 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-block mb-4 sm:mb-6"
            >
              <span className="text-5xl sm:text-7xl">🧭</span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
              GPS{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Marketing
              </span>{' '}
              e{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Vendas
              </span>{' '}
              <span className="text-emerald-400">2026</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
              Gere campanhas personalizadas para seu negócio em segundos.
              <br className="hidden sm:block" />
              <span className="text-emerald-400">4 semanas</span> de conteúdo pronto para usar.
            </p>
          </motion.div>

          {/* Steps */}
          <AnimatePresence mode="wait">
            {currentStep === 'quiz' && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Quiz onComplete={handleQuizComplete} />
              </motion.div>
            )}

            {currentStep === 'month' && (
              <motion.div
                key="month"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Back button */}
                <div className="mb-4 sm:mb-6 text-center">
                  <button
                    onClick={handleBackToQuiz}
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    <span>←</span>
                    <span>Voltar ao formulário</span>
                  </button>
                </div>

                {/* Profile Summary */}
                {profileData && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto mb-6 sm:mb-8 p-3 sm:p-4 bg-slate-800/50 rounded-xl sm:rounded-2xl border border-slate-700"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center sm:text-left">
                      <div>
                        <span className="text-slate-500 text-xs uppercase tracking-wider">Negócio</span>
                        <p className="text-white font-medium text-sm sm:text-base truncate">{profileData.business}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 text-xs uppercase tracking-wider">Objetivo</span>
                        <p className="text-white font-medium text-sm sm:text-base truncate">{profileData.objective}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 text-xs uppercase tracking-wider">Público</span>
                        <p className="text-white font-medium text-sm sm:text-base truncate">{profileData.audience}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <MonthSelector onSelect={handleMonthSelect} isLoading={isLoading} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-3 sm:py-4 text-center text-slate-500 text-xs sm:text-sm bg-slate-900/80 backdrop-blur-lg border-t border-slate-800">
        <p>
          GPS Marketing e Vendas © 2026 • Powered by{' '}
          <span className="text-emerald-400">IA</span>
        </p>
      </footer>
    </main>
  );
}
