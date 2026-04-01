'use client'
import { motion } from 'framer-motion'
import { getPublicUrl } from '@/lib/supabase'

export default function VideoGrid() {
    return (
        <section className="py-20 bg-pool-900 text-white overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-4 text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                    Esto no es una promesa.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]">Es una tradición.</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto border border-white/10 p-6 rounded-3xl bg-black/20 backdrop-blur-sm">
                    Revive los mejores momentos de las ediciones pasadas. La quinta edición será legendaria.
                </p>
            </motion.div>

            <div className="flex flex-col w-full relative">
                {[
                    getPublicUrl('secuencia_03.mp4'), 
                    getPublicUrl('secuencia_03_1.mp4'), 
                    getPublicUrl('secuencia_03_2.mp4')
                ].map((videoSrc, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8 }}
                        className="w-full border-y border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.15)] bg-black mb-8 last:mb-0"
                    >
                        <video 
                            src={videoSrc} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            controls
                            className="w-full h-auto max-h-[85vh] object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
