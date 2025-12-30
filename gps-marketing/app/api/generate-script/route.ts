import { NextResponse } from 'next/server';
import { generateScript } from '@/lib/openai';
import { buildScriptPrompt } from '@/lib/prompts';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { campaignTheme, business, audience, format } = body;

    if (!campaignTheme || !business || !audience || !format) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    if (!['appearing', 'voiceover', 'textonly'].includes(format)) {
      return NextResponse.json(
        { error: 'Formato inválido' },
        { status: 400 }
      );
    }

    const prompt = buildScriptPrompt(
      campaignTheme,
      business,
      audience,
      format as 'appearing' | 'voiceover' | 'textonly'
    );

    const response = await generateScript(prompt);

    // Parse the JSON response from the AI
    let scriptData;
    try {
      // Find JSON in the response (in case there's extra text)
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        scriptData = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('No JSON found in response');
      }
    } catch (parseError) {
      console.error('Error parsing AI response:', parseError);
      console.error('Raw response:', response);
      return NextResponse.json(
        { error: 'Erro ao processar resposta da IA' },
        { status: 500 }
      );
    }

    return NextResponse.json(scriptData);
  } catch (error) {
    console.error('Script generation error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}


