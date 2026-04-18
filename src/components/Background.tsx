import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-blue/20 blur-[120px] rounded-full animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-purple/20 blur-[120px] rounded-full animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-neon-pink/10 blur-[100px] rounded-full animate-pulse-slow" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
    </div>
  );
}
