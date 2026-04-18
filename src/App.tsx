/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import WorkProcess from './components/sections/WorkProcess';
import QRGenerator from './components/sections/QRGenerator';
import SkillsAndFAQ from './components/sections/SkillsAndFAQ';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-neon-blue/20 selection:text-neon-blue overflow-x-hidden">
      <Background />
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink z-(60) origin-left"
        style={{ scaleX }}
      />

      <main>
        <Hero />
        
        {/* About Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto border-y border-white/5 bg-white/[0.01]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="text-3xl md:text-5xl font-black leading-[1.1]">
              KUUTILGANIDAN <br />
              <span className="text-gray-500 italic">YUQORI NATIJA.</span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-400 leading-relaxed font-medium">
                Tajribali Full Stack dasturchi sifatida men tasavvur va ijro o'rtasidagi ko'prikni quraman. 
                React, Node.js va MongoDB bo'yicha chuqur bilimlarim bilan real muammolarni hal qiluvchi professional veb-yechimlarni ishlab chiqaman.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-mono text-neon-blue uppercase tracking-widest">
                <span>[ ZAMONAVIY VEB ]</span>
                <span>[ INNOVATSION DIZAYN ]</span>
                <span>[ SIFATLI KOD ]</span>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <WorkProcess />
        <Services />
        <QRGenerator />
        <SkillsAndFAQ />
      </main>

      <Footer />
    </div>
  );
}
