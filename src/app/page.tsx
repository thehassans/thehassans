'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
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
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
