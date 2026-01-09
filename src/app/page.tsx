'use client';

import ThemedNavbar from "@/components/ThemedNavbar";
import ThemedHero from "@/components/ThemedHero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ThemedProjects from "@/components/ThemedProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { DynamicThemeStyles } from "@/components/DynamicTheme";
import { useThemeContext } from "@/context/ThemeContext";

export default function Home() {
  const { currentTheme } = useThemeContext();
  
  return (
    <main 
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <DynamicThemeStyles />
      <ThemedNavbar />
      <ThemedHero />
      <About />
      <Skills />
      <ThemedProjects />
      <Contact />
      <Footer />
    </main>
  );
}
