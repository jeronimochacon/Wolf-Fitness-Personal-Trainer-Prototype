import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
  payuData: {
    merchantId: string;
    accountId: string;
    description: string;
    referenceCode: string;
    amount: string;
    tax: string;
    taxReturnBase: string;
    currency: string;
    signature: string;
    test: string;
    buyerEmail: string;
    responseUrl: string;
  };
}

const plans: Plan[] = [
  {
    name: 'Básico',
    price: '$29',
    period: '/mes',
    description: 'Construye tu base con programación probada.',
    features: [
      'Programas de entrenamiento en PDF',
      'Acceso a la comunidad',
      'Check-ins automatizados',
      'Biblioteca de movimientos',
      'Guía técnica de nutrición',
    ],
    highlighted: false,
    payuData: {
      merchantId: '508029',
      accountId: '512321',
      description: 'Andres Wolf Coaching - Plan Básico',
      referenceCode: 'WOLF_BASIC_001',
      amount: '29.00',
      tax: '0',
      taxReturnBase: '0',
      currency: 'USD',
      signature: 'basic_plan_signature_hash',
      test: '1',
      buyerEmail: 'test@example.com',
      responseUrl: 'https://andreswolf.com/thank-you',
    },
  },
  {
    name: 'Intermedio',
    price: '$59',
    period: '/mes',
    description: 'Coaching de precisión para una recomposición corporal acelerada.',
    features: [
      'Todo lo del plan Básico',
      'Desglose de macros personalizado',
      'Videos semanales de revisión técnica',
      'Chat directo con Andres',
      'Ajustes mensuales del programa',
      'Guía de suplementación',
    ],
    highlighted: true,
    badge: 'Recomendado',
    payuData: {
      merchantId: '508029',
      accountId: '512321',
      description: 'Andres Wolf Coaching - Plan Intermedio',
      referenceCode: 'WOLF_INTER_001',
      amount: '59.00',
      tax: '0',
      taxReturnBase: '0',
      currency: 'USD',
      signature: 'intermediate_plan_signature_hash',
      test: '1',
      buyerEmail: 'test@example.com',
      responseUrl: 'https://andreswolf.com/thank-you',
    },
  },
  {
    name: 'Avanzado',
    price: '$99',
    period: '/mes',
    description: 'Optimización de rendimiento élite con acceso total.',
    features: [
      'Todo lo del plan Intermedio',
      'Llamadas Zoom 1-a-1 Quincenales',
      'Análisis de biomarcadores',
      'Prioridad de respuesta 24h',
      'Periodización avanzada',
      'Adaptación a viajes y estilo de vida',
    ],
    highlighted: false,
    payuData: {
      merchantId: '508029',
      accountId: '512321',
      description: 'Andres Wolf Coaching - Plan Avanzado',
      referenceCode: 'WOLF_ADV_001',
      amount: '99.00',
      tax: '0',
      taxReturnBase: '0',
      currency: 'USD',
      signature: 'advanced_plan_signature_hash',
      test: '1',
      buyerEmail: 'test@example.com',
      responseUrl: 'https://andreswolf.com/thank-you',
    },
  },
];

function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className={`relative rounded-2xl flex flex-col overflow-hidden ${
        plan.highlighted
          ? 'bg-[#1A1A1A] border-2 border-red-600 shadow-2xl shadow-red-900/30 scale-105'
          : 'bg-[#1A1A1A] border border-white/5'
      }`}
    >
      {plan.badge && (
        <div className="bg-red-600 text-white text-xs font-bold uppercase tracking-widest text-center py-2 px-4 flex items-center justify-center gap-2">
          <Zap className="w-3 h-3" />
          {plan.badge}
        </div>
      )}

      <div className="p-8 flex flex-col gap-6 flex-1">
        <div>
          <h3 className="text-white font-black text-xl tracking-tight">{plan.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
        </div>

        <div className="flex items-end gap-1">
          <span className={`text-5xl font-black tracking-tight ${plan.highlighted ? 'text-red-500' : 'text-white'}`}>
            {plan.price}
          </span>
          <span className="text-gray-500 text-lg mb-1">{plan.period}</span>
        </div>

        <ul className="flex flex-col gap-3 flex-1">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${
                plan.highlighted ? 'bg-red-600/20 text-red-500' : 'bg-white/5 text-gray-400'
              }`}>
                <Check className="w-3 h-3" />
              </div>
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <form
          method="POST"
          action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"
          className="mt-4"
        >
          <input type="hidden" name="merchantId" value={plan.payuData.merchantId} />
          <input type="hidden" name="accountId" value={plan.payuData.accountId} />
          <input type="hidden" name="description" value={plan.payuData.description} />
          <input type="hidden" name="referenceCode" value={plan.payuData.referenceCode} />
          <input type="hidden" name="amount" value={plan.payuData.amount} />
          <input type="hidden" name="tax" value={plan.payuData.tax} />
          <input type="hidden" name="taxReturnBase" value={plan.payuData.taxReturnBase} />
          <input type="hidden" name="currency" value={plan.payuData.currency} />
          <input type="hidden" name="signature" value={plan.payuData.signature} />
          <input type="hidden" name="test" value={plan.payuData.test} />
          <input type="hidden" name="buyerEmail" value={plan.payuData.buyerEmail} />
          <input type="hidden" name="responseUrl" value={plan.payuData.responseUrl} />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-200 ${
              plan.highlighted
                ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/30 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]'
                : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
            }`}
          >
            Empezar mi Evolución
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" className="bg-[#0A0A0A] py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-widest">Invierte en ti</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3 tracking-tight">
            Elige tu <span className="text-red-600">Camino</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Sin contratos a largo plazo. Cancela cuando quieras. Cada plan incluye acceso al Método Wolf.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-gray-600 text-sm mt-10"
        >
          Todos los planes incluyen garantía de devolución de 7 días. Pago seguro vía PayU.
        </motion.p>
      </div>
    </section>
  );
}
