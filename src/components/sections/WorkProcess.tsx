import { motion } from 'framer-motion';
import { WORK_PROCESS } from '../../constants';

export default function WorkProcess() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">ISH <span className="text-gray-500">JARAYONI</span></h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg">
          Har bir loyihani yuqori sifatda topshirish uchun amal qiladigan tizimli ketma-ketligim.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {WORK_PROCESS.map((process, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-8 glass rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 text-9xl font-black text-white/[0.03] group-hover:text-white/[0.07] transition-colors duration-500 italic">
              {index + 1}
            </div>
            <div className="relative z-10">
              <div className="text-neon-blue font-mono mb-4">0{index + 1} /</div>
              <h3 className="text-2xl font-bold mb-4">{process.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                {process.description}
              </p>
            </div>
            
            {/* Hover glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
