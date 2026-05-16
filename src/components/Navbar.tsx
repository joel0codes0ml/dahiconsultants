import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6',
        isScrolled ? 'bg-white/80 backdrop-blur-lg py-4 shadow-sm border-b border-brand-blue/5' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-brand-royal transition-colors">
            D
          </div>
          <span className={cn(
            "font-display font-bold text-2xl tracking-tighter transition-colors",
            isScrolled ? "text-brand-blue" : "text-white"
          )}>
            DAHI<span className="text-brand-accent">CONSULTANTS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "font-medium text-sm transition-all hover:text-brand-accent relative group uppercase tracking-widest",
                  isScrolled ? "text-brand-blue/80" : "text-white/80"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className={cn(
              "px-6 py-2.5 rounded-full font-semibold text-sm transition-all",
              isScrolled
                ? "bg-brand-blue text-white hover:bg-brand-royal"
                : "bg-white text-brand-blue hover:bg-brand-accent hover:text-white"
            )}
          >
            Request Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn("lg:hidden p-2", isScrolled ? "text-brand-blue" : "text-white")}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-brand-blue flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <h3 className="font-display font-bold text-2xl text-white">
              DAHI<span className="text-brand-accent">CONSULTANTS</span>
            </h3>
              <button className="text-white" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-3xl font-display font-semibold hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 w-full py-4 bg-brand-accent text-white rounded-xl font-bold text-center text-lg"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
