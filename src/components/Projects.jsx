import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/portfolioData'

const bounce = { type: 'spring', stiffness: 300, damping: 15 }

export default function Projects() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={bounce}
          className="text-center mb-16"
        >
          <span className="text-pink-400 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            My <span className="text-pink-400">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...bounce, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40
                                group-hover:opacity-60 transition-opacity`} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 text-xs bg-violet-500/20 text-violet-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={bounce}
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium
                               bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl
                               hover:shadow-lg hover:shadow-violet-500/30 transition-shadow"
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={bounce}
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium
                               border border-white/20 rounded-xl hover:bg-white/10 transition"
                  >
                    <Github size={14} /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}