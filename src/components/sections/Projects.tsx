import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">TANLANGAN <span className="text-gray-500">ISHAR</span></h2>
          <p className="max-w-md text-gray-400 text-lg">
            Loyihalarimning bir qismi — oddiy landing sahifalaridan murakkab veb-ekotizimlargacha.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="px-6 py-3 rounded-full glass-dark border border-white/5 text-sm font-mono text-gray-400">
            Jami loyihalar: <span className="text-white">50+</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] glass border border-white/10 group-hover:border-white/25 transition-all duration-500 flex items-center justify-center">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col items-center gap-4 px-8 text-center">
                 <div className="flex flex-wrap justify-center gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md rounded-lg text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white text-black rounded-2xl flex items-center gap-2 font-bold shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Ko'rish <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            <div className="mt-8 px-2">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-neon-blue transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
