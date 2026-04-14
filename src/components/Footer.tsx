import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12"
        >
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h2 className="text-white font-black text-2xl tracking-tight">
                ANDRES <span className="text-red-600">WOLF</span>
              </h2>
              <p className="text-gray-500 text-sm mt-1">Coach de Optimización de Rendimiento</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Coaching basado en ciencia para una recomposición corporal sostenible y máximo rendimiento. Sin trucos. Sin atajos. Solo un sistema probado.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="w-4 h-4" />, label: 'Instagram' },
                { icon: <Youtube className="w-4 h-4" />, label: 'YouTube' },
                { icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
              ].map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">Programas</h3>
            <ul className="flex flex-col gap-3">
              {['Plan Básico', 'Plan Intermedio', 'Plan Avanzado', 'Portal de Clientes'].map((link) => (
                <li key={link}>
                  <button
                    onClick={scrollToPricing}
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">Legal</h3>
            <ul className="flex flex-col gap-3">
              {['Política de Privacidad', 'Términos de Servicio', 'Política de Reembolso', 'Legal'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3 bg-[#1A1A1A] border border-white/5 rounded-xl px-5 py-3">
            <Lock className="w-4 h-4 text-green-500" />
            <span className="text-gray-400 text-sm">
              Pago Seguro con el respaldo de{' '}
              <span className="text-white font-semibold">PayU</span>
            </span>
            <Shield className="w-4 h-4 text-green-500" />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-600 text-xs">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              SSL Seguro
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-xs">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Encriptación 256-bit
            </div>
          </div>

          <p className="text-gray-600 text-xs text-center md:text-right">
            &copy; {new Date().getFullYear()} Andres Wolf Coaching. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
