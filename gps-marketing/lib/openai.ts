import OpenAI from 'openai';

// Lazy initialization to avoid build-time errors
let openaiClient: OpenAI | null = null;

function getOpenAI(): OpenAI {
  if (!openaiClient) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY environment variable is not set');
    }
    openaiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openaiClient;
}

export async function generateCampaign(prompt: string): Promise<string> {
  const openai = getOpenAI();
  
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Você é um especialista em marketing digital e vendas para pequenos e médios negócios brasileiros. Você cria campanhas práticas, detalhadas e que realmente funcionam. Você NÃO inventa datas comemorativas - apenas usa as que fazem sentido real para o nicho do cliente. Responda sempre em português brasileiro."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 0.7,
    max_tokens: 4000,
  });

  return response.choices[0]?.message?.content || "";
}

export async function generateScript(prompt: string): Promise<string> {
  const openai = getOpenAI();
  
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Você é um roteirista especializado em conteúdo para redes sociais, especialmente vídeos curtos de 30 segundos. Você cria roteiros envolventes, diretos e que prendem a atenção do público. Responda sempre em português brasileiro."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 0.8,
    max_tokens: 2000,
  });

  return response.choices[0]?.message?.content || "";
}
