import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

const bounce = { type: "spring", stiffness: 300, damping: 15 };

export default function About() {
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
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Who I <span className="text-violet-400">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ ...bounce, delay: 0.1 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-violet-600 to-cyan-500
                              rounded-3xl blur-xl opacity-40 scale-105"
              />
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={bounce}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-white/10"
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEtcJ2s8SC90Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722986811475?e=1783555200&v=beta&t=t9STU7yvoI7D6aT8Rmy0174qXQa3mdeIN8vA_VKmuZ8"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 px-4 py-2 bg-violet-600 rounded-2xl
                           text-sm font-bold shadow-lg shadow-violet-500/40"
              >
                4+ Years 🚀
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...bounce, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Hey! I'm{" "}
              <span className="text-violet-400 font-semibold">
                {personalInfo.name}
              </span>
              , a passionate developer who loves turning ideas into interactive
              digital experiences.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With a strong foundation in modern web technologies, I focus on
              building applications that are not only functional but also
              visually stunning.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { num: "20+", label: "Projects" },
                { num: "4+", label: "Years" },
                { num: "10+", label: "Clients" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...bounce, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="text-center p-4 bg-white/5 border border-white/10 rounded-2xl
                             hover:border-violet-500/40 transition cursor-default"
                >
                  <div className="text-2xl font-bold text-violet-400">
                    {stat.num}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
