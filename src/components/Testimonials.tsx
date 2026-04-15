import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

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

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);

  const handleMove = (e: React.MouseEvent | React.TouchEvent | any) => {
    if (!isResizing && e.type !== 'touchmove') return;
    
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - container.left) / container.width) * 100;
    
    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);

  return (
    <div 
      className="relative w-full h-full overflow-hidden cursor-ew-resize select-none touch-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      <img
        src={after}
        alt="Después"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={before}
          alt="Antes"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 w-0.5 bg-white/50 backdrop-blur-sm z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-600 rounded-full border-2 border-white shadow-[0_0_20px_rgba(220,38,38,0.5)] flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <div className="flex gap-0.5">
                <ChevronLeft className="w-4 h-4 text-white" />
                <ChevronRight className="w-4 h-4 text-white" />
            </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute inset-x-0 bottom-4 px-4 flex justify-between items-center z-20 pointer-events-none">
        <span className="text-[10px] text-white font-bold bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-tighter shadow-lg">Antes</span>
        <span className="text-[10px] text-white font-bold bg-red-600/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-tighter shadow-lg">Después</span>
      </div>
    </div>
  );
}

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
      <div className="relative h-64 overflow-hidden">
        <BeforeAfterSlider 
          before={testimonial.beforeAfter.before} 
          after={testimonial.beforeAfter.after} 
        />
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
            Cada cambio es único. Mira lo que mis clientes han logrado con planificación basada en ciencia.
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
