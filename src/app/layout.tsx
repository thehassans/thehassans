import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hassan Sarwar | AI/ML/Gen-AI Developer",
  description: "Generative AI Engineer with expertise in LangChain, Hugging Face, RAG, and full-stack development. Building intelligent systems for text, image, and video generation.",
  keywords: ["AI Developer", "Machine Learning", "Generative AI", "LangChain", "Hugging Face", "RAG", "Full Stack Developer", "Hassan Sarwar"],
  authors: [{ name: "Hassan Sarwar" }],
  openGraph: {
    title: "Hassan Sarwar | AI/ML/Gen-AI Developer",
    description: "Generative AI Engineer building LLM-powered applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
