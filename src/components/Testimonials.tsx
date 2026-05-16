import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Eng. Maina Kamau',
      role: 'Director, Nairobi City Housing',
      content: 'DAHI CONSULTANTS has been our trusted partner in several urban development projects. Their precision in cost planning is vital for our budget adherence.',
      image: 'https://i.pravatar.cc/150?u=maina'
    },
    {
      name: 'Jane Wanjiku',
      role: 'Project Manager, Coastal Heights',
      content: 'Excellence in every detail. Their team provided a comprehensive tender document that made our procurement process incredibly efficient.',
      image: 'https://i.pravatar.cc/150?u=jane'
    },
    {
      name: 'David Otieno',
      role: 'Architect, Lead Design Studio',
      content: 'The most reliable QS firm we have worked with in Kenya. They understand the synergy between design and budget constraints perfectly.',
      image: 'https://i.pravatar.cc/150?u=otieno'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-royal font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Client Feedback</span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-brand-blue tracking-tighter">
            The Standard of <span className="text-brand-accent italic font-serif">Trust</span> for Industry Leaders.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-gray p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between h-full hover:shadow-xl hover:shadow-brand-blue/5 transition-all"
            >
              <div>
                <Quote className="w-12 h-12 text-brand-accent/30 mb-6" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <p className="text-brand-blue/80 text-lg leading-relaxed italic mb-8">
                  "{t.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-slate-200 pt-8">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-accent/20" />
                <div>
                  <h4 className="font-bold text-brand-blue">{t.name}</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
