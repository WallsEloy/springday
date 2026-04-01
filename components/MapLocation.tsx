'use client'
import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MapLocation() {
    return (
        <section id="ubicacion" className="py-24 bg-pool-900 relative overflow-hidden">
            {/* Dark Map Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-pool-900 to-transparent opacity-80 pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40% 0px -40% 0px' }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-4 text-center relative z-10"
            >
                <div className="flex items-center justify-center gap-3 mb-6">
                    <MapPin className="w-10 h-10 text-neon-yellow drop-shadow-[0_0_10px_rgba(255,230,0,0.8)]" />
                    <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">Ubicación</h2>
                </div>
                <h3 className="text-2xl font-bold text-neon-cyan mb-4 drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]">Balneario Cuauhtémoc</h3>
                <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                    El oasis perfecto para nuestra quinta edición. Fácil acceso, amplio estacionamiento y las mejores instalaciones para una pool party épica.
                </p>
                <div className="aspect-video w-full bg-black/50 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.15)] border border-neon-cyan/20 p-2">
                    <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                        {/* Placeholder for iframe during build, replace with actual iframe securely */}
                        <iframe
                            title="Mapa de Ubicación"
                            src="https://maps.google.com/maps?q=20.03085,-100.72194&hl=es&z=15&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, position: 'absolute', top: 0, left: 0, filter: 'invert(90%) hue-rotate(180deg) opacity(80%)' }}
                            allowFullScreen={false}
                            loading="lazy"
                        ></iframe>
                        {/* Overlay to give the map a colored tint matching the theme */}
                        <div className="absolute inset-0 bg-neon-cyan/10 pointer-events-none mix-blend-color"></div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
