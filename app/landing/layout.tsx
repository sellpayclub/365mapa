import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GPS 365 | Sistema Estratégico de Marketing e Vendas",
  description: "O Sistema que diz EXATAMENTE o que fazer para vender todos os meses. Gere campanhas, conteúdos e ações comerciais em minutos.",
  keywords: "marketing, vendas, campanhas, estratégia, negócios, empreendedorismo",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={dmSans.className}>
      {children}
    </div>
  );
}
