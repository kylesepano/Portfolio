import { Heart } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm flex items-center gap-1">
          Built by {personalInfo.name}
        </p>
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}