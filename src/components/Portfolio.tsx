import { motion } from 'motion/react';

export default function Portfolio() {
  const projects = [
    {
      name: 'Nairobi Heights Plaza',
      location: 'Nairobi, Kenya',
      value: 'KES 2.5B',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    },
    {
      name: 'Mombasa Luxury Suites',
      location: 'Mombasa, Kenya',
      value: 'KES 800M',
      category: 'Luxury Residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop',
    },
    {
      name: 'Kisumu Academic Hub',
      location: 'Kisumu, Kenya',
      value: 'KES 1.2B',
      category: 'Institutional',
      image: 'https://images.unsplash.com/photo-1582533081190-0f746b12b326?q=80&w=2000&auto=format&fit=crop',
    },
    {
      name: 'Thika Road Interchange',
      location: 'Nairobi, Kenya',
      value: 'KES 5.4B',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2000&auto=format&fit=crop',
    }
  ];

  return (
    <section id="projects" className="py-24 bg-brand-gray overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-royal font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Portfolio</span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl text-brand-blue leading-tight tracking-tighter">
              Exceptional <span className="text-brand-accent italic font-serif">Landmarks</span> Built on Accurate Planning.
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 border border-brand-blue/10 rounded-full font-bold text-sm hover:bg-brand-blue hover:text-white transition-all">
              View All Projects
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-brand-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="bg-white text-brand-blue px-8 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Case Study
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display font-bold text-2xl text-brand-blue mb-1">{project.name}</h3>
                  <p className="text-slate-500 text-sm flex items-center gap-2">
                    {project.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display font-black text-2xl text-brand-royal">{project.value}</p>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-none">Project Value</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
