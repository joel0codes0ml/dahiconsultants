import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert('Thank you for your message. We will get back to you shortly!');
  };

  return (
    <section id="contact" className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-royal font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="font-display font-extrabold text-5xl md:text-6xl text-brand-blue mb-8 tracking-tighter leading-tight">
              Ready to Start Your <span className="text-brand-accent italic font-serif">Kenyan</span> Project?
            </h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed max-w-xl">
              Contact our expert quantity surveying team in Nairobi today for a comprehensive project assessment and cost planning consultation.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-blue/5 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Direct Line</p>
                  <p className="text-brand-blue font-display font-bold text-xl">0722517377</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-blue/5 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Email Enquiries</p>
                  <p className="text-brand-blue font-display font-bold text-xl">dahiconsultants@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-blue/5 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Headquarters</p>
                  <p className="text-brand-blue font-display font-bold text-xl">Professional Towers, Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-brand-blue rounded-3xl text-white">
                <Clock className="w-10 h-10 text-brand-accent shrink-0" />
                <div>
                  <p className="font-bold">Consultancy Hours</p>
                  <p className="text-white/60 text-sm">Mon - Fri: 08:00 AM - 06:00 PM (EST)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-brand-blue/5 border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-10">
              <MessageSquare className="w-6 h-6 text-brand-accent" />
              <h3 className="font-display font-bold text-2xl text-brand-blue">Message Us</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Full Name</label>
                  <input
                    {...register('name')}
                    className="w-full bg-brand-gray border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-all font-medium"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-[10px] mt-1 ml-4 font-bold">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Email Address</label>
                  <input
                    {...register('email')}
                    className="w-full bg-brand-gray border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-all font-medium"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-4 font-bold">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Phone Number</label>
                  <input
                    {...register('phone')}
                    className="w-full bg-brand-gray border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-all font-medium"
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] mt-1 ml-4 font-bold">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Consultancy Service</label>
                  <select
                    {...register('service')}
                    className="w-full bg-brand-gray border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-all font-medium appearance-none"
                  >
                    <option value="">Select Service</option>
                    <option value="boq">Bill of Quantities</option>
                    <option value="estimation">Cost Estimation</option>
                    <option value="tendering">Tender Documentation</option>
                    <option value="project-control">Project Cost Control</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-[10px] mt-1 ml-4 font-bold">{errors.service.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Project Details</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full bg-brand-gray border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-all font-medium resize-none"
                  placeholder="Tell us about your project requirements..."
                />
                {errors.message && <p className="text-red-500 text-[10px] mt-1 ml-4 font-bold">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-brand-blue text-white font-bold py-5 rounded-2xl shadow-xl shadow-brand-blue/20 hover:bg-brand-royal transition-all flex items-center justify-center gap-3 group"
              >
                Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-96 w-full rounded-[3rem] overflow-hidden bg-slate-200 shadow-inner relative grayscale hover:grayscale-0 transition-all duration-1000">
          <div className="absolute inset-0 flex items-center justify-center bg-brand-blue/5">
             <div className="flex flex-col items-center gap-4">
                <MapPin className="w-12 h-12 text-brand-royal" />
                <p className="font-display font-bold text-brand-blue">Strategic Nairobi Presence</p>
                <p className="text-sm text-slate-500">Professional Towers, Nairobi, Kenya</p>
             </div>
          </div>
          {/* Note: In a real app we'd use the Google Maps component/API here */}
        </div>
      </div>
    </section>
  );
}
