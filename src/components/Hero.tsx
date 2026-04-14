import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-950/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 rounded-full px-4 py-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-sm font-medium tracking-wide uppercase">Entrenamiento Basado en Ciencia</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Consigue el Cuerpo
            <br />
            <span className="">que Siempre</span>
            <br />
            <span className="text-red-600">Soñaste</span>
          </h1>

          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-lg">
            Alcanza tus metas más ambiciosas entrenando con un plan, constancia y dedicación de la misma forma que yo lo hice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToPricing}
              className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-red-900/40"
            >
              Unirme a <br /> Wolf Family
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            <div className="flex items-center gap-3 text-gray-400 text-sm pt-1 sm:pt-7">
              <div className="flex -space-x-2">
                {['M', 'S', 'L'].map((initial, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-[#1A1A1A] border-2 border-[#0A0A0A] flex items-center justify-center text-xs text-gray-300 font-semibold">
                    {initial}
                  </div>
                ))}
              </div>
              <span>300+ Transformaciones Completadas</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
            {[
              { value: '300+', label: 'Clients Transformed' },
              { value: '8yr', label: 'Coaching Experience' },
              { value: '97%', label: 'Retention Rate' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-black text-white">{stat.value}</span>
                <span className="text-gray-500 text-xs uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#1A1A1A] border border-white/5 shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Athletic performance coaching"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-6 left-6 right-6 bg-[#1A1A1A]/90 backdrop-blur-sm border border-white/10 rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">AW</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Andres Wolf</p>
                  <p className="text-gray-400 text-xs">Coach Fitness Certificado</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-red-500 text-xs">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-red-600/10 blur-3xl" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-red-900/20 blur-3xl" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-gray-500 animate-bounce" />
      </motion.div>
    </section>
  );
}
