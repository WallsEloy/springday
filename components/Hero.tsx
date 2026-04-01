'use client'
import { Calendar, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import TicketPurchase from './TicketPurchase'
import { getPublicUrl } from '@/lib/supabase'

export default function Hero() {
    return (
        <section className="relative bg-pool-900 h-[850px] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-40 lg:pt-64 pb-20 lg:pb-32">
            {/* Background Decorative Laser/Glows */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[50px] bg-neon-cyan rotate-45 mix-blend-screen filter blur-[60px] opacity-40"></div>
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[50px] bg-neon-magenta -rotate-45 mix-blend-screen filter blur-[60px] opacity-40"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>

            <div className="z-10 max-w-5xl mx-auto space-y-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block bg-neon-magenta text-white font-black px-6 py-1 rounded-full text-sm md:text-base tracking-[0.2em] mb-2 uppercase shadow-[0_0_15px_rgba(255,0,255,0.5)]">
                        Edición 5
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
                    className="relative inline-block"
                >
                    {/* The "Spring Day" logo text mimicking the image */}
                    <h1 className="text-7xl md:text-8xl font-script text-neon-yellow logo-shadow transform -rotate-2 select-none flex justify-center w-full">
                        <img src={getPublicUrl('spring.svg')} alt="Spring Day Logo" className="w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw] max-w-xl drop-shadow-[0_0_15px_rgba(255,255,0,0.8)]" />
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-6"
                >
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-widest text-white mb-1 drop-shadow-md">
                        Electronic Music
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-neon-cyan neon-text-cyan mb-8">
                        Pool Party
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg md:text-xl font-bold bg-black/30 backdrop-blur-md py-4 px-8 rounded-2xl border border-white/10"
                >
                    <div className="flex items-center gap-3 text-neon-cyan">
                        <Calendar className="w-6 h-6" />
                        <span className="text-white">2 de Abril</span>
                    </div>
                    <div className="hidden md:block text-white/30">|</div>
                    <div className="flex items-center gap-3 text-neon-magenta">
                        <MapPin className="w-6 h-6" />
                        <span className="text-white">Balneario Cuauhtémoc</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="pt-10"
                    id="comprar"
                >
                    <TicketPurchase />
                    <p className="mt-6 text-sm md:text-base font-bold text-neon-yellow animate-pulse tracking-wide">
                        ¡PREVENTA FASE 1 - CUPO LIMITADO!
                    </p>
                </motion.div>
            </div>


        </section>
    )
}
