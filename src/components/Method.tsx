import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Activity, TrendingUp } from 'lucide-react';

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

const steps: Step[] = [
  {
    number: '01',
    icon: <Target className="w-7 h-7" />,
    title: 'Evaluación',
    subtitle: 'Define tu Punto de Partida',
    description:
      'Comenzamos con una auditoría integral de optimización del rendimiento: patrones de movimiento, marcadores metabólicos, demandas del estilo de vida y capacidad de recuperación. Sin adivinanzas, solo datos.',
    tags: ['Análisis de Movimiento', 'Auditoría de Vida', 'Mapeo de Metas'],
  },
  {
    number: '02',
    icon: <Activity className="w-7 h-7" />,
    title: 'Optimización',
    subtitle: 'Calibra tu Motor',
    description:
      'Tu programa personalizado está diseñado para la máxima eficiencia. Los bloques de entrenamiento periodizados y los objetivos macro de precisión están ajustados para desencadenar una recomposición corporal constante.',
    tags: ['Macros Personalizados', 'Periodización', 'Protocolo de Recuperación'],
  },
  {
    number: '03',
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'Evolución',
    subtitle: 'Potencia tu Progreso',
    description:
      'Los controles semanales de datos impulsan la adaptación continua. A medida que mejora tu rendimiento, tu programa evoluciona. Los estancamientos se convierten en plataformas de lanzamiento.',
    tags: ['Check-ins Semanales', 'Progresión Constante', 'Resultados Reales'],
  },
];

export default function Method() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#0D0D0D] py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-widest">El Proceso</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3 tracking-tight">
            El <span className="text-red-600">Sistema Wolf</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Un marco de tres fases basado en la ciencia del deporte, no en mitos de gimnasio. Repetible. Escalable. Probado.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
                className="relative"
              >
                <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-8 flex flex-col gap-6 h-full hover:border-red-600/20 transition-colors duration-300 group">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500 group-hover:bg-red-600/20 transition-colors duration-300">
                      {step.icon}
                    </div>
                    <span className="text-6xl font-black text-white/5 leading-none group-hover:text-white/10 transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-1">{step.subtitle}</p>
                    <h3 className="text-2xl font-black text-white tracking-tight">{step.title}</h3>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-sm flex-1">{step.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {step.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#0D0D0D] border border-red-600/30 items-center justify-center">
                    <span className="text-red-500 text-xs">→</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
