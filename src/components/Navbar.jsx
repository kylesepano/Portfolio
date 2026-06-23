import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const bounce = { type: 'spring', stiffness: 400, damping: 15 }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between
                      bg-white/5 backdrop-blur-xl border border-white/10
                      rounded-2xl px-6 py-3 shadow-2xl shadow-violet-900/20">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400
                       bg-clip-text text-transparent"
          >
            {personalInfo.name.split(' ')[0]}.
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.div key={link.href} whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.95 }} transition={bounce}>
              <Link
                to={link.href}
                className={`px-4 py-2 text-sm rounded-xl transition-colors ${
                  location.pathname === link.href
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={bounce}>
            <Link
              to="/contact"
              className="ml-2 px-5 py-2 text-sm font-semibold rounded-xl
                         bg-gradient-to-r from-violet-600 to-cyan-500
                         hover:shadow-lg hover:shadow-violet-500/40 transition-shadow"
            >
              Hire Me
            </Link>
          </motion.div>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl hover:bg-white/10 transition">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="md:hidden mt-2 bg-white/5 backdrop-blur-xl border border-white/10
                       rounded-2xl p-4 flex flex-col gap-1"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 300 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl transition ${
                    location.pathname === link.href
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}