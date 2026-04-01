'use client'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TicketIncludes() {
    const items = [
        'Acceso general al evento',
        'DJ en vivo toda la noche',
        'Uso de todas las albercas',
        'Participación en el torneo',
        'Rifas exclusivas',
        'Premios y dinámicas',
        'Show de luces y láser',
        'Estacionamiento seguro'
    ]

    return (
        <section className="py-24 bg-pool-900 border-t border-white/10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-magenta/50 to-transparent"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40% 0px -40% 0px' }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-4 relative z-10"
            >
                <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16 drop-shadow-md">
                    ¿Qué incluye tu boleto?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-40% 0px -40% 0px' }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-white/5"
                        >
                            <CheckCircle2 className="w-6 h-6 text-neon-cyan drop-shadow-[0_0_5px_rgba(0,229,255,0.8)] shrink-0" />
                            <span className="text-lg text-gray-200 font-medium">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
