# 🧭 GPS Marketing e Vendas

Sistema de geração de campanhas de marketing personalizadas usando Inteligência Artificial.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue)

## ✨ Funcionalidades

### 📊 Gerador de Campanhas
- Quiz interativo para coletar informações do negócio
- Seleção visual de meses
- Geração de 4 semanas de campanhas personalizadas
- Cada semana inclui:
  - Tema da campanha
  - Script de WhatsApp pronto para copiar
  - Ideias de Reels com hook e roteiro
  - Posts com legenda e CTA
  - Sequência de Stories
  - Anúncio com dicas de segmentação
  - Checklist de ações

### 🎬 Gerador de Roteiros
- Cria roteiros de vídeo de 30 segundos
- 3 formatos disponíveis:
  - **Aparecendo e Falando**: Você na câmera
  - **Voz em Off**: Narração com imagens
  - **Texto na Tela**: Sem narração, apenas texto

## 🚀 Deploy na Vercel

### 1. Preparar o repositório

```bash
# Clone ou copie o projeto
cd gps-marketing

# Inicialize o git (se ainda não tiver)
git init
git add .
git commit -m "Initial commit"
```

### 2. Deploy pela Vercel CLI

```bash
# Instale a Vercel CLI
npm i -g vercel

# Deploy
vercel

# Siga as instruções e quando perguntado sobre variáveis de ambiente,
# adicione: OPENAI_API_KEY
```

### 3. Deploy pelo Dashboard da Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Importe o repositório
3. Adicione a variável de ambiente:
   - `OPENAI_API_KEY`: Sua chave da OpenAI

## 🔧 Desenvolvimento Local

### Pré-requisitos
- Node.js 18+
- Conta na OpenAI com API Key

### Instalação

```bash
# Clone o projeto
cd gps-marketing

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# Crie um arquivo .env.local com:
echo "OPENAI_API_KEY=sua-chave-aqui" > .env.local

# Execute em modo de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
gps-marketing/
├── app/
│   ├── page.tsx              # Página inicial (Quiz)
│   ├── resultado/page.tsx    # Resultados das campanhas
│   ├── roteiros/page.tsx     # Gerador de roteiros
│   └── api/
│       ├── generate-campaign/route.ts
│       └── generate-script/route.ts
├── components/
│   ├── Quiz.tsx              # Quiz interativo
│   ├── MonthSelector.tsx     # Seletor de meses
│   ├── WeekCard.tsx          # Card expandível por semana
│   └── ScriptGenerator.tsx   # Gerador de roteiros
├── lib/
│   ├── calendar-2026.ts      # Calendário de datas
│   ├── openai.ts             # Cliente OpenAI
│   └── prompts.ts            # Prompts da IA
└── vercel.json               # Configuração Vercel
```

## 🎨 Tecnologias

- **Framework**: Next.js 16 (App Router)
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **IA**: OpenAI GPT-4o-mini
- **Deploy**: Vercel

## 📋 Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `OPENAI_API_KEY` | Chave de API da OpenAI |

## 💡 Dicas de Uso

1. **Seja específico** ao preencher o quiz - quanto mais detalhes, melhores as campanhas
2. **Explore todas as abas** de cada semana - há muito conteúdo pronto
3. **Use o botão de copiar** para transferir textos diretamente
4. **Gere roteiros** para as campanhas que mais gostar

## 📄 Licença

Projeto privado - Todos os direitos reservados.

---

Desenvolvido com ❤️ e IA
