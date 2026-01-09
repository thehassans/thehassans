'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, ArrowRight, Folder } from 'lucide-react';
import Link from 'next/link';
import { useThemeContext } from '@/context/ThemeContext';

const projects = [
  {
    title: 'Buysial',
    subtitle: 'AI-Powered E-commerce',
    description: 'Social commerce platform with AI product recommendations',
    link: '/projects/buysial',
    github: 'https://github.com/thehassans/buysial',
    tags: ['Next.js', 'AI', 'E-commerce'],
  },
  {
    title: 'Explore Holidays',
    subtitle: 'Travel Planning AI',
    description: 'AI travel assistant for personalized trip planning',
    link: '/projects/explore-holidays',
    github: 'https://github.com/thehassans/explore-holidays',
    tags: ['Python', 'LangChain', 'RAG'],
  },
  {
    title: 'Magnetic Clouds',
    subtitle: 'Weather Intelligence',
    description: 'ML-powered weather prediction with data visualization',
    link: '/projects/magnetic-clouds',
    github: 'https://github.com/thehassans/magnetic-clouds',
    tags: ['ML', 'Python', 'Data Science'],
  },
];

export default function ThemedProjects() {
  const { currentTheme } = useThemeContext();
  const { design, colors } = currentTheme;

  const getBorderRadius = () => {
    switch (design.borderRadius) {
      case 'none': return 'rounded-none';
      case 'small': return 'rounded';
      case 'medium': return 'rounded-lg';
      case 'large': return 'rounded-2xl';
      case 'full': return 'rounded-3xl';
      default: return 'rounded-lg';
    }
  };

  const getCardStyle = () => {
    switch (design.cardStyle) {
      case 'flat': return { backgroundColor: colors.backgroundAlt };
      case 'elevated': return { backgroundColor: colors.backgroundAlt, boxShadow: `0 10px 40px ${colors.primary}20` };
      case 'bordered': return { backgroundColor: 'transparent', border: `1px solid ${colors.border}` };
      case 'glass': return { backgroundColor: `${colors.backgroundAlt}80`, backdropFilter: 'blur(10px)' };
      case 'gradient': return { background: `linear-gradient(135deg, ${colors.backgroundAlt}, ${colors.background})` };
      default: return { backgroundColor: colors.backgroundAlt };
    }
  };

  // Grid Layout (Elegant, Corporate)
  if (design.cardStyle === 'elevated' || design.cardStyle === 'bordered') {
    return (
      <section id="projects" className="py-20 px-4" style={{ backgroundColor: colors.background }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 mb-6 ${getBorderRadius()}`} style={{ backgroundColor: colors.backgroundAlt }}>
              <Sparkles className="w-4 h-4" style={{ color: colors.primary }} />
              <span style={{ color: colors.textMuted }}>Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: colors.text }}>
              My <span style={{ color: colors.primary }}>Projects</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={project.link}>
                  <div className={`group h-full p-6 ${getBorderRadius()} transition-all duration-300 hover:scale-105`} style={getCardStyle()}>
                    <div className="flex items-center justify-between mb-4">
                      <Folder className="w-10 h-10" style={{ color: colors.primary }} />
                      <div className="flex gap-3">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                          <Github className="w-5 h-5 hover:scale-110 transition-transform" style={{ color: colors.textMuted }} />
                        </a>
                        <ExternalLink className="w-5 h-5" style={{ color: colors.textMuted }} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:underline" style={{ color: colors.text }}>{project.title}</h3>
                    <p className="text-sm mb-4" style={{ color: colors.textMuted }}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`px-2 py-1 text-xs ${getBorderRadius()}`} style={{ backgroundColor: colors.background, color: colors.primary }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // List Layout (Minimal, Flat)
  if (design.cardStyle === 'flat') {
    return (
      <section id="projects" className="py-20 px-4" style={{ backgroundColor: colors.background }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
            <p className="text-sm font-mono mb-2" style={{ color: colors.textMuted }}>// projects</p>
            <h2 className="text-3xl font-light" style={{ color: colors.text }}>Selected Work</h2>
            <div className="w-16 h-px mt-4" style={{ backgroundColor: colors.primary }} />
          </motion.div>

          <div className="space-y-1">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={project.link}>
                  <div className="group py-6 border-b flex items-center justify-between hover:pl-4 transition-all" style={{ borderColor: colors.border }}>
                    <div>
                      <h3 className="text-lg font-medium" style={{ color: colors.text }}>{project.title}</h3>
                      <p className="text-sm" style={{ color: colors.textMuted }}>{project.subtitle}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: colors.primary }} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12">
            <a href="https://github.com/thehassans" target="_blank" rel="noopener noreferrer" className="font-mono text-sm hover:underline" style={{ color: colors.primary }}>
              → View all on GitHub
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  // Glass/Gradient Layout (Playful, Bold)
  if (design.cardStyle === 'glass' || design.cardStyle === 'gradient') {
    return (
      <section id="projects" className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: colors.background }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10" style={{ backgroundColor: colors.primary }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4" style={{ color: colors.text }}>
              PROJECTS
            </h2>
            <p className="text-lg" style={{ color: colors.textMuted }}>Things I've built with passion</p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Link href={project.link}>
                  <div className={`group p-8 ${getBorderRadius()} transition-all duration-500 hover:scale-[1.02]`} style={getCardStyle()}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <span className="text-sm font-medium" style={{ color: colors.primary }}>{project.subtitle}</span>
                        <h3 className="text-2xl md:text-3xl font-bold mt-1" style={{ color: colors.text }}>{project.title}</h3>
                        <p className="mt-2" style={{ color: colors.textMuted }}>{project.description}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className={`px-3 py-1 text-sm ${getBorderRadius()}`} style={{ backgroundColor: `${colors.primary}20`, color: colors.primary }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className={`w-12 h-12 ${getBorderRadius()} flex items-center justify-center group-hover:scale-110 transition-transform`} style={{ backgroundColor: colors.primary }}>
                          <ArrowRight className="w-6 h-6 text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default fallback
  return (
    <section id="projects" className="py-20 px-4" style={{ backgroundColor: colors.background }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: colors.text }}>Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.title} href={project.link}>
              <div className={`p-6 ${getBorderRadius()}`} style={{ backgroundColor: colors.backgroundAlt }}>
                <h3 className="text-xl font-bold" style={{ color: colors.text }}>{project.title}</h3>
                <p style={{ color: colors.textMuted }}>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
