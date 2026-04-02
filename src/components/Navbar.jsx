import { Menu } from 'lucide-react'
import Reveal from './Reveal'

const links = ['Home', 'Studio', 'Services', 'Contact', 'FAQs']

export default function Navbar() {
  return (
    <Reveal>
      <header className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-[28px] font-medium tracking-[-0.03em] transition-all duration-300 hover:-translate-y-0.5 hover:tracking-[-0.01em]">
          Elementum
        </div>

        <nav className="hidden items-center gap-7 text-xs md:flex">
          {links.map((link) => (
            <a key={link} href="#" className="transition-all duration-300 hover:-translate-y-0.5 hover:opacity-70">
              {link}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          className="rounded-full p-2 transition-all duration-300 hover:rotate-6 hover:scale-110 hover:bg-black/5"
        >
          <Menu size={22} strokeWidth={1.75} />
        </button>
      </header>
    </Reveal>
  )
}
