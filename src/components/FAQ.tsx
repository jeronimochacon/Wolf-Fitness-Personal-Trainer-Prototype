import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Nunca he levantado pesas antes?",
    answer:
      "Cada programa se adapta a tu punto de partida exacto. Construimos tu base de forma segura, comenzando por la calidad del movimiento, la estabilidad articular y los principios de sobrecarga progresiva. No hay prerrequisitos de nivel físico para comenzar. La línea de salida es donde tú estés hoy.",
  },
  {
    question: "¿Tengo un horario muy ocupado?",
    answer:
      "Diseñamos entrenamientos de 45 minutos de alta eficiencia que encajan en agendas de ejecutivos y padres. Cada sesión se basa en el principio de dosis mínima eficaz: máximo estímulo, mínima pérdida de tiempo. Si tienes 45 minutos enfocados de 3 a 4 veces por semana, podemos lograr una recomposición corporal seria.",
  },
  {
    question: "¿Se incluye la nutrición?",
    answer:
      "Sí — se proporciona un desglose completo de macros para garantizar que tu motor esté bien alimentado. La nutrición no es negociable en ningún protocolo de optimización. Recibirás objetivos de macronutrientes personalizados, pautas de tiempo de comida y listas de sustitución adaptadas a tus preferencias.",
  },
  {
    question: "¿Qué tan rápido veré resultados?",
    answer:
      "La mayoría de los clientes notan cambios significativos en 4-6 semanas: mejores niveles de energía, mejor sueño y ganancias de fuerza visibles. La transformación visual notable suele ocurrir entre las semanas 8-12. Los resultados sostenibles y duraderos se construyen con más de 6 meses de esfuerzo constante.",
  },
  {
    question: "¿Qué pasa si viajo con frecuencia?",
    answer:
      "Incluimos protocolos adaptados a viajes en todos los planes. Programas para habitación de hotel, aire libre o equipo mínimo están integrados para que tu progreso nunca se detenga. Los clientes del plan avanzado reciben ajustes en tiempo real basados en sus itinerarios de viaje.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí — no hay contratos a largo plazo ni tarifas de cancelación. Se factura mensualmente y puedes cancelar antes del siguiente ciclo. Confiamos en los resultados del Método Wolf y creemos que la retención debe ganarse con rendimiento, no con contratos.",
  },
];

function AccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
      className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
        isOpen ? 'border-red-600/40 bg-[#1A1A1A]' : 'border-white/5 bg-[#1A1A1A] hover:border-white/10'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-base leading-snug transition-colors duration-200 ${isOpen ? 'text-white' : 'text-gray-200'}`}>
          {item.question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
          isOpen ? 'bg-red-600 text-white' : 'bg-white/5 text-gray-400'
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm leading-relaxed px-6 pb-6">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" className="bg-[#0D0D0D] py-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-widest">¿Tienes dudas?</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3 tracking-tight">
            Respuestas a tus <span className="text-red-600">Preguntas</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            La duda es solo el punto de partida. Despejemos el camino.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <AccordionItem key={item.question} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-400 mb-6">¿Aún tienes preguntas? Tu evolución no puede esperar.</p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToPricing}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]"
          >
            Empezar mi Evolución
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
