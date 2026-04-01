'use client'
import { Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TournamentDetails() {
    return (
        <section id="torneo" className="py-24 bg-pool-900 border-t border-white/10 overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-magenta rounded-full mix-blend-screen filter blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40% 0px -40% 0px' }}
                    transition={{ duration: 0.6 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                        <Trophy className="w-8 h-8 text-neon-yellow drop-shadow-[0_0_8px_rgba(255,230,0,0.8)]" />
                        <span className="text-neon-yellow font-bold tracking-widest uppercase drop-shadow-[0_0_8px_rgba(255,230,0,0.5)]">Torneo Oficial</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white drop-shadow-lg">
                        Vóley Acuático <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta">Spring Cup</span>
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Demuestra tus habilidades en el agua. Arma tu equipo o únete a uno en el evento.
                        ¡Premios increíbles para los ganadores bajo el sol y las luces!
                    </p>

                    <ul className="space-y-4 text-left inline-block">
                        {['Equipos mixtos', 'Eliminación directa', 'Premios en efectivo y botellas', 'Cualquiera puede participar'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-neon-cyan rounded-full shadow-[0_0_8px_rgba(0,229,255,0.8)]"></span>
                                <span className="font-medium text-gray-200">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-40% 0px -40% 0px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:w-1/2 w-full"
                >
                    {/* Placeholder for tournament image */}
                    <div className="aspect-square bg-black/40 backdrop-blur-md rounded-3xl border border-neon-cyan/30 shadow-[0_0_30px_rgba(0,229,255,0.15)] flex flex-col items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <span className="text-[120px] filter drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transform group-hover:scale-110 transition duration-500">🏐</span>
                        <p className="mt-4 font-black uppercase text-white tracking-widest opacity-50">Próximamente</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
