import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mercadinho da Vólus",
  description: "Criação de um mercadinho para exibir uma lista de itens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} antialiased bg-gradient-to-r from-[#7bb65a] via-[#9cd67b] to-[#a8d48c] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
