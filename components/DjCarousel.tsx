'use client'
import { motion } from 'framer-motion'

export default function DjCarousel() {
    // We duplicate the array to achieve seamless infinite scrolling
    const djs = [
        { name: 'DJ Alan', style: 'Live Set', img: '/djs/alanMesa de trabajo 1 copia.jpg' },
        { name: 'DJ Antonis', style: 'Live Set', img: '/djs/antonisMesa de trabajo 1 copia.jpg' },
        { name: 'DJ Chipax', style: 'Live Set', img: '/djs/chipaxMesa de trabajo 1 copia.jpg' },
        { name: 'DJ Drope', style: 'Live Set', img: '/djs/dropeMesa de trabajo 1 copia.jpg' },
        { name: 'DJ Francia', style: 'Live Set', img: '/djs/f1Mesa de trabajo 1 copia.jpg' },
        { name: 'DJ Ivan', style: 'Live Set', img: '/djs/ivanMesa de trabajo 1 copia.jpg' },
        { name: 'DJ Leonard', style: 'Live Set', img: '/djs/leonardMesa de trabajo 1 copia.jpg' },
        { name: 'DJ Nur', style: 'Live Set', img: '/djs/nurMesa de trabajo 1 copia.jpg' },
        { name: 'DJ SeA2', style: 'Live Set', img: '/djs/seA2Mesa de trabajo 1 copia.jpg' },
        { name: 'DJ Se', style: 'Live Set', img: '/djs/seMesa de trabajo 1 copia.jpg' },
        { name: 'DJ Sell2', style: 'Live Set', img: '/djs/sell2Mesa de trabajo 1 copia.jpg' },
        { name: 'DJ Subieta', style: 'Live Set', img: '/djs/subietaMesa de trabajo 1 copia.jpg' },
    ]

    return (
        <section className="py-20 bg-pool-900 border-t border-white/10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
            
            <div className="max-w-6xl mx-auto px-4 text-center mb-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40% 0px -40% 0px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-2">
                        Lineup <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta">Estelar</span>
                    </h2>
                    <p className="text-gray-400">Nuestros invitados especiales preparados para hacer vibrar la quinta edición</p>
                </motion.div>
            </div>

            <div className="relative w-full overflow-hidden flex bg-black/20 py-10 border-y border-white/5 backdrop-blur-sm">
                {/* Marquee Container */}
                <div className="animate-marquee gap-8 px-4 flex">
                    {/* Render the array twice to make it infinite and seamless */}
                    {[...djs, ...djs].map((dj, i) => (
                        <div 
                            key={i} 
                            className="w-64 flex-shrink-0 group cursor-pointer"
                        >
                            <div className="w-64 h-80 rounded-2xl overflow-hidden relative shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/10 group-hover:border-neon-cyan/50 transition duration-500">
                                <div className="absolute inset-0 bg-gradient-to-t from-pool-900 via-transparent to-transparent z-10 opacity-80 group-hover:opacity-60 transition duration-500"></div>
                                
                                <img 
                                    src={dj.img} 
                                    alt={dj.name} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                                />
                                
                                <div className="absolute bottom-4 left-4 z-20">
                                    <h3 className="text-xl font-black text-white uppercase tracking-wide group-hover:text-neon-cyan transition">{dj.name}</h3>
                                    <p className="text-sm font-medium text-neon-magenta drop-shadow-md">{dj.style}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Left/Right Fades for a cleaner look */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-pool-900 to-transparent pointer-events-none z-20"></div>
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-pool-900 to-transparent pointer-events-none z-20"></div>
            </div>
        </section>
    )
}
