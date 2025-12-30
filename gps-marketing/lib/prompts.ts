import { formatCalendarForPrompt } from './calendar-2026';

export interface ClientProfile {
  business: string;
  objective: string;
  audience: string;
  month: string;
}

export function buildCampaignPrompt(profile: ClientProfile): string {
  const calendarData = formatCalendarForPrompt(profile.month);
  
  return `
# MISSÃO
Você é o GPS Marketing e Vendas - um estrategista de marketing que cria campanhas mensais personalizadas.

# PERFIL DO CLIENTE
- **Negócio:** ${profile.business}
- **Objetivo do mês:** ${profile.objective}
- **Público-alvo:** ${profile.audience}

# CALENDÁRIO DO MÊS SELECIONADO
${calendarData}

# INSTRUÇÕES CRÍTICAS

1. **ANÁLISE DE RELEVÂNCIA:** Analise CADA data do calendário e use APENAS as que fazem sentido REAL para o negócio "${profile.business}". NÃO force datas que não têm conexão lógica com o negócio.

2. **FOCO NO OBJETIVO:** Todas as campanhas devem estar alinhadas com o objetivo: "${profile.objective}"

3. **CAMPANHAS INTELIGENTES:** Se não houver data relevante em uma semana, crie uma campanha focada diretamente no objetivo do cliente, sem forçar datas comemorativas.

# FORMATO DE RESPOSTA (JSON)

Responda APENAS com um JSON válido no seguinte formato:

{
  "month": "${profile.month}",
  "overview": "Visão geral estratégica do mês (2-3 frases)",
  "weeks": [
    {
      "week": 1,
      "period": "01-07",
      "theme": "Nome da Campanha",
      "relevantDate": "Data comemorativa usada (ou null se não houver)",
      "dateJustification": "Por que essa data faz sentido para o negócio (ou null)",
      "strategy": "Estratégia detalhada da semana (3-4 frases explicando o racional)",
      "whatsappScript": {
        "applicable": true/false,
        "message": "Mensagem completa de WhatsApp pronta para copiar e enviar (com emojis, formatação, CTA claro). Máximo 500 caracteres.",
        "context": "Quando e para quem enviar essa mensagem"
      },
      "contentIdeas": {
        "reels": {
          "hook": "Frase de abertura que prende atenção nos primeiros 3 segundos",
          "concept": "Descrição completa do vídeo (o que mostrar, como mostrar)",
          "script": "Roteiro básico do que falar/mostrar",
          "hashtags": ["hashtag1", "hashtag2", "hashtag3", "hashtag4", "hashtag5"]
        },
        "post": {
          "type": "carrossel/imagem única/antes e depois",
          "headline": "Título chamativo para o post",
          "content": "Texto completo do post com emojis e formatação",
          "cta": "Chamada para ação"
        },
        "stories": {
          "sequence": [
            "Story 1: descrição",
            "Story 2: descrição",
            "Story 3: descrição"
          ],
          "interactiveElement": "Enquete/Quiz/Caixa de perguntas sugerida"
        },
        "ad": {
          "headline": "Título do anúncio (máx 40 caracteres)",
          "primaryText": "Texto principal do anúncio",
          "cta": "Botão de CTA sugerido",
          "targetingTips": "Dicas de segmentação para esse anúncio"
        }
      },
      "actionChecklist": [
        "Ação 1 específica que o cliente deve fazer",
        "Ação 2 específica",
        "Ação 3 específica"
      ]
    }
  ]
}

# IMPORTANTE
- Gere EXATAMENTE 4 semanas
- Cada semana deve ter conteúdo ÚNICO e progressivo
- Os scripts de WhatsApp devem ser naturais e não parecer spam
- As ideias de conteúdo devem ser práticas e executáveis
- Use linguagem apropriada para o público-alvo definido
- Seja criativo mas realista
`;
}

export function buildScriptPrompt(
  campaignTheme: string,
  business: string,
  audience: string,
  format: 'appearing' | 'voiceover' | 'textonly'
): string {
  const formatInstructions = {
    appearing: `
FORMATO: APARECENDO E FALANDO
- A pessoa vai aparecer no vídeo e falar diretamente para a câmera
- Inclua marcações de expressão facial e linguagem corporal
- O tom deve ser conversacional e autêntico
- Inclua pausas naturais e ênfases
`,
    voiceover: `
FORMATO: APENAS VOZ EM OFF
- A pessoa NÃO aparece, apenas narra
- Descreva o que deve aparecer na tela enquanto a voz fala
- O tom pode ser mais informativo
- Inclua instruções de B-roll ou imagens a usar
`,
    textonly: `
FORMATO: TEXTO NA TELA (SEM FALAR)
- Não há narração, apenas texto aparecendo
- O texto deve ser MUITO curto e impactante (máx 5-7 palavras por tela)
- Inclua timing de cada texto
- Descreva transições e efeitos visuais
- Sugira música de fundo
`
  };

  return `
# MISSÃO
Crie um roteiro de vídeo de 30 segundos para redes sociais.

# CONTEXTO
- **Negócio:** ${business}
- **Público-alvo:** ${audience}
- **Tema da Campanha:** ${campaignTheme}

${formatInstructions[format]}

# FORMATO DE RESPOSTA (JSON)

{
  "title": "Título criativo do vídeo",
  "duration": "30 segundos",
  "format": "${format === 'appearing' ? 'Aparecendo e Falando' : format === 'voiceover' ? 'Voz em Off' : 'Texto na Tela'}",
  "hook": {
    "timing": "0-3s",
    "content": "O que acontece nos primeiros 3 segundos (CRUCIAL para prender atenção)"
  },
  "body": [
    {
      "timing": "3-10s",
      "visual": "O que aparece na tela",
      "audio": "O que é falado/tocado",
      "text": "Texto na tela (se houver)"
    },
    {
      "timing": "10-20s",
      "visual": "...",
      "audio": "...",
      "text": "..."
    },
    {
      "timing": "20-27s",
      "visual": "...",
      "audio": "...",
      "text": "..."
    }
  ],
  "cta": {
    "timing": "27-30s",
    "content": "Chamada para ação final"
  },
  "technicalTips": [
    "Dica técnica 1 (iluminação, enquadramento, etc)",
    "Dica técnica 2",
    "Dica técnica 3"
  ],
  "musicSuggestion": "Estilo de música ou música específica sugerida",
  "fullScript": "Roteiro completo escrito de forma contínua para facilitar memorização/gravação"
}
`;
}


