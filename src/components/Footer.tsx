import { motion } from 'framer-motion';
import { Send, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-32 pb-12 overflow-hidden px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">LOYIHANI BOSHLASHGA <br /> <span className="text-gradient">TAYYORMISIZ?</span></h2>
            <p className="max-w-md mx-auto text-gray-400 text-lg mb-12">
              Keling, birgalikda ajoyib narsa yaratamiz. Hamkorlik yoki shunchaki savollar uchun bemalol yozing.
            </p>
            <motion.a 
              href="https://t.me/asrorcodex"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-[2rem] text-xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Bog'lanish
              <Send className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xl font-black tracking-tighter">ASRORBEK <span className="text-gray-500">BOTIROV</span></span>
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              <span className="text-xs font-mono text-gray-500">FULL STACK DASTURCHI</span>
            </div>
            <p className="text-sm text-gray-500 font-mono italic">
              Kelajakni har bir pikselda qurmoqdaman.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: '#' },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all"
              >
                <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-12 text-[10px] uppercase tracking-[0.3em] text-gray-600 font-mono">
          <p>© 2024 ASRORBEK BOTIROV. BARCHA HUQUQLAR HIMOAYALANGAN.</p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            Yuqoriga qaytish <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
