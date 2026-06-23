import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

const bounce = { type: 'spring', stiffness: 300, damping: 15 }

export default function Skills() {
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
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">My Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            What I <span className="text-cyan-400">Know</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...bounce, delay: i * 0.07 }}
              whileHover={{ scale: 1.08, y: -6, rotate: 1 }}
              className="group p-6 bg-white/5 border border-white/10 rounded-2xl
                         hover:border-cyan-500/40 hover:bg-cyan-500/5 transition cursor-default"
            >
              <div className="text-lg font-semibold text-gray-200 group-hover:text-cyan-300 transition">
                {skill.name}
              </div>
              <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.07, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}