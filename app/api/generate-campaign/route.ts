import { NextResponse } from 'next/server';
import { generateCampaign } from '@/lib/openai';
import { buildCampaignPrompt } from '@/lib/prompts';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { business, objective, audience, month } = body;

    if (!business || !objective || !audience || !month) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    const prompt = buildCampaignPrompt({
      business,
      objective,
      audience,
      month
    });

    const response = await generateCampaign(prompt);

    // Parse the JSON response from the AI
    let campaignData;
    try {
      // Find JSON in the response (in case there's extra text)
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        campaignData = JSON.parse(jsonMatch[0]);
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

    return NextResponse.json(campaignData);
  } catch (error) {
    console.error('Campaign generation error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}


