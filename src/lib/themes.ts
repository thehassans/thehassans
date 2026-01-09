export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    accent: string;
    background: string;
    backgroundAlt: string;
    text: string;
    textMuted: string;
    border: string;
    gradient: string;
  };
  style: 'minimal' | 'bold' | 'elegant' | 'playful' | 'corporate';
}

export const themes: Theme[] = [
  {
    id: 'gold-luxury',
    name: 'Gold Luxury',
    description: 'Premium gold and amber with matte black',
    colors: {
      primary: '#f59e0b',
      primaryLight: '#fbbf24',
      primaryDark: '#d97706',
      accent: '#fcd34d',
      background: '#0a0a0a',
      backgroundAlt: '#1a1a1a',
      text: '#ffffff',
      textMuted: '#9ca3af',
      border: '#374151',
      gradient: 'from-amber-400 via-yellow-300 to-amber-500',
    },
    style: 'elegant',
  },
  {
    id: 'ocean-blue',
    name: 'Ocean Blue',
    description: 'Calm blue tones with deep navy',
    colors: {
      primary: '#3b82f6',
      primaryLight: '#60a5fa',
      primaryDark: '#2563eb',
      accent: '#93c5fd',
      background: '#0f172a',
      backgroundAlt: '#1e293b',
      text: '#ffffff',
      textMuted: '#94a3b8',
      border: '#334155',
      gradient: 'from-blue-400 via-cyan-300 to-blue-500',
    },
    style: 'corporate',
  },
  {
    id: 'emerald-forest',
    name: 'Emerald Forest',
    description: 'Fresh green with dark forest vibes',
    colors: {
      primary: '#10b981',
      primaryLight: '#34d399',
      primaryDark: '#059669',
      accent: '#6ee7b7',
      background: '#022c22',
      backgroundAlt: '#064e3b',
      text: '#ffffff',
      textMuted: '#9ca3af',
      border: '#065f46',
      gradient: 'from-emerald-400 via-green-300 to-emerald-500',
    },
    style: 'minimal',
  },
  {
    id: 'sunset-orange',
    name: 'Sunset Orange',
    description: 'Warm orange and red sunset vibes',
    colors: {
      primary: '#f97316',
      primaryLight: '#fb923c',
      primaryDark: '#ea580c',
      accent: '#fdba74',
      background: '#1c1917',
      backgroundAlt: '#292524',
      text: '#ffffff',
      textMuted: '#a8a29e',
      border: '#44403c',
      gradient: 'from-orange-400 via-red-300 to-orange-500',
    },
    style: 'bold',
  },
  {
    id: 'purple-dream',
    name: 'Purple Dream',
    description: 'Mystical purple with violet accents',
    colors: {
      primary: '#8b5cf6',
      primaryLight: '#a78bfa',
      primaryDark: '#7c3aed',
      accent: '#c4b5fd',
      background: '#0f0a1e',
      backgroundAlt: '#1e1433',
      text: '#ffffff',
      textMuted: '#a1a1aa',
      border: '#3f3f46',
      gradient: 'from-violet-400 via-purple-300 to-violet-500',
    },
    style: 'playful',
  },
  {
    id: 'rose-elegant',
    name: 'Rose Elegant',
    description: 'Sophisticated rose and pink tones',
    colors: {
      primary: '#f43f5e',
      primaryLight: '#fb7185',
      primaryDark: '#e11d48',
      accent: '#fda4af',
      background: '#18181b',
      backgroundAlt: '#27272a',
      text: '#ffffff',
      textMuted: '#a1a1aa',
      border: '#3f3f46',
      gradient: 'from-rose-400 via-pink-300 to-rose-500',
    },
    style: 'elegant',
  },
  {
    id: 'cyber-teal',
    name: 'Cyber Teal',
    description: 'Futuristic teal with neon vibes',
    colors: {
      primary: '#14b8a6',
      primaryLight: '#2dd4bf',
      primaryDark: '#0d9488',
      accent: '#5eead4',
      background: '#0a1a1a',
      backgroundAlt: '#134e4a',
      text: '#ffffff',
      textMuted: '#9ca3af',
      border: '#115e59',
      gradient: 'from-teal-400 via-cyan-300 to-teal-500',
    },
    style: 'bold',
  },
  {
    id: 'midnight-indigo',
    name: 'Midnight Indigo',
    description: 'Deep indigo with electric accents',
    colors: {
      primary: '#6366f1',
      primaryLight: '#818cf8',
      primaryDark: '#4f46e5',
      accent: '#a5b4fc',
      background: '#0c0a1d',
      backgroundAlt: '#1e1b4b',
      text: '#ffffff',
      textMuted: '#94a3b8',
      border: '#312e81',
      gradient: 'from-indigo-400 via-blue-300 to-indigo-500',
    },
    style: 'corporate',
  },
  {
    id: 'warm-coral',
    name: 'Warm Coral',
    description: 'Friendly coral with warm undertones',
    colors: {
      primary: '#fb7185',
      primaryLight: '#fda4af',
      primaryDark: '#f43f5e',
      accent: '#fecdd3',
      background: '#1a1a1a',
      backgroundAlt: '#2d2d2d',
      text: '#ffffff',
      textMuted: '#9ca3af',
      border: '#404040',
      gradient: 'from-pink-400 via-rose-300 to-coral-500',
    },
    style: 'playful',
  },
  {
    id: 'monochrome-elite',
    name: 'Monochrome Elite',
    description: 'Clean black and white minimalism',
    colors: {
      primary: '#ffffff',
      primaryLight: '#f5f5f5',
      primaryDark: '#e5e5e5',
      accent: '#d4d4d4',
      background: '#000000',
      backgroundAlt: '#171717',
      text: '#ffffff',
      textMuted: '#737373',
      border: '#404040',
      gradient: 'from-gray-200 via-white to-gray-300',
    },
    style: 'minimal',
  },
];

export const getThemeById = (id: string): Theme => {
  return themes.find(t => t.id === id) || themes[0];
};
