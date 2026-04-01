'use client'
import TicketPurchase from './TicketPurchase'

export default function Footer() {
    return (
        <footer className="bg-pool-900 pt-24 pb-12 text-white text-center relative overflow-hidden border-t border-white/10">
            {/* Dark Pool Background Glows */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-yellow shadow-[0_0_10px_rgba(0,229,255,0.8)]"></div>
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-cyan rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                    ¿Listo para hacer <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-cyan drop-shadow-[0_0_10px_rgba(255,230,0,0.5)]">historia?</span>
                </h2>
                <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300">
                    Asegura tu lugar antes de que se agoten los boletos. La <span className="text-neon-magenta font-bold">Fase 1</span> está por terminar.
                </p>
                <div className="transform hover:scale-105 transition duration-300 drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                    <TicketPurchase />
                </div>

                <div className="mt-24 pt-8 border-t border-white/5 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Spring Day Experience. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
