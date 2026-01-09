'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Mail, 
  LogOut, 
  Check, 
  Loader2, 
  Trash2,
  User,
  Calendar,
  MessageSquare,
  Settings,
  Home
} from 'lucide-react';
import { themes, Theme } from '@/lib/themes';

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'themes' | 'messages'>('themes');
  const [currentTheme, setCurrentTheme] = useState<string>('gold-luxury');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (authenticated) {
      fetchData();
    }
  }, [authenticated]);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/check');
      const data = await res.json();
      if (!data.authenticated) {
        router.push('/admin/login');
      } else {
        setAuthenticated(true);
      }
    } catch {
      router.push('/admin/login');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [themeRes, contactsRes] = await Promise.all([
        fetch('/api/settings/theme'),
        fetch('/api/contacts'),
      ]);
      
      const themeData = await themeRes.json();
      const contactsData = await contactsRes.json();
      
      setCurrentTheme(themeData.themeId || 'gold-luxury');
      setContacts(contactsData.contacts || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleThemeChange = async (themeId: string) => {
    setSaving(true);
    try {
      const res = await fetch('/api/settings/theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ themeId }),
      });
      
      if (res.ok) {
        setCurrentTheme(themeId);
      }
    } catch (error) {
      console.error('Error saving theme:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    
    try {
      const res = await fetch(`/api/contacts?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setContacts(contacts.filter(c => c._id !== id));
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  if (!authenticated || loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="bg-[#1a1a1a] border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Settings className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold text-white">Admin Panel</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="/" 
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                <Home className="w-4 h-4" />
                View Site
              </a>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-red-400 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('themes')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'themes'
                ? 'bg-amber-500 text-black'
                : 'bg-[#1a1a1a] text-gray-400 hover:text-white'
            }`}
          >
            <Palette className="w-5 h-5" />
            Theme Customization
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'messages'
                ? 'bg-amber-500 text-black'
                : 'bg-[#1a1a1a] text-gray-400 hover:text-white'
            }`}
          >
            <Mail className="w-5 h-5" />
            Messages
            {contacts.length > 0 && (
              <span className="ml-2 px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
                {contacts.length}
              </span>
            )}
          </button>
        </div>

        {/* Theme Customization Tab */}
        {activeTab === 'themes' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Choose Your Theme</h2>
            <p className="text-gray-400 mb-8">Select a theme to customize the look and feel of your portfolio.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {themes.map((theme: Theme) => (
                <motion.button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  disabled={saving}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                    currentTheme === theme.id
                      ? 'border-amber-500 bg-amber-500/10'
                      : 'border-gray-700 bg-[#1a1a1a] hover:border-gray-600'
                  }`}
                >
                  {currentTheme === theme.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                  )}
                  
                  {/* Color Preview */}
                  <div className="flex gap-1 mb-3">
                    <div 
                      className="w-8 h-8 rounded-lg" 
                      style={{ backgroundColor: theme.colors.primary }}
                    />
                    <div 
                      className="w-8 h-8 rounded-lg" 
                      style={{ backgroundColor: theme.colors.primaryLight }}
                    />
                    <div 
                      className="w-8 h-8 rounded-lg" 
                      style={{ backgroundColor: theme.colors.background }}
                    />
                  </div>
                  
                  <h3 className="font-semibold text-white mb-1">{theme.name}</h3>
                  <p className="text-xs text-gray-400">{theme.description}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 text-xs bg-gray-700 text-gray-300 rounded">
                    {theme.style}
                  </span>
                </motion.button>
              ))}
            </div>

            {saving && (
              <div className="mt-4 flex items-center gap-2 text-amber-500">
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving theme...
              </div>
            )}
          </motion.div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Contact Messages</h2>
            
            {contacts.length === 0 ? (
              <div className="text-center py-16 bg-[#1a1a1a] rounded-xl border border-gray-800">
                <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">No messages yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <motion.div
                    key={contact._id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                          <User className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{contact.name}</h3>
                          <p className="text-sm text-amber-400">{contact.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </div>
                        <button
                          onClick={() => handleDeleteContact(contact._id)}
                          className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-300 whitespace-pre-wrap">{contact.message}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
