import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-brand-blue">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Architecture"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-12 h-[2px] bg-brand-accent" />
            <span className="text-brand-accent uppercase tracking-[0.3em] font-bold text-sm">Dahi Consultants Kenya</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.95] tracking-tighter"
          >
            PRECISION IN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-300 italic font-serif font-normal">Construction</span> <br />
            COST CONTROL.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-light"
          >
            Nairobi's Trusted Quantity Surveyors and Cost Consultants. Delivering financial accuracy and project integrity for Kenya's most ambitious construction projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-brand-accent text-white font-bold rounded-full overflow-hidden shadow-xl shadow-brand-accent/20 transition-all hover:pr-12"
            >
              <span className="relative z-10">Request Consultation</span>
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </a>
            <a
              href="#projects"
              className="group flex items-center gap-3 text-white font-semibold text-lg hover:text-brand-accent transition-colors"
            >
              <PlayCircle className="w-8 h-8" />
              <span>View Our Portfolio</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent" />
      </motion.div>

      {/* Side Label */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-12 pointer-events-none pr-6">
        <span className="rotate-90 text-white/10 font-display font-black text-6xl tracking-widest whitespace-nowrap">CONSULTANCY</span>
      </div>
    </section>
  );
}
