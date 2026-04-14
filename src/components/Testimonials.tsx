import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  handle: string;
  quote: string;
  result: string;
  resultLabel: string;
  image: string;
  beforeAfter: { before: string; after: string };
}

const testimonials: Testimonial[] = [
  {
    name: 'Mark S.',
    handle: 'Ejecutivo Ocupado, 40',
    quote: "Andres cambió mi perspectiva sobre lo que es estar 'ocupado'. Estoy en la mejor forma de mi vida a los 40.",
    result: '20% → 10%',
    resultLabel: 'Reducción de Grasa',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    beforeAfter: {
      before: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  },
  {
    name: 'Sarah J.',
    handle: 'Transformación Posparto',
    quote: 'El enfoque personalizado para mi recuperación específica fue exactamente lo que necesitaba.',
    result: '−12 kg',
    resultLabel: 'Recuperación Técnica',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    beforeAfter: {
      before: 'https://images.pexels.com/photos/4164766/pexels-photo-4164766.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  },
  {
    name: 'Leo R.',
    handle: 'Desarrollo Atlético',
    quote: 'Rompí mi estancamiento. La nutrición fue la pieza que faltaba en mi entrenamiento.',
    result: 'Delgado → Atlético',
    resultLabel: 'Fuerza & Masa Muscular',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    beforeAfter: {
      before: 'https://images.pexels.com/photos/4164513/pexels-photo-4164513.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="bg-[#1A1A1A] border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:border-red-600/30 transition-colors duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="grid grid-cols-2 h-full">
          <div className="relative overflow-hidden">
            <img
              src={testimonial.beforeAfter.before}
              alt="Antes de la transformación"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/40" />
            <span className="absolute bottom-2 left-2 text-xs text-white/70 font-medium bg-black/50 px-2 py-0.5 rounded">Antes</span>
          </div>
          <div className="relative overflow-hidden">
            <img
              src={testimonial.beforeAfter.after}
              alt="Después de la transformación"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-red-900/20" />
            <span className="absolute bottom-2 right-2 text-xs text-white/70 font-medium bg-black/50 px-2 py-0.5 rounded">Después</span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start gap-3">
          <Quote className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-gray-300 text-base leading-relaxed italic">"{testimonial.quote}"</p>
        </div>

        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-red-600/50"
            />
            <div>
              <p className="text-white font-semibold text-sm">{testimonial.name}</p>
              <p className="text-gray-500 text-xs">{testimonial.handle}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-red-500 font-black text-sm">{testimonial.result}</p>
            <p className="text-gray-600 text-xs">{testimonial.resultLabel}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#0A0A0A] py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-widest">Resultados Reales</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3 tracking-tight">
            Transformaciones que <span className="text-red-600">Hablan</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Cada viaje de recomposición corporal es único. Mira lo que mis clientes han logrado con programación basada en ciencia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
