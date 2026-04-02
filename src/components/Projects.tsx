import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Boat Marketplace',
    description: 'Full-stack e-commerce platform with Stripe payments, real-time inventory, and analytics dashboard.',
    tech: ['TypeScript', 'GraphQL', 'Payload CMS', 'Tailwind'],
    live: 'https://www.easyboatdeals.com/',
    image: 'https://picsum.photos/seed/boat/800/600',
  },
  {
    title: 'Laser Solder Inspector',
    description: 'AI-powered web application that evaluates laser solder quality on micro components using YOLOv7.',
    tech: ['Next.js', 'Tailwind', 'Flask', 'YOLOv7'],
    github: 'https://github.com/Ra-Jay/next_lsc_inspector',
    image: 'https://picsum.photos/seed/laser/800/600',
  },
  {
    title: 'E-commerce Application',
    description: 'Modern React e-commerce site with dynamic filtering, sorting, cart, and data visualization.',
    tech: ['React', 'TypeScript', 'Chart.js'],
    live: 'https://miraclecbdproducts.myshopify.com/',
    image: 'https://picsum.photos/seed/cbd/800/600',
  },
  {
    title: 'Increment Technologies',
    description: 'High-end company landing page for a tech agency.',
    tech: ['React', 'Next.js', 'Tailwind', 'Motion'],
    live: 'https://www.incrementtechnologies.com/',
    image: 'https://picsum.photos/seed/increment/800/600',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 block"
            >
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Featured <span className="text-gray-500">Projects</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-md text-lg leading-relaxed"
          >
            A curated selection of my best work, from AI-powered tools to high-performance e-commerce platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5 mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-cyan-400 transition-colors"
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Github size={24} />
                    </motion.a>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="text-gray-600 group-hover:text-cyan-400 transition-colors" size={20} />
                  </h3>
                  <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a
            href="https://github.com/Ra-Jay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold tracking-tight"
          >
            View more on GitHub <Github size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
