'use client'
import { motion } from 'framer-motion'
import { getPublicUrl } from '@/lib/supabase'

export default function Sponsors() {
    // Placeholder logos indicating where sponsor images would go
    const sponsors = [
        { name: 'Sponsor 1', logo: getPublicUrl('logos/PTRecurso 1@300x-8.png') },
        { name: 'Sponsor 2', logo: getPublicUrl('logos/PTRecurso 2@300x-8.png') },
        { name: 'Sponsor 3', logo: getPublicUrl('logos/PTRecurso 3@300x-8.png') },
        { name: 'Sponsor 4', logo: getPublicUrl('logos/PTRecurso 4@300x-8.png') },
        { name: 'Sponsor 5', logo: getPublicUrl('logos/PTRecurso 5@300x-8.png') },
        { name: 'Sponsor 6', logo: getPublicUrl('logos/PTRecurso 6@300x-8.png') },
        { name: 'Sponsor 8', logo: getPublicUrl('logos/PTRecurso 8@300x-8.png') },
        { name: 'Sponsor 9', logo: getPublicUrl('logos/PTRecurso 9@300x-8.png') },
        { name: 'Sponsor 10', logo: getPublicUrl('logos/PTRecurso 10@300x-8.png') },
        { name: 'Sponsor 11', logo: getPublicUrl('logos/PTRecurso 11@300x-8.png') },
        { name: 'Sponsor 12', logo: getPublicUrl('logos/PTRecurso 12@300x-8.png') },
        { name: 'Sponsor 13', logo: getPublicUrl('logos/PTRecurso 13@300x-8.png') },
        { name: 'Sponsor 14', logo: getPublicUrl('logos/PTRecurso 14@300x-8.png') },
        { name: 'Sponsor 15', logo: getPublicUrl('logos/PTRecurso 15@300x-8.png') },
        { name: 'Sponsor 16', logo: getPublicUrl('logos/PTRecurso 16@300x-8.png') },
        { name: 'Sponsor 17', logo: getPublicUrl('logos/PTRecurso 17@300x-8.png') },
        { name: 'Sponsor 18', logo: getPublicUrl('logos/PTRecurso 18@300x-8.png') },
        { name: 'Sponsor 19', logo: getPublicUrl('logos/PTRecurso 19@300x-8.png') },
        { name: 'Sponsor 20', logo: getPublicUrl('logos/PTRecurso 20@300x-8.png') },
        { name: 'Sponsor 21', logo: getPublicUrl('logos/PTRecurso 21@300x-8.png') },
        { name: 'Sponsor 22', logo: getPublicUrl('logos/PTRecurso 22@300x-8.png') },
        { name: 'Sponsor 23', logo: getPublicUrl('logos/PTRecurso 23@300x-8.png') },
        { name: 'Sponsor 24', logo: getPublicUrl('logos/PTRecurso 24@300x-8.png') },
        { name: 'Sponsor 25', logo: getPublicUrl('logos/PTRecurso 25@300x-8.png') },
        { name: 'Sponsor 26', logo: getPublicUrl('logos/PTRecurso 26@300x-8.png') },
    ]

    return (
        <section className="py-20 bg-pool-900 border-t border-white/10 overflow-hidden relative">
            <div className="max-w-6xl mx-auto px-4 text-center mb-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40% 0px -40% 0px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-2">
                        Patrocinadores
                    </h2>
                    <p className="text-gray-400">Gracias a las marcas que hacen esto posible</p>
                </motion.div>
            </div>

            <div className="relative w-full overflow-hidden flex py-8 border-y border-white/5 bg-black/40">
                {/* Marquee Container */}
                <div className="animate-marquee gap-10 px-4 flex items-center">
                    {/* Render the array twice to make it infinite and seamless */}
                    {[...sponsors, ...sponsors].map((sponsor, i) => (
                        <div 
                            key={i} 
                            className="w-40 h-24 flex-shrink-0 group cursor-pointer flex items-center justify-center transition-all duration-300"
                        >
                            <img 
                                src={sponsor.logo} 
                                alt={sponsor.name} 
                                className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500"
                            />
                        </div>
                    ))}
                </div>

                {/* Left/Right Fades for a cleaner look */}
                <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-pool-900 to-transparent pointer-events-none z-20"></div>
                <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-pool-900 to-transparent pointer-events-none z-20"></div>
            </div>
        </section>
    )
}
