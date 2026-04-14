import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Method from './components/Method';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: 'Method', id: 'method' },
    { label: 'Results', id: 'testimonials' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 shadow-xl'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white font-black text-xl tracking-tight"
        >
          <span className="text-red-600">WOLF FITNESS</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('pricing')}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            Quiero Cambiar
          </motion.button>
        </div>

        <button
          className="md:hidden text-gray-400 hover:text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0A0A0A]/98 border-t border-white/5 px-6 pb-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-gray-400 hover:text-white text-base font-medium py-2 text-left transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('pricing')}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-base px-6 py-3 rounded-xl transition-colors duration-200 text-center"
          >
            Quiero Cambiar
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="method">
          <Method />
        </section>
        <Pricing />
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}
