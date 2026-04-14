import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "I've never lifted a weight before.",
    answer:
      "Every program is tailored to your exact starting point. We build your foundation safely — starting with movement quality, joint stability, and progressive overload principles. There's no prerequisite level of fitness to begin. The starting line is wherever you are today.",
  },
  {
    question: 'I have a busy schedule.',
    answer:
      "We design 45-minute high-efficiency workouts that fit into executive and parental schedules. Every session is built around the principle of minimum effective dose — maximum stimulus, minimum time waste. If you have 45 focused minutes, three to four times per week, we can drive serious body-recomposition.",
  },
  {
    question: 'Is nutrition included?',
    answer:
      "Yes — a full macro breakdown is provided to ensure your engine is properly fueled. Nutrition is non-negotiable in any performance-optimization protocol. You'll receive a personalized macronutrient target, meal timing guidelines, and food substitution lists adapted to your preferences and lifestyle.",
  },
  {
    question: 'How quickly will I see results?',
    answer:
      "Most clients begin noticing meaningful changes within 4–6 weeks: improved energy levels, better sleep, visible strength gains, and early signs of body-recomposition. Significant visual transformation typically occurs between weeks 8–12. Sustainable, lasting results are built over 6+ months of consistent effort.",
  },
  {
    question: 'What if I travel frequently?',
    answer:
      "Travel-adapted protocols are included in all plans. Hotel room, outdoor, and minimal equipment programs are built into your rotation so your progress never stalls regardless of location. Advanced plan clients receive real-time program adjustments based on travel itineraries.",
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      "Yes — there are no long-term contracts or cancellation fees. You're billed monthly and can cancel before your next billing cycle. We're confident in the results of the Wolf Method and believe retention should be earned through performance, not locked in by contracts.",
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
    <section className="bg-[#0D0D0D] py-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3 tracking-tight">
            Answers to Your <span className="text-red-600">Doubts</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Doubt is just the starting gate. Let's clear the runway.
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
          <p className="text-gray-400 mb-6">Still have a question? Your evolution can't wait.</p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToPricing}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors duration-200 shadow-lg shadow-red-900/30"
          >
            Start My Evolution
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
