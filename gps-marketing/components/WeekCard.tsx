'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

interface WeekCardProps {
  data: WeekData;
  monthName: string;
  onGenerateScript?: (theme: string) => void;
}

type TabType = 'overview' | 'whatsapp' | 'reels' | 'post' | 'stories' | 'ad' | 'checklist';

export default function WeekCard({ data, monthName, onGenerateScript }: WeekCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const weekColors = [
    'from-emerald-500 to-teal-600',
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-violet-600',
    'from-orange-500 to-red-600',
  ];

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: '📋' },
    { id: 'whatsapp', label: 'WhatsApp', icon: '💬' },
    { id: 'reels', label: 'Reels', icon: '🎬' },
    { id: 'post', label: 'Post', icon: '📸' },
    { id: 'stories', label: 'Stories', icon: '📱' },
    { id: 'ad', label: 'Anúncio', icon: '📢' },
    { id: 'checklist', label: 'Tarefas', icon: '✅' },
  ];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
    >
      {/* Header - Always Visible */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`p-4 sm:p-6 cursor-pointer bg-gradient-to-r ${weekColors[data.week - 1]} relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1.5 sm:mb-2">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm font-medium text-white">
                Semana {data.week}
              </span>
              <span className="text-white/80 text-xs sm:text-sm">
                {data.period}/{monthName}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight line-clamp-2">
              {data.theme}
            </h3>
            {data.relevantDate && (
              <p className="text-white/80 text-xs sm:text-sm mt-1 truncate">
                📅 {data.relevantDate}
              </p>
            )}
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <span className="text-white text-lg sm:text-xl">↓</span>
          </motion.div>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Tabs */}
            <div className="flex overflow-x-auto scrollbar-hide border-b border-slate-700 bg-slate-800/30 -mx-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex-shrink-0 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-emerald-400 border-emerald-400 bg-emerald-500/10'
                      : 'text-slate-400 border-transparent hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <span className="mr-1">{tab.icon}</span>
                  <span className="hidden xs:inline sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-4 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Overview Tab */}
                  {activeTab === 'overview' && (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="p-3 sm:p-4 bg-slate-700/30 rounded-lg sm:rounded-xl">
                        <h4 className="text-emerald-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">🎯 Estratégia</h4>
                        <p className="text-slate-300 text-sm sm:text-base">{data.strategy}</p>
                      </div>
                      {data.dateJustification && (
                        <div className="p-3 sm:p-4 bg-slate-700/30 rounded-lg sm:rounded-xl">
                          <h4 className="text-emerald-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">💡 Por que essa data?</h4>
                          <p className="text-slate-300 text-sm sm:text-base">{data.dateJustification}</p>
                        </div>
                      )}
                      {onGenerateScript && (
                        <button
                          onClick={() => onGenerateScript(data.theme)}
                          className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-lg sm:rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all text-sm sm:text-base"
                        >
                          🎬 Gerar Roteiro de Vídeo
                        </button>
                      )}
                    </div>
                  )}

                  {/* WhatsApp Tab */}
                  {activeTab === 'whatsapp' && (
                    <div className="space-y-3 sm:space-y-4">
                      {data.whatsappScript.applicable ? (
                        <>
                          <div className="p-3 sm:p-4 bg-green-900/30 border border-green-700/50 rounded-lg sm:rounded-xl">
                            <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
                              <h4 className="text-green-400 font-semibold text-sm sm:text-base">💬 Script WhatsApp</h4>
                              <button
                                onClick={() => copyToClipboard(data.whatsappScript.message, 'whatsapp')}
                                className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-lg transition-all flex-shrink-0 ${
                                  copied === 'whatsapp'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-slate-600 text-slate-300 hover:bg-slate-500'
                                }`}
                              >
                                {copied === 'whatsapp' ? '✓' : '📋'}
                              </button>
                            </div>
                            <div className="p-3 sm:p-4 bg-slate-900/50 rounded-lg font-mono text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">
                              {data.whatsappScript.message}
                            </div>
                          </div>
                          <div className="p-3 sm:p-4 bg-slate-700/30 rounded-lg sm:rounded-xl">
                            <h4 className="text-emerald-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">📌 Quando enviar</h4>
                            <p className="text-slate-300 text-sm sm:text-base">{data.whatsappScript.context}</p>
                          </div>
                        </>
                      ) : (
                        <div className="p-4 sm:p-6 text-center bg-slate-700/30 rounded-lg sm:rounded-xl">
                          <span className="text-3xl sm:text-4xl mb-2 sm:mb-3 block">🚫</span>
                          <p className="text-slate-400 text-sm sm:text-base">WhatsApp não aplicável</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Reels Tab */}
                  {activeTab === 'reels' && (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="p-3 sm:p-4 bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-700/50 rounded-lg sm:rounded-xl">
                        <h4 className="text-pink-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">🎣 Hook (3 segundos)</h4>
                        <p className="text-white text-base sm:text-lg font-medium">&ldquo;{data.contentIdeas.reels.hook}&rdquo;</p>
                      </div>
                      <div className="p-3 sm:p-4 bg-slate-700/30 rounded-lg sm:rounded-xl">
                        <h4 className="text-emerald-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">🎬 Conceito</h4>
                        <p className="text-slate-300 text-sm sm:text-base">{data.contentIdeas.reels.concept}</p>
                      </div>
                      <div className="p-3 sm:p-4 bg-slate-700/30 rounded-lg sm:rounded-xl">
                        <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                          <h4 className="text-emerald-400 font-semibold text-sm sm:text-base">📝 Roteiro</h4>
                          <button
                            onClick={() => copyToClipboard(data.contentIdeas.reels.script, 'reels-script')}
                            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-lg transition-all flex-shrink-0 ${
                              copied === 'reels-script'
                                ? 'bg-green-500 text-white'
                                : 'bg-slate-600 text-slate-300 hover:bg-slate-500'
                            }`}
                          >
                            {copied === 'reels-script' ? '✓' : '📋'}
                          </button>
                        </div>
                        <p className="text-slate-300 text-sm sm:text-base">{data.contentIdeas.reels.script}</p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {data.contentIdeas.reels.hashtags.map((tag, i) => (
                          <span
                            key={i}
                            onClick={() => copyToClipboard(tag, `hashtag-${i}`)}
                            className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-900/40 text-blue-400 rounded-full text-xs sm:text-sm cursor-pointer hover:bg-blue-800/50 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Post Tab */}
                  {activeTab === 'post' && (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-violet-900/40 text-violet-400 rounded-full text-xs sm:text-sm">
                        {data.contentIdeas.post.type}
                      </div>
                      <div className="p-3 sm:p-4 bg-slate-700/30 rounded-lg sm:rounded-xl">
                        <h4 className="text-emerald-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">📌 Título</h4>
                        <p className="text-white text-lg sm:text-xl font-bold">{data.contentIdeas.post.headline}</p>
                      </div>
                      <div className="p-3 sm:p-4 bg-slate-700/30 rounded-lg sm:rounded-xl">
                        <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                          <h4 className="text-emerald-400 font-semibold text-sm sm:text-base">📝 Legenda</h4>
                          <button
                            onClick={() => copyToClipboard(data.contentIdeas.post.content, 'post-content')}
                            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-lg transition-all flex-shrink-0 ${
                              copied === 'post-content'
                                ? 'bg-green-500 text-white'
                                : 'bg-slate-600 text-slate-300 hover:bg-slate-500'
                            }`}
                          >
                            {copied === 'post-content' ? '✓' : '📋'}
                          </button>
                        </div>
                        <p className="text-slate-300 whitespace-pre-wrap text-sm sm:text-base">{data.contentIdeas.post.content}</p>
                      </div>
                      <div className="p-3 sm:p-4 bg-emerald-900/30 border border-emerald-700/50 rounded-lg sm:rounded-xl">
                        <h4 className="text-emerald-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">👆 CTA</h4>
                        <p className="text-white font-medium text-sm sm:text-base">{data.contentIdeas.post.cta}</p>
                      </div>
                    </div>
                  )}

                  {/* Stories Tab */}
                  {activeTab === 'stories' && (
                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-emerald-400 font-semibold text-sm sm:text-base">📱 Sequência de Stories</h4>
                      <div className="grid gap-2 sm:gap-3">
                        {data.contentIdeas.stories.sequence.map((story, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-3 sm:p-4 bg-slate-700/30 rounded-lg sm:rounded-xl"
                          >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                              {i + 1}
                            </div>
                            <p className="text-slate-300 text-sm sm:text-base">{story}</p>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 sm:p-4 bg-orange-900/30 border border-orange-700/50 rounded-lg sm:rounded-xl">
                        <h4 className="text-orange-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">🎯 Interativo</h4>
                        <p className="text-slate-300 text-sm sm:text-base">{data.contentIdeas.stories.interactiveElement}</p>
                      </div>
                    </div>
                  )}

                  {/* Ad Tab */}
                  {activeTab === 'ad' && (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="p-3 sm:p-4 bg-blue-900/30 border border-blue-700/50 rounded-lg sm:rounded-xl">
                        <h4 className="text-blue-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">📢 Título</h4>
                        <p className="text-white text-lg sm:text-xl font-bold">{data.contentIdeas.ad.headline}</p>
                      </div>
                      <div className="p-3 sm:p-4 bg-slate-700/30 rounded-lg sm:rounded-xl">
                        <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                          <h4 className="text-emerald-400 font-semibold text-sm sm:text-base">📝 Texto</h4>
                          <button
                            onClick={() => copyToClipboard(data.contentIdeas.ad.primaryText, 'ad-text')}
                            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-lg transition-all flex-shrink-0 ${
                              copied === 'ad-text'
                                ? 'bg-green-500 text-white'
                                : 'bg-slate-600 text-slate-300 hover:bg-slate-500'
                            }`}
                          >
                            {copied === 'ad-text' ? '✓' : '📋'}
                          </button>
                        </div>
                        <p className="text-slate-300 text-sm sm:text-base">{data.contentIdeas.ad.primaryText}</p>
                      </div>
                      <div className="p-3 sm:p-4 bg-emerald-900/30 border border-emerald-700/50 rounded-lg sm:rounded-xl">
                        <h4 className="text-emerald-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">👆 Botão</h4>
                        <p className="text-white font-medium text-sm sm:text-base">{data.contentIdeas.ad.cta}</p>
                      </div>
                      <div className="p-3 sm:p-4 bg-violet-900/30 border border-violet-700/50 rounded-lg sm:rounded-xl">
                        <h4 className="text-violet-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">🎯 Segmentação</h4>
                        <p className="text-slate-300 text-sm sm:text-base">{data.contentIdeas.ad.targetingTips}</p>
                      </div>
                    </div>
                  )}

                  {/* Checklist Tab */}
                  {activeTab === 'checklist' && (
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-emerald-400 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">✅ Ações da Semana</h4>
                      {data.actionChecklist.map((action, i) => (
                        <label
                          key={i}
                          className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-slate-700/30 rounded-lg sm:rounded-xl cursor-pointer hover:bg-slate-700/50 transition-colors group"
                        >
                          <input
                            type="checkbox"
                            className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0"
                          />
                          <span className="text-slate-300 group-hover:text-white transition-colors text-sm sm:text-base">
                            {action}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
