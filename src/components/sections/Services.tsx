import { motion } from 'framer-motion';
import { Layout, Server, Cloud } from 'lucide-react';
import { SERVICES, STATS } from '../../constants';
import { useEffect, useState, useRef } from 'react';

const icons: Record<string, any> = {
  Layout: Layout,
  Server: Server,
  Cloud: Cloud,
};

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Services() {
  return (
    <section className="py-32 bg-white/[0.02] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-white">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-mono uppercase tracking-[0.3em] text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 glass rounded-[2.5rem] hover:bg-white/[0.05] transition-all duration-500 border border-white/5 hover:border-white/20"
              >
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-7 h-7 text-neon-blue group-hover:text-neon-purple transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-3 py-1 glass rounded-full ring-1 ring-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Decorative blurred circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
