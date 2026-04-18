import { motion } from 'framer-motion';
import { ChevronDown, Send, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-neon-blue/30 rounded-full glass mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-neon-blue animate-pulse" />
          <span className="text-xs font-mono text-neon-blue uppercase tracking-widest">Yangi loyihalar uchun ochiqman</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
          ASRORBEK <br />
          <span className="text-gradient">BOTIROV</span>
        </h1>

        <p className="max-w-xl mx-auto text-lg text-gray-400 font-medium mb-10 leading-relaxed">
          Full Stack dasturchi: yuqori sifatli raqamli tajribalar, innovatsion yechimlar va zamonaviy veb-texnologiyalar ustasi.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center gap-2 overflow-hidden transition-all"
          >
            <span className="relative z-10">Loyihalarni ko'rish</span>
            <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-10 transition-opacity" />
          </motion.button>

          <motion.a
            href="https://t.me/asrorcodex"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass text-white font-bold rounded-2xl border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
          >
            Telegram orqali bog'lanish
            <Send className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-mono">Pastga tushing</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
