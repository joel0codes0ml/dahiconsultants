import { motion } from 'motion/react';
import { Target, Lightbulb, Users, BarChart } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Project Value Managed', value: '$2.5B+' },
    { label: 'Professional Staff', value: '50+' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Accuracy Rate', value: '99.9%' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                alt="Construction Management"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-brand-accent opacity-20" />

            <div className="absolute bottom-10 -left-12 hidden md:block glass-dark p-8 rounded-2xl max-w-xs shadow-2xl">
              <h4 className="text-white font-bold text-xl mb-2">Our Mission</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                To deliver unparalleled cost management services through innovation, integrity, and absolute accuracy in construction economics.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-royal font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Who We Are</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-brand-blue mb-8 leading-tight">
              Leading <span className="italic font-serif font-normal">QS Consultants</span> in the East African Region.
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              DAHI CONSULTANTS is a distinguished quantity surveying firm dedicated to providing comprehensive cost management and advisory services. Based in Nairobi, we bring deep local market insights and international standards to every project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                { icon: Target, title: 'Strategic Planning', desc: 'Pre-construction feasibility and cost modeling.' },
                { icon: Lightbulb, title: 'Innovative Solutions', desc: 'Modern digital surveying techniques.' },
                { icon: Users, title: 'Expert Team', desc: 'Chartered Quantity Surveyors with decades of experience.' },
                { icon: BarChart, title: 'Value Engineering', desc: 'Optimizing resources without compromising quality.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-brand-royal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="font-display font-extrabold text-2xl text-brand-blue">{stat.value}</p>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
