import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <img
                src="https://picsum.photos/seed/developer/800/800"
                alt="RJ Yanson"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-cyan-500 text-black p-6 rounded-2xl shadow-2xl">
              <span className="block text-4xl font-extrabold">3+</span>
              <span className="text-xs font-bold uppercase tracking-widest">Years Experience</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Crafting Digital <span className="text-gray-500">Excellence</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              "I'm a passionate full-stack developer with 3+ years of experience building scalable web applications and mobile solutions. I love turning complex problems into simple, beautiful designs."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-medium">Cebu, Philippines</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-medium">rauljayyanson@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-medium">+63 961 298 8161</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <Calendar size={18} />
                </div>
                <span className="text-sm font-medium">Available for Projects</span>
              </div>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-cyan-400 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
