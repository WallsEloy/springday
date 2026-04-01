'use client'
import { Music, Waves, Trophy, PartyPopper, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Description() {
    const features = [
        { icon: Music, label: 'Música', color: 'text-neon-magenta', bg: 'bg-white/5', glow: 'group-hover:shadow-[0_0_15px_rgba(255,0,255,0.5)]' },
        { icon: Waves, label: 'Albercas', color: 'text-neon-cyan', bg: 'bg-white/5', glow: 'group-hover:shadow-[0_0_15px_rgba(0,229,255,0.5)]' },
        { icon: Trophy, label: 'Competencia', color: 'text-neon-yellow', bg: 'bg-white/5', glow: 'group-hover:shadow-[0_0_15px_rgba(255,230,0,0.5)]' },
        { icon: PartyPopper, label: 'Fiesta', color: 'text-festival-pink', bg: 'bg-white/5', glow: 'group-hover:shadow-[0_0_15px_rgba(213,0,109,0.5)]' },
        { icon: Users, label: 'Conexión', color: 'text-sunset-500', bg: 'bg-white/5', glow: 'group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]' },
    ]

    return (
        <section id="experiencia" className="py-20 bg-pool-900 border-t border-white/10 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-neon-cyan rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40% 0px -40% 0px' }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto px-4 text-center relative z-10"
            >
                <h3 className="text-sm font-bold tracking-widest text-neon-cyan uppercase mb-4 drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]">La Experiencia</h3>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-12 drop-shadow-lg">
                    Más que una fiesta
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {features.map((f, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-40% 0px -40% 0px' }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="flex flex-col items-center gap-4 group cursor-default"
                        >
                            <div className={`p-6 rounded-full border border-white/10 backdrop-blur-sm transition duration-300 transform group-hover:-translate-y-2 ${f.bg} ${f.color} ${f.glow}`}>
                                <f.icon className="w-10 h-10" />
                            </div>
                            <span className="font-bold text-gray-300 tracking-wide uppercase text-sm">{f.label}</span>
                        </motion.div>
                    ))}
                </div>

                <p className="mt-16 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed border border-white/10 p-8 rounded-3xl bg-black/20 backdrop-blur-sm">
                    <span className="font-bold text-neon-yellow">Spring Day</span> es el evento donde el sol, el agua y la buena música se encuentran para crear recuerdos inolvidables.
                    Prepárate para desconectar del mundo y conectar con la diversión bajo un ambiente electrizante.
                </p>
            </motion.div>
        </section>
    )
}
