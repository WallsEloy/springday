'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import { supabase, getPublicUrl } from '@/lib/supabase'

export default function Registro() {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        edad: ''
    })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ type: '', text: '' })
    const [successData, setSuccessData] = useState<{ id: string } | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setMessage({ type: '', text: '' })

        try {
            const { data, error } = await supabase
                .from('registros')
                .insert([
                    { 
                        nombre: formData.nombre, 
                        telefono: formData.telefono, 
                        edad: parseInt(formData.edad, 10) 
                    }
                ])
                .select()

            if (error) throw error

            if (data && data.length > 0) {
                setSuccessData({ id: data[0].id })
            }
            setFormData({ nombre: '', telefono: '', edad: '' })
        } catch (error) {
            console.error('Error al registrar:', error)
            const err = error as Error
            setMessage({ type: 'error', text: err.message || 'Hubo un error al procesar tu registro.' })
        } finally {
            setLoading(false)
        }
    }

    if (successData) {
        return (
            <main className="min-h-screen bg-pool-900 relative overflow-hidden flex flex-col pt-[56px] items-center justify-center">
                <Navbar />
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan rounded-full mix-blend-screen filter blur-[200px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-magenta rounded-full mix-blend-screen filter blur-[200px] opacity-20 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="z-10 w-full max-w-lg mx-4"
                >
                    <div className="bg-black/50 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-neon-cyan/50 shadow-[0_0_50px_rgba(0,255,255,0.2)] text-center relative overflow-hidden">
                        {/* Top Gradient Border */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-neon-yellow"></div>
                        
                        <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wider mb-2">¡Registro Exitoso!</h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Tu lugar en Spring Day 5 está asegurado.
                        </p>
                        
                        <div className="bg-black/80 rounded-2xl p-6 border border-white/10 mb-8 shadow-inner">
                            <p className="text-sm text-neon-cyan uppercase tracking-widest mb-3 font-semibold">Tu ID de Registro</p>
                            <p className="text-2xl md:text-3xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta font-black tracking-wider break-all">
                                {successData.id.split('-')[0].toUpperCase()}
                            </p>
                            <p className="text-xs text-gray-500 mt-2 font-mono break-all">{successData.id}</p>
                        </div>

                        <div className="bg-festival-pink/10 border border-festival-pink/30 rounded-xl p-5 mb-8">
                            <p className="text-festival-pink font-bold mb-2 flex items-center justify-center gap-2 text-lg">
                                📸 IMPORANTE
                            </p>
                            <p className="text-sm text-gray-300">
                                Toma una captura de esta pantalla y muéstrala en la recepción de entrada para acceder al evento.
                            </p>
                        </div>
                        
                        <button 
                            onClick={() => setSuccessData(null)}
                            className="text-gray-400 hover:text-white underline text-sm transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
                        >
                            Realizar otro registro
                        </button>
                    </div>
                </motion.div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-pool-900 relative overflow-hidden flex flex-col pt-[56px]">
            <Navbar />
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan rounded-full mix-blend-screen filter blur-[200px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-magenta rounded-full mix-blend-screen filter blur-[200px] opacity-20 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            
            <div className="flex-grow flex items-center justify-center py-24 px-4 relative z-10 w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-xl"
                >
                    <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
                        {/* Top Gradient Border */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-yellow"></div>
                        
                        <div className="flex justify-center mb-8">
                            <img src={getPublicUrl('spring.svg')} alt="Spring Day Logo" className="h-24 md:h-28 w-auto filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                        </div>

                        <div className="text-center mb-10">
                            <h1 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tight">
                                Regístrate al <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-yellow">Evento</span>
                            </h1>
                            <p className="text-gray-300">Completa tus datos para asegurar tu lugar en Spring Day 5.</p>
                        </div>
                        
                        {message.text && (
                            <div className={`mb-6 p-4 rounded-xl text-center font-semibold ${message.type === 'success' ? 'bg-green-500/20 text-green-300 border border-green-500/50' : 'bg-red-500/20 text-red-300 border border-red-500/50'}`}>
                                {message.text}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Nombre Completo</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                                    placeholder="Ej. Juan Pérez"
                                    value={formData.nombre}
                                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono / WhatsApp</label>
                                <input 
                                    type="tel" 
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-magenta focus:ring-1 focus:ring-neon-magenta transition-all"
                                    placeholder="+52 123 456 7890"
                                    value={formData.telefono}
                                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Edad</label>
                                <input 
                                    type="number" 
                                    required
                                    min="18"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-yellow focus:ring-1 focus:ring-neon-yellow transition-all"
                                    placeholder="Ej. 25"
                                    value={formData.edad}
                                    onChange={(e) => setFormData({...formData, edad: e.target.value})}
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={loading}
                                className={`w-full mt-8 bg-festival-pink hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(255,0,128,0.4)] transform transition text-lg uppercase tracking-wider relative overflow-hidden group ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                            >
                                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full -translate-x-full transition-transform duration-500 skew-x-12"></div>
                                {loading ? 'Enviando...' : 'Confirmar Registro'}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
