'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useThemeContext } from '@/context/ThemeContext';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function ThemedNavbar() {
  const { currentTheme } = useThemeContext();
  const { design, colors } = currentTheme;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBorderRadius = () => {
    switch (design.borderRadius) {
      case 'none': return 'rounded-none';
      case 'small': return 'rounded';
      case 'medium': return 'rounded-lg';
      case 'large': return 'rounded-xl';
      case 'full': return 'rounded-full';
      default: return 'rounded-lg';
    }
  };

  // Floating Navbar (Elegant, Playful)
  if (design.navStyle === 'floating') {
    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto"
      >
        <div 
          className={`px-2 py-2 ${getBorderRadius()} backdrop-blur-xl flex items-center gap-1`}
          style={{ 
            backgroundColor: `${colors.backgroundAlt}95`,
            border: `1px solid ${colors.border}`,
            boxShadow: `0 8px 32px ${colors.primary}15`
          }}
        >
          <a href="#home" className={`px-4 py-2 font-bold ${getBorderRadius()}`} style={{ color: colors.primary }}>
            HS
          </a>
          <div className="hidden md:flex items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-all ${getBorderRadius()} hover:bg-opacity-10`}
                style={{ color: colors.textMuted }}
              >
                {item.name}
              </a>
            ))}
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2" style={{ color: colors.text }}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-2 p-4 ${getBorderRadius()} backdrop-blur-xl md:hidden`}
              style={{ backgroundColor: `${colors.backgroundAlt}95`, border: `1px solid ${colors.border}` }}
            >
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-center" style={{ color: colors.text }}>
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    );
  }

  // Fixed Navbar (Corporate)
  if (design.navStyle === 'fixed') {
    return (
      <nav 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ 
          backgroundColor: isScrolled ? colors.backgroundAlt : 'transparent',
          borderBottom: isScrolled ? `1px solid ${colors.border}` : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-xl font-bold" style={{ color: colors.primary }}>
              Hassan<span style={{ color: colors.text }}>Sarwar</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:opacity-80" style={{ color: colors.textMuted }}>
                  {item.name}
                </a>
              ))}
              <a href="#contact" className={`px-4 py-2 text-sm font-medium ${getBorderRadius()}`} style={{ backgroundColor: colors.primary, color: colors.background }}>
                Hire Me
              </a>
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden" style={{ color: colors.text }}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden overflow-hidden" style={{ backgroundColor: colors.backgroundAlt }}>
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2" style={{ color: colors.text }}>
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
  }

  // Minimal Navbar
  if (design.navStyle === 'minimal') {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#home" className="font-mono text-sm" style={{ color: colors.primary }}>HS.</a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a key={item.name} href={item.href} className="font-mono text-xs" style={{ color: colors.textMuted }}>
                {String(index + 1).padStart(2, '0')}. {item.name}
              </a>
            ))}
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden font-mono text-xs" style={{ color: colors.text }}>
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 flex items-center justify-center" style={{ backgroundColor: colors.background }}>
              <div className="text-center space-y-6">
                {navItems.map((item, index) => (
                  <motion.a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                    className="block text-2xl font-mono" style={{ color: colors.text }}>
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
  }

  // Transparent Navbar (Bold)
  if (design.navStyle === 'transparent') {
    return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-6'}`}
        style={{ backgroundColor: isScrolled ? `${colors.background}90` : 'transparent', backdropFilter: isScrolled ? 'blur(10px)' : 'none' }}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="#home" className="text-2xl font-black tracking-tighter" style={{ color: colors.primary }}>
            HS
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-bold uppercase tracking-wider transition-colors" style={{ color: colors.text }}>
                {item.name}
              </a>
            ))}
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden" style={{ color: colors.text }}>
            <Menu size={28} />
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              className="fixed inset-y-0 right-0 w-full max-w-sm p-8 flex flex-col justify-center" style={{ backgroundColor: colors.backgroundAlt }}>
              <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6" style={{ color: colors.text }}>
                <X size={28} />
              </button>
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-black py-4" style={{ color: colors.text }}>
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
  }

  // Solid Navbar (Default)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: colors.backgroundAlt, borderBottom: `1px solid ${colors.border}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl font-bold" style={{ color: colors.primary }}>HS</span>
            <span className="text-sm" style={{ color: colors.textMuted }}>Portfolio</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm transition-colors hover:opacity-80" style={{ color: colors.textMuted }}>
                {item.name}
              </a>
            ))}
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden" style={{ color: colors.text }}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            className="md:hidden p-4" style={{ backgroundColor: colors.backgroundAlt }}>
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-3" style={{ color: colors.text }}>
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
