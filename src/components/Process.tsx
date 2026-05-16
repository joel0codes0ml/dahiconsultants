import { motion } from 'motion/react';
import { Search, PenTool, Database, FileText, Settings, CheckCircle2 } from 'lucide-react';

export default function Process() {
  const steps = [
    { title: 'Consultation', icon: Search, desc: 'Initial project review and strategic objectives definition.' },
    { title: 'Site Analysis', icon: PenTool, desc: 'Comprehensive assessment of site conditions and constraints.' },
    { title: 'Cost Planning', icon: Database, desc: 'Detailed cost modeling and feasibility analysis.' },
    { title: 'Documentation', icon: FileText, desc: 'Rigorous preparation of BOQs and tender packages.' },
    { title: 'Project Execution', icon: Settings, desc: 'Active cost control and project management oversight.' },
    { title: 'Completion', icon: CheckCircle2, desc: 'Final account settlement and reporting.' },
  ];

  return (
    <section id="process" className="py-24 bg-brand-blue relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-brand-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Process</span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-6 tracking-tighter">
            Methodical <span className="italic font-serif font-normal text-brand-accent">Workflow</span> for Flawless Delivery.
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                <div className="w-20 h-20 bg-brand-blue border border-white/20 rounded-full flex items-center justify-center mb-8 relative z-20 group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-500 shadow-2xl">
                  <step.icon className="w-8 h-8 text-white" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-royal rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-brand-blue">
                    0{i + 1}
                  </span>
                </div>
                <h4 className="text-white font-display font-bold text-xl mb-4">{step.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed max-w-[180px] group-hover:text-white/60 transition-colors">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
