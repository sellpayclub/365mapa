'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const CHECKOUT_URL = "https://pay.lowify.com.br/checkout.php?product_id=QslO6f";

export default function LandingPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load SmartPlayer script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    script.async = true;
    document.head.appendChild(script);

    // Set iframe src after mount
    if (iframeRef.current) {
      const videoUrl = 'https://scripts.converteai.net/23a12c68-c1f4-4484-8d24-176d22e3e1c7/players/6953d72690b70171e3844132/v4/embed.html' + 
        (window.location.search || '?') + 
        '&vl=' + encodeURIComponent(window.location.href);
      iframeRef.current.src = videoUrl;
    }

    return () => {
      const existingScript = document.querySelector('script[src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧭</span>
              <span className="text-xl font-bold text-slate-900">
                GPS <span className="text-emerald-600">365</span>
              </span>
            </div>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors text-sm"
            >
              Assinar Agora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <span>🧭</span>
              Sistema Estratégico de Marketing e Vendas
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
          >
            O Sistema que Diz{' '}
            <span className="text-emerald-600">EXATAMENTE</span>{' '}
            o Que Fazer Para Vender —{' '}
            <span className="underline decoration-emerald-500 decoration-4 underline-offset-4">
              Todos os Meses
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Pare de perder horas tentando adivinhar o que postar, anunciar ou oferecer.
            O GPS 365 gera, em minutos, um <strong className="text-slate-900">plano mensal de marketing e vendas inteligente</strong>, baseado na data do ano, no seu mercado e em estratégias que já funcionam.
          </motion.p>
        </div>
      </section>

      {/* Video Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200"
          >
            <div id="ifr_6953d72690b70171e3844132_wrapper" style={{ margin: '0 auto', width: '100%' }}>
              <div style={{ position: 'relative', padding: '56.25% 0 0 0' }} id="ifr_6953d72690b70171e3844132_aspect">
                <iframe
                  ref={iframeRef}
                  frameBorder="0"
                  allowFullScreen
                  id="ifr_6953d72690b70171e3844132"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  referrerPolicy="origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA After Video */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          >
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 text-lg"
            >
              Quero Começar Agora
            </a>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-lg"
            >
              Ver Como Funciona
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
          >
            <span className="text-lg">👉</span>
            <span>Você não estuda marketing. <strong>Você executa.</strong></span>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Você informa seu negócio e objetivo →
            </h2>
            <p className="text-xl text-slate-600">
              O GPS 365 cruza tudo e gera automaticamente:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: '📅', title: 'Data do ano', desc: 'Datas comemorativas relevantes para o seu nicho' },
              { icon: '🔄', title: 'Ciclo de consumo', desc: 'Entende quando seu cliente está pronto para comprar' },
              { icon: '🎯', title: 'Estratégias validadas', desc: 'Táticas de marketing e vendas que já funcionam' },
              { icon: '⚡', title: 'Plano automático', desc: 'Tudo pronto para você executar' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
              E gera automaticamente:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Campanhas do mês',
                'Conteúdos estratégicos',
                'Ações comerciais de vendas e marketing',
                'Prioridades semanais'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="font-medium text-slate-900">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-emerald-700 font-semibold text-lg">
              Tudo pronto para execução.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              VEJA COMO FUNCIONA
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Simples, Rápido e Direto ao Ponto
            </h2>
            <p className="text-slate-600 mt-4 text-lg">
              Veja o sistema real funcionando em 4 passos simples
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { 
                step: '1', 
                title: 'Informe seu negócio', 
                desc: 'Digite o tipo do seu negócio e deixe a IA entender seu mercado',
                image: 'https://i.postimg.cc/bwpzgKVc/etapa-1.png'
              },
              { 
                step: '2', 
                title: 'Defina seu objetivo', 
                desc: 'Escolha o que você quer alcançar: mais vendas, novos clientes, fidelização...',
                image: 'https://i.postimg.cc/2SrzGP9f/etapa-2.png'
              },
              { 
                step: '3', 
                title: 'Descreva seu público', 
                desc: 'Informe quem é seu cliente ideal para campanhas personalizadas',
                image: 'https://i.postimg.cc/K8xZfdpX/etapa-3.png'
              },
              { 
                step: '4', 
                title: 'Escolha o mês', 
                desc: 'Selecione o mês e receba 4 semanas de campanhas prontas!',
                image: 'https://i.postimg.cc/X7wjwV8g/etapa-4-mes.png'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Step Badge */}
                <div className="absolute top-4 left-4 z-10 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                
                {/* Image */}
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`Etapa ${item.step}: ${item.title}`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-xl mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Arrow indicating flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full font-semibold">
              <span>E pronto!</span>
              <span className="text-2xl">🎯</span>
              <span>Suas campanhas são geradas automaticamente</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              🎯 PRA QUEM É O GPS 365?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Feito Para Quem Precisa Vender
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              'Profissionais autônomos (advogados, dentistas, esteticistas, consultores...)',
              'Donos de negócios físicos ou online',
              'Prestadores de serviço que dependem de clientes',
              'Quem já tentou de tudo e não consegue ter novos clientes procurando pelo seus serviços/produtos',
              'Quem quer vender mais sem virar refém de algoritmo das redes sociais'
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-4 p-5 bg-white rounded-xl hover:bg-emerald-50 transition-colors border border-slate-100"
              >
                <span className="flex-shrink-0 w-7 h-7 bg-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-slate-700 text-lg">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What You Receive Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              🎁 O QUE VOCÊ RECEBE AO ASSINAR
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Tudo Que Você Precisa Para Vender
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Product */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white"
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl">✅</span>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Acesso ao GPS 365</h3>
                  <p className="text-emerald-100 text-lg">
                    Sistema web com plano de ação mensal e semanal automático.
                    Campanhas, conteúdos e estratégias prontas para executar.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bonus 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 border-2 border-amber-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">
                  BÔNUS 1
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">🎁 Bunker de Scripts</h3>
              <div className="mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 text-sm line-through">De R$ 97</span>
                  <span className="text-emerald-600 font-bold text-lg">por R$ 0,00</span>
                </div>
              </div>
              <p className="text-slate-600">
                100+ mensagens de WhatsApp que convertem curiosos em clientes.
              </p>
            </motion.div>

            {/* Bonus 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 rounded-2xl p-6 border-2 border-amber-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">
                  BÔNUS 2
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">🎁 Gerador de Roteiros</h3>
              <div className="mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 text-sm line-through">De R$ 97</span>
                  <span className="text-emerald-600 font-bold text-lg">por R$ 0,00</span>
                </div>
              </div>
              <p className="text-slate-600">
                Nunca mais fique sem saber o que postar. Roteiros de vídeo prontos.
              </p>
            </motion.div>

            {/* Bonus 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-slate-50 rounded-2xl p-6 border-2 border-amber-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">
                  BÔNUS 3
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">🎁 Guia de Anúncios com Pouco Investimento</h3>
              <div className="mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 text-sm line-through">De R$ 97</span>
                  <span className="text-emerald-600 font-bold text-lg">por R$ 0,00</span>
                </div>
              </div>
              <p className="text-slate-600">
                Como rodar campanhas com R$ 10/dia, usando o plano do GPS.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Price Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Quanto custa uma Equipe de Marketing?
            </h2>
            <p className="text-slate-600 text-lg">
              Veja o investimento necessário para ter marketing funcionando
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm mb-8 bg-white"
          >
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Profissional / Serviço</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700 hidden sm:table-cell">Função</th>
                  <th className="text-right py-4 px-6 font-semibold text-slate-700">Custo Médio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { role: 'Social Media', func: 'Planejar o que postar todo dia', cost: 'R$ 1.500,00' },
                  { role: 'Copywriter', func: 'Escrever legendas e scripts de venda', cost: 'R$ 2.000,00' },
                  { role: 'Estrategista', func: 'Criar campanhas de datas sazonais', cost: 'R$ 3.000,00' },
                  { role: 'Agência de Marketing', func: 'Gerenciar tudo e não deixar falhar', cost: 'R$ 2.500,00' }
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-medium text-slate-900">{item.role}</td>
                    <td className="py-4 px-6 text-slate-600 hidden sm:table-cell">{item.func}</td>
                    <td className="py-4 px-6 text-right text-slate-900">{item.cost}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-red-50">
                <tr>
                  <td className="py-4 px-6 font-bold text-red-700" colSpan={2}>
                    TOTAL DO INVESTIMENTO
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-red-700 text-lg">
                    R$ 9.000,00 /mês
                  </td>
                </tr>
              </tfoot>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="preco" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-6">
              <span>🧭</span>
              GPS 365
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              O GPS 365 custa apenas
            </h2>

            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-slate-400 line-through text-2xl">R$ 97</span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-emerald-400 text-2xl font-medium">R$</span>
                <span className="text-7xl sm:text-8xl font-bold text-white">37</span>
                <span className="text-slate-400 text-xl">/mês</span>
              </div>
            </div>

            <p className="text-xl text-slate-300 mb-8">
              👉 E você tem uma <strong className="text-white">equipe de marketing inteira</strong> trabalhando pra você!
            </p>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-12 py-5 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 text-xl mb-6"
            >
              QUERO COMEÇAR AGORA
            </a>

            <p className="text-slate-400 text-sm">
              Acesso imediato • Cancele quando quiser • Satisfação garantida
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xl">🧭</span>
            <span className="text-lg font-bold text-white">
              GPS <span className="text-emerald-400">365</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 GPS 365 - Sistema Estratégico de Marketing e Vendas
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Todos os direitos reservados
          </p>
        </div>
      </footer>
    </main>
  );
}
