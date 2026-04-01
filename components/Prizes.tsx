'use client'
import { Gift, Disc } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Prizes() {
    return (
        <section className="py-24 bg-pool-900 border-t border-white/10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-neon-cyan/50 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* DJ Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40% 0px -40% 0px' }}
                        transition={{ duration: 0.6 }}
                        className="bg-black/30 backdrop-blur-md p-10 rounded-[2rem] shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 text-center group cursor-default"
                    >
                        <div className="w-20 h-20 bg-neon-cyan/10 text-neon-cyan rounded-full flex items-center justify-center mx-auto mb-8 border border-neon-cyan/30 shadow-[0_0_15px_rgba(0,229,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] group-hover:bg-neon-cyan/20 transition-all duration-300">
                            <Disc className="w-10 h-10 animate-spin-slow" />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-4 drop-shadow-md">Lineup Musical</h3>
                        <p className="text-gray-300 mb-8 max-w-sm mx-auto leading-relaxed">
                            DJs invitados, música continua, y los mejores beats para acompañar el atardecer entre las luces de neón.
                        </p>
                        <ul className="text-gray-200 font-medium space-y-4 text-left inline-block">
                            <li className="flex items-center gap-3"><span className="text-neon-cyan">🎧</span> Reggaeton / Perreo</li>
                            <li className="flex items-center gap-3"><span className="text-neon-cyan">🎧</span> Electrónica / House</li>
                            <li className="flex items-center gap-3"><span className="text-neon-cyan">🎧</span> Éxitos del momento</li>
                        </ul>
                    </motion.div>

                    {/* Prizes Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40% 0px -40% 0px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-black/30 backdrop-blur-md p-10 rounded-[2rem] shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 text-center group cursor-default"
                    >
                        <div className="w-20 h-20 bg-neon-magenta/10 text-neon-magenta rounded-full flex items-center justify-center mx-auto mb-8 border border-neon-magenta/30 shadow-[0_0_15px_rgba(255,0,255,0.2)] group-hover:shadow-[0_0_25px_rgba(255,0,255,0.6)] group-hover:bg-neon-magenta/20 transition-all duration-300">
                            <Gift className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-4 drop-shadow-md">Rifas y Sorpresas</h3>
                        <p className="text-gray-300 mb-8 max-w-sm mx-auto leading-relaxed">
                            Durante el evento tendremos regalos increíbles de nuestros patrocinadores oficiales.
                        </p>
                        <ul className="text-gray-200 font-medium space-y-4 text-left inline-block">
                            <li className="flex items-center gap-3"><span className="text-neon-magenta">🎁</span> Botellas y Consumo</li>
                            <li className="flex items-center gap-3"><span className="text-neon-magenta">🎁</span> Regalos Exclusivos</li>
                            <li className="flex items-center gap-3"><span className="text-neon-magenta">🎁</span> Merch Oficial</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
