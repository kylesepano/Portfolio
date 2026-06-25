import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const bounce = { type: "spring", stiffness: 300, damping: 15 };

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="blob-delay absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...bounce, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6
                     bg-violet-500/10 border border-violet-500/30 rounded-full text-sm text-violet-300"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...bounce, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black leading-none mb-4"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            {personalInfo.name.split(" ")[0]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...bounce, delay: 0.35 }}
          className="text-2xl md:text-3xl text-gray-400 font-light mb-6"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...bounce, delay: 0.5 }}
          className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...bounce, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={bounce}
          >
            <Link
              to="/projects"
              className="px-8 py-4 rounded-2xl font-semibold text-white
                         bg-gradient-to-r from-violet-600 to-cyan-500
                         shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-shadow"
            >
              View My Work
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={bounce}
          >
            <Link
              to="/contact"
              className="px-8 py-4 rounded-2xl font-semibold text-gray-300
                         border border-white/20 hover:border-violet-500/50 hover:bg-white/5 transition"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: personalInfo.github },
            { icon: Linkedin, href: personalInfo.linkedin },
            { icon: Mail, href: `mailto:${personalInfo.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...bounce, delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.2, y: -4, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl bg-white/5 border border-white/10
                         hover:bg-violet-500/20 hover:border-violet-500/40 transition"
            >
              <Icon size={20} className="text-gray-400" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          to="/about"
          className="text-gray-500 hover:text-violet-400 transition"
        >
          <ArrowDown size={24} />
        </Link>
      </motion.div>
    </section>
  );
}
