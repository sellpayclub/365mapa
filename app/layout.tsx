import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "GPS Marketing e Vendas | Campanhas Personalizadas com IA",
  description: "Gere campanhas de marketing e vendas personalizadas para o seu negócio usando inteligência artificial. 4 semanas de conteúdo pronto para usar.",
  keywords: "marketing, vendas, campanhas, IA, inteligência artificial, redes sociais, WhatsApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-[#0a0a0f] bg-grid-pattern bg-radial-gradient">
          {children}
        </div>
      </body>
    </html>
  );
}
