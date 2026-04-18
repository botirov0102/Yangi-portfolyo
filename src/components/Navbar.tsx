import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="flex items-center gap-8 px-6 py-3 glass rounded-full ring-1 ring-white/10">
        <button 
          onClick={() => scrollTo('hero')} 
          className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
        >
          Asosiy
        </button>
        <button 
          onClick={() => scrollTo('projects')} 
          className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
        >
          Loyihalar
        </button>
        <button 
          onClick={() => scrollTo('skills')} 
          className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
        >
          Ko'nikmalar
        </button>
        <a 
          href="https://t.me/asrorcodex" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-black bg-white rounded-full transition-transform active:scale-95"
        >
          Bog'lanish
          <Send className="w-4 h-4" />
        </a>
      </div>
    </motion.nav>
  );
}
