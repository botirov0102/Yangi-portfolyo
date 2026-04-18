import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';
import { SKILLS, FAQS } from '../../constants';
import { useState } from 'react';

export default function SkillsAndFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = SKILLS.filter(skill => 
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Skills Section */}
        <div>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">TEXNOLOGIYALAR</h2>
            <p className="text-gray-400 text-lg mb-8">
              G'oyalarni hayotga tatbiq etish uchun foydalanadigan zamonaviy vositalarim.
            </p>
            
            <div className="relative">
              <input 
                type="text"
                placeholder="Texnologiyalarni qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-12 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all text-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="group p-4 glass rounded-2xl border border-white/5 hover:border-neon-blue/30 hover:bg-neon-blue/5 transition-all cursor-default"
                >
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-tighter mb-1">{skill.category}</p>
                  <p className="font-bold text-gray-200 group-hover:text-white transition-colors">{skill.name}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
           <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">KO'P <span className="text-gray-500">SO'RALADIGANLAR</span></h2>
            <p className="text-gray-400 text-lg">
              Ish jarayoni, narxlar va hamkorlik bo'yicha tez-tez beriladigan savollar.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className="glass rounded-[2rem] border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-xl font-bold">{faq.question}</span>
                  <div className={`p-2 glass rounded-full ring-1 ring-white/10 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    {openFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-8 pb-8 text-gray-400 leading-relaxed text-lg border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
