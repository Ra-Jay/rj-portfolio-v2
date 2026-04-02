import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Cpu, 
  Layers, 
  Globe, 
  Terminal, 
  Smartphone, 
  Workflow,
  Server,
  Cloud,
  Box,
  Zap
} from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Globe className="text-cyan-400" />,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: <Server className="text-purple-400" />,
    items: ['Node.js', 'Python', '.NET', 'MongoDB', 'GraphQL'],
  },
  {
    category: 'Other Tech',
    icon: <Cpu className="text-pink-400" />,
    items: ['Java', 'ASP.NET', 'AWS', 'Docker', 'CI/CD', 'Flask', 'YOLOv7 (ML)'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 block"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Technical <span className="text-gray-500">Arsenal</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6">{skill.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-20 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center justify-center gap-2 font-bold text-xl tracking-tighter">
            <Zap size={24} className="text-cyan-400" /> FAST
          </div>
          <div className="flex items-center justify-center gap-2 font-bold text-xl tracking-tighter">
            <Box size={24} className="text-purple-400" /> SCALABLE
          </div>
          <div className="flex items-center justify-center gap-2 font-bold text-xl tracking-tighter">
            <Layers size={24} className="text-pink-400" /> MODERN
          </div>
          <div className="flex items-center justify-center gap-2 font-bold text-xl tracking-tighter">
            <Workflow size={24} className="text-cyan-400" /> EFFICIENT
          </div>
        </div>
      </div>
    </section>
  );
}
