'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
    const faqs = [
        {
            question: '¿Qué es el Spring Day - Pool Party Experience?',
            answer: 'Es nuestro evento masivo anual en su 5ta edición, donde celebramos la primavera con música electrónica, albercas llenas, torneos de vóley, DJs invitados y mucha diversión continua a lo largo de todo el día.'
        },
        {
            question: '¿Habrá venta de boletos en taquilla?',
            answer: 'La disponibilidad en taquilla está sujeta a que no hagamos Sold Out antes. Te recomendamos ampliamente comprar tu boleto digital en esta página para asegurar tu lugar en la fiesta.'
        },
        {
            question: '¿Qué tipo de ropa debo llevar?',
            answer: 'Ropa fresca, traje de baño, toalla, lentes de sol y bloqueador. Buscamos el mejor ambiente de pool party nivel festival, así que ven preparado para el agua y las luces de neón.'
        },
        {
            question: '¿Cómo funciona el torneo de vóley acuático?',
            answer: 'Puedes registrar a tu equipo (mixto) o registrarte individualmente el día del evento en la zona del torneo. Es de eliminación directa y habrá premios en efectivo y regalos exclusivos.'
        },
        {
            question: '¿A qué hora empieza y a qué hora termina el evento?',
            answer: 'El acceso general comenzará a la 1:00 PM con la mejor vibra bajo el sol, y continuaremos disfrutando de la música y la alberca hasta las 10:00 PM bajo las luces.'
        }
    ]

    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section id="faq" className="py-24 bg-pool-900 border-t border-white/10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-magenta rounded-full mix-blend-screen filter blur-[200px] opacity-5 pointer-events-none"></div>

            <div className="max-w-3xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-md">Preguntas Frecuentes</h2>
                    <p className="text-gray-400 text-lg">Todo lo que necesitas saber antes de la <span className="text-neon-cyan font-bold">pool party</span>.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-black/40 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 overflow-hidden transition-all duration-300 hover:border-neon-cyan/30"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center py-6 px-6 md:px-8 text-left focus:outline-none"
                            >
                                <span className={`font-bold transition-colors duration-300 ${openIndex === index ? 'text-neon-cyan' : 'text-gray-200'}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-6 h-6 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-neon-cyan' : 'text-gray-500'}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-6 md:px-8 pb-6 text-gray-300 leading-relaxed"
                                    >
                                        <div className="pt-2 border-t border-white/5">
                                            <p className="mt-4">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
