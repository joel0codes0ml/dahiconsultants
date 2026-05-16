import { motion } from 'motion/react';
import { 
  FileText, Calculator, FileCheck, ShieldCheck, 
  Settings, Briefcase, FileSearch, Building2,
  TrendingUp, Clock, HardHat, Globe
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Bills of Quantities (BOQ)',
      desc: 'Highly detailed and accurate measurement of materials for tendering.',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1503387762-592dea5874b8?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Cost Estimation',
      desc: 'Comprehensive project budgeting and financial forecasting from day one.',
      icon: Calculator,
      image: 'https://images.unsplash.com/photo-1454165833767-027ffea70288?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Tender Documentation',
      desc: 'Preparation of robust tender packages and procurement strategy.',
      icon: FileCheck,
      image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Project Cost Control',
      desc: 'Dynamic monitoring of costs throughout the construction lifecycle.',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Contract Administration',
      desc: 'Professional management of construction contracts and variations.',
      icon: Settings,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Project Management',
      desc: 'Strategic oversight of construction timelines and resource allocation.',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1574600138341-26a9787e9112?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Feasibility Studies',
      desc: 'In-depth financial analysis to validate project viability.',
      icon: FileSearch,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Cost Consultancy',
      desc: 'Strategic high-level advice on construction economics and risk.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  const features = [
    { icon: TrendingUp, title: 'Accurate Cost Planning', text: 'Minimize financial risks with precision.' },
    { icon: Clock, title: 'Timely Delivery', text: 'Strict adherence to project schedules.' },
    { icon: HardHat, title: 'Experienced Pros', text: 'Team of chartered surveyors.' },
    { icon: Globe, title: 'Modern Solutions', text: 'Next-gen BIM and digital tools.' }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-royal font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline underline-offset-8 decoration-brand-accent">Our Expertise</span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl text-brand-blue mb-6">
              Complete Construction <span className="text-brand-royal italic font-serif font-normal underline decoration-brand-accent/30 tracking-tight">Cost Management</span> Systems.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We provide a full spectrum of quantity surveying and project management services tailored to the specific needs of modern engineering and architectural projects.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-brand-gray h-[420px] flex flex-col justify-end p-8 border border-slate-100 hover:border-brand-accent/50 transition-all duration-500"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover filter saturate-50 brightness-75 group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/60 to-transparent opacity-90" />
              </div>
              
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mb-2">
                  <service.icon className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white tracking-tight">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                  {service.desc}
                </p>
                <div className="pt-4 overflow-hidden h-0 group-hover:h-12 transition-all duration-500">
                  <a href="#contact" className="text-brand-accent font-bold text-sm flex items-center gap-2">
                    Learn More <TrendingUp className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section Integrated */}
        <div className="bg-brand-blue rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-royal/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-accent/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-display font-bold text-4xl md:text-5xl text-white mb-8">
                Why Industry Leaders Choose <span className="text-brand-accent italic font-serif">DAHI.</span>
              </h3>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Our reputation is built on fifteen years of delivering high-stakes financial consultancy with zero margin for error. We combine traditional QS ethics with futuristic digital methodologies.
              </p>
              <div className="flex gap-8">
                <a href="#contact" className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                  Get a Free Quote
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
                >
                  <feature.icon className="w-10 h-10 text-brand-accent mb-6" />
                  <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
