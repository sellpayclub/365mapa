'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface QuizProps {
  onComplete: (data: {
    business: string;
    objective: string;
    audience: string;
  }) => void;
}

const steps = [
  {
    id: 'business',
    question: 'Qual é o seu negócio?',
    placeholder: 'Ex: Clínica odontológica, Loja de roupas...',
    helper: 'Seja específico sobre o tipo de negócio'
  },
  {
    id: 'objective',
    question: 'Qual é seu objetivo este mês?',
    placeholder: 'Ex: Lotar agenda, Vender mais...',
    helper: 'Quanto mais específico, melhor'
  },
  {
    id: 'audience',
    question: 'Quem é o seu público?',
    placeholder: 'Ex: Mulheres 30+, moradores de SP...',
    helper: 'Gênero, idade, cidade, interesses'
  }
];

export default function Quiz({ onComplete }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    business: '',
    objective: '',
    audience: ''
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (value: string) => {
    const stepId = steps[currentStep].id as keyof typeof answers;
    setAnswers(prev => ({
      ...prev,
      [stepId]: value
    }));
  };

  const currentStepData = steps[currentStep];
  const currentValue = answers[currentStepData.id as keyof typeof answers];
  const isLastStep = currentStep === steps.length - 1;
  const canProceed = currentValue.trim().length >= 3;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
      {/* Progress Bar */}
      <div className="mb-6 sm:mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                index < currentStep
                  ? 'bg-emerald-500 text-white'
                  : index === currentStep
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white scale-110 shadow-lg shadow-emerald-500/30'
                  : 'bg-slate-700 text-slate-400'
              }`}
            >
              {index < currentStep ? '✓' : index + 1}
            </div>
          ))}
        </div>
        <div className="h-1.5 sm:h-2 bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-4 sm:space-y-6"
      >
        <div className="text-center">
          <span className="inline-block px-3 py-1 mb-3 sm:mb-4 text-xs font-medium tracking-wider text-emerald-400 uppercase bg-emerald-500/10 rounded-full">
            Passo {currentStep + 1} de {steps.length}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {currentStepData.question}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">{currentStepData.helper}</p>
        </div>

        <div className="relative">
          <textarea
            value={currentValue}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={currentStepData.placeholder}
            className="w-full h-28 sm:h-32 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg text-white bg-slate-800/50 border-2 border-slate-700 rounded-xl sm:rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all duration-300 resize-none placeholder:text-slate-500"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey && canProceed) {
                e.preventDefault();
                handleNext();
              }
            }}
          />
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-xs sm:text-sm text-slate-500">
            {currentValue.length} caracteres
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 sm:gap-4">
          {currentStep > 0 && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBack}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-medium text-slate-300 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
            >
              ← Voltar
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: canProceed ? 1.02 : 1 }}
            whileTap={{ scale: canProceed ? 0.98 : 1 }}
            onClick={handleNext}
            disabled={!canProceed}
            className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl transition-all duration-300 ${
              canProceed
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            {isLastStep ? 'Escolher Mês →' : 'Próximo →'}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
