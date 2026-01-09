'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Zap, Star } from 'lucide-react';
import Image from 'next/image';
import { useThemeContext } from '@/context/ThemeContext';

export default function ThemedHero() {
  const { currentTheme } = useThemeContext();
  const { design, colors } = currentTheme;

  const getBorderRadius = () => {
    switch (design.borderRadius) {
      case 'none': return 'rounded-none';
      case 'small': return 'rounded';
      case 'medium': return 'rounded-lg';
      case 'large': return 'rounded-2xl';
      case 'full': return 'rounded-full';
      default: return 'rounded-lg';
    }
  };

  const getButtonStyle = () => {
    const base = `px-8 py-4 font-semibold transition-all duration-300 ${getBorderRadius()}`;
    switch (design.buttonStyle) {
      case 'solid':
        return `${base} text-black hover:opacity-90`;
      case 'outline':
        return `${base} bg-transparent border-2 hover:bg-opacity-10`;
      case 'ghost':
        return `${base} bg-transparent hover:bg-opacity-10`;
      case 'gradient':
        return `${base} text-black bg-gradient-to-r hover:scale-105`;
      case 'pill':
        return `${base} rounded-full text-black`;
      default:
        return base;
    }
  };

  const getAnimation = () => {
    switch (design.animation) {
      case 'none': return {};
      case 'subtle': return { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } };
      case 'dynamic': return { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, type: 'spring' as const } };
      case 'playful': return { initial: { opacity: 0, y: 50, rotate: -5 }, animate: { opacity: 1, y: 0, rotate: 0 }, transition: { duration: 0.7, type: 'spring' as const, bounce: 0.4 } };
      case 'elegant': return { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: 'easeOut' as const } };
      default: return { initial: { opacity: 0 }, animate: { opacity: 1 } };
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/thehassans', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/hassanscode', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hassan.sarwar21@gmail.com', label: 'Email' },
  ];

  // Centered Layout (Gold Luxury, Rose Elegant)
  if (design.heroLayout === 'centered') {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: colors.background }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: colors.primary }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ backgroundColor: colors.accent }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div {...getAnimation()} className="mb-8">
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full animate-pulse" style={{ backgroundColor: colors.primary, opacity: 0.2 }} />
              <div className={`relative w-full h-full ${getBorderRadius()} overflow-hidden border-4`} style={{ borderColor: colors.primary }}>
                <Image src="/profile.png" alt="Hassan Sarwar" fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>

          <motion.div {...getAnimation()} transition={{ delay: 0.2 }}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 mb-6 ${getBorderRadius()}`} style={{ backgroundColor: colors.backgroundAlt, border: `1px solid ${colors.border}` }}>
              <Sparkles className="w-4 h-4" style={{ color: colors.primary }} />
              <span style={{ color: colors.textMuted }}>AI/ML/Gen-AI Developer</span>
            </div>
          </motion.div>

          <motion.h1 {...getAnimation()} transition={{ delay: 0.3 }} className="text-5xl md:text-7xl font-bold mb-6" style={{ color: colors.text }}>
            Hassan <span style={{ color: colors.primary }}>Sarwar</span>
          </motion.h1>

          <motion.p {...getAnimation()} transition={{ delay: 0.4 }} className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto" style={{ color: colors.textMuted }}>
            Building intelligent systems with LangChain, Hugging Face & RAG
          </motion.p>

          <motion.div {...getAnimation()} transition={{ delay: 0.5 }} className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#contact" className={getButtonStyle()} style={{ backgroundColor: colors.primary }}>
              Get in Touch
            </a>
            <a href="#projects" className={`${getButtonStyle()} border`} style={{ borderColor: colors.border, color: colors.text }}>
              View Projects
            </a>
          </motion.div>

          <motion.div {...getAnimation()} transition={{ delay: 0.6 }} className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                className={`p-3 ${getBorderRadius()} transition-all hover:scale-110`}
                style={{ backgroundColor: colors.backgroundAlt, color: colors.textMuted }}>
                <social.icon size={24} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ArrowDown style={{ color: colors.textMuted }} />
        </motion.div>
      </section>
    );
  }

  // Split Layout (Ocean Blue, Cyber Teal)
  if (design.heroLayout === 'split') {
    return (
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: colors.background }}>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...getAnimation()} className="order-2 md:order-1">
            <div className={`inline-flex items-center gap-2 px-4 py-2 mb-6 ${getBorderRadius()}`} style={{ backgroundColor: colors.backgroundAlt }}>
              <Zap className="w-4 h-4" style={{ color: colors.primary }} />
              <span style={{ color: colors.primary }}>Available for Projects</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: colors.text }}>
              Hi, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}>
                Hassan Sarwar
              </span>
            </h1>

            <p className="text-lg mb-8" style={{ color: colors.textMuted }}>
              Generative AI Engineer specializing in LLM-powered applications, RAG systems, and full-stack development. Turning complex AI concepts into production-ready solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className={getButtonStyle()} style={{ backgroundColor: colors.primary }}>
                Start a Project
              </a>
              <a href="#about" className={`${getButtonStyle()}`} style={{ backgroundColor: colors.backgroundAlt, color: colors.text }}>
                Learn More
              </a>
            </div>

            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="transition-colors hover:scale-110" style={{ color: colors.textMuted }}>
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div {...getAnimation()} transition={{ delay: 0.3 }} className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl opacity-30" style={{ backgroundColor: colors.primary }} />
              <div className={`relative w-72 h-72 md:w-96 md:h-96 ${getBorderRadius()} overflow-hidden border-2`} style={{ borderColor: colors.primary }}>
                <Image src="/profile.png" alt="Hassan Sarwar" fill className="object-cover" priority />
              </div>
              <div className={`absolute -bottom-4 -right-4 px-6 py-3 ${getBorderRadius()}`} style={{ backgroundColor: colors.primary }}>
                <span className="text-black font-bold">5+ Years Exp</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Fullscreen Layout (Sunset Orange, Midnight Indigo)
  if (design.heroLayout === 'fullscreen') {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: colors.background }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 50% 50%, ${colors.primary}, transparent 70%)` }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div {...getAnimation()}>
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ background: `conic-gradient(${colors.primary}, ${colors.accent}, ${colors.primary})` }} />
              <div className="absolute inset-1 rounded-full overflow-hidden">
                <Image src="/profile.png" alt="Hassan Sarwar" fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>

          <motion.h1 {...getAnimation()} transition={{ delay: 0.2 }} className="text-6xl md:text-8xl font-black mb-4 tracking-tight" style={{ color: colors.text }}>
            HASSAN
            <span className="block" style={{ color: colors.primary }}>SARWAR</span>
          </motion.h1>

          <motion.div {...getAnimation()} transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-4 text-lg mb-12" style={{ color: colors.textMuted }}>
            <span className="flex items-center gap-2">
              <Star className="w-5 h-5" style={{ color: colors.primary }} /> AI Engineer
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-5 h-5" style={{ color: colors.primary }} /> ML Expert
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-5 h-5" style={{ color: colors.primary }} /> Full Stack
            </span>
          </motion.div>

          <motion.div {...getAnimation()} transition={{ delay: 0.6 }} className="flex justify-center gap-6">
            <a href="#projects" className={`${getButtonStyle()} text-xl px-12 py-5`} style={{ backgroundColor: colors.primary }}>
              Explore Work
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: `linear-gradient(to top, ${colors.background}, transparent)` }} />
      </section>
    );
  }

  // Asymmetric Layout (Purple Dream, Warm Coral)
  if (design.heroLayout === 'asymmetric') {
    return (
      <section id="home" className="relative min-h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{ backgroundColor: colors.primary }} />
        
        <div className="container mx-auto px-4 py-20 min-h-screen flex items-center">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <motion.div {...getAnimation()} className="md:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-1 rounded-full" style={{ backgroundColor: colors.primary }} />
                <span className="text-sm font-medium" style={{ color: colors.primary }}>WELCOME TO MY WORLD</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: colors.text }}>
                Creative
                <span className="block" style={{ color: colors.primary }}>Developer</span>
                <span className="block text-3xl md:text-4xl font-normal" style={{ color: colors.textMuted }}>& AI Enthusiast</span>
              </h1>

              <p className="text-lg mb-10 max-w-lg" style={{ color: colors.textMuted }}>
                Crafting digital experiences that blend creativity with cutting-edge AI technology. Let's build something amazing together.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className={`${getButtonStyle()} px-10`} style={{ backgroundColor: colors.primary }}>
                  Say Hello 👋
                </a>
                <a href="#projects" className={getButtonStyle()} style={{ backgroundColor: 'transparent', border: `2px solid ${colors.border}`, color: colors.text }}>
                  See My Work
                </a>
              </div>
            </motion.div>

            <motion.div {...getAnimation()} transition={{ delay: 0.4 }} className="md:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl rotate-6" style={{ backgroundColor: colors.primary, opacity: 0.2 }} />
                <div className="absolute -inset-4 rounded-3xl -rotate-6" style={{ backgroundColor: colors.accent, opacity: 0.2 }} />
                <div className={`relative ${getBorderRadius()} overflow-hidden`}>
                  <Image src="/profile.png" alt="Hassan Sarwar" width={500} height={600} className="object-cover" priority />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Minimal Layout (Emerald Forest, Monochrome Elite)
  if (design.heroLayout === 'minimal') {
    return (
      <section id="home" className="relative min-h-screen flex items-center" style={{ backgroundColor: colors.background }}>
        <div className="container mx-auto px-4 py-20">
          <motion.div {...getAnimation()} className="max-w-3xl">
            <p className="text-sm font-mono mb-4" style={{ color: colors.textMuted }}>// Hello, I am</p>
            
            <h1 className="text-4xl md:text-6xl font-light mb-6" style={{ color: colors.text }}>
              Hassan Sarwar
            </h1>
            
            <div className="w-24 h-px mb-8" style={{ backgroundColor: colors.primary }} />
            
            <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed" style={{ color: colors.textMuted }}>
              AI/ML Engineer building intelligent systems.<br />
              Focused on simplicity and impact.
            </p>

            <div className="flex gap-8 mb-16">
              <a href="#contact" className="font-mono text-sm hover:underline" style={{ color: colors.primary }}>
                → Contact
              </a>
              <a href="#projects" className="font-mono text-sm hover:underline" style={{ color: colors.primary }}>
                → Projects
              </a>
              <a href="#about" className="font-mono text-sm hover:underline" style={{ color: colors.primary }}>
                → About
              </a>
            </div>

            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity" style={{ color: colors.textMuted }}>
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Default fallback
  return (
    <section id="home" className="min-h-screen flex items-center justify-center" style={{ backgroundColor: colors.background }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold" style={{ color: colors.text }}>Hassan Sarwar</h1>
        <p style={{ color: colors.textMuted }}>AI/ML Developer</p>
      </div>
    </section>
  );
}
