import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl tracking-tighter">
              DAHI<span className="text-brand-accent">CONSULTANTS</span>
            </h3>
            <p className="text-white/60 leading-relaxed max-w-xs">
              Professional Quantity Surveying and Construction Cost Consultancy providing accuracy, reliability, and precision in every project.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Projects', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-brand-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-8">Services</h4>
            <ul className="space-y-4">
              {['BOQ Preparation', 'Cost Estimation', 'Tender Docs', 'Project Control', 'Contract Admin', 'Feasibility Studies'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-white/60 hover:text-brand-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-accent shrink-0" />
                <span className="text-white/60">Suite 4, Professional Towers, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-brand-accent shrink-0" />
                <span className="text-white/60">0722517377</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-brand-accent shrink-0" />
                <span className="text-white/60">dahiconsultants@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © {currentYear} DAHI Consultants. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-brand-accent">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent">Terms of Service</a>
            <a href="#" className="hover:text-brand-accent">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
