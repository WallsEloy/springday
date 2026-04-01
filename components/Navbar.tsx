'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const pathname = usePathname()

    // Prefix hash links if not on the home page so they route back
    const getHref = (hash: string) => {
        if (hash.startsWith('#') && pathname !== '/') {
            return `/${hash}`
        }
        return hash
    }

    const navLinks = [
        { name: 'Registro', href: '/registro' },
        { name: 'La Experiencia', href: '#experiencia' },
        { name: 'Torneo', href: '#torneo' },
        { name: 'Ubicación', href: '#ubicacion' },
        { name: 'FAQ', href: '#faq' },
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm pt-[56px] pb-8' : 'bg-transparent pt-[56px] pb-8'
                }`}
        >
            <div className="max-w-8xl mx-auto px-12 sm:px-16 lg:px-30 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#" className="flex items-center transition-transform hover:scale-105">
                        <img 
                            src="/logo_abrev.png" 
                            alt="Logo SD5" 
                            className="h-10 w-auto"
                        />
                    </a>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={getHref(link.href)}
                            className={`text-sm font-medium transition-colors hover:text-festival-pink ${scrolled || pathname !== '/' ? 'text-gray-600' : 'text-white/90'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={getHref('#comprar')}
                        className={`px-5 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105 shadow-md ${scrolled || pathname !== '/' ? 'bg-pool-600 text-white hover:bg-pool-700' : 'bg-white text-pool-900 hover:bg-gray-100'
                            }`}
                    >
                        Comprar Boletos
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={(scrolled || pathname !== '/') ? 'text-gray-900' : 'text-white'}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={getHref(link.href)}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-3 py-4 text-base font-medium text-gray-800 border-b border-gray-50"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4">
                                <a
                                    href={getHref('#comprar')}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block w-full text-center px-5 py-3 rounded-full font-bold text-white bg-pool-600 hover:bg-pool-700 shadow-sm"
                                >
                                    Comprar Boletos Rápidamente
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
