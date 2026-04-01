'use client'
import { useState } from 'react'

export default function TicketPurchase() {
    const [loading, setLoading] = useState(false)

    const handlePurchase = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
            const data = await res.json()
            if (data.url) {
                window.location.href = data.url
            } else {
                alert('Error al iniciar la compra')
            }
        } catch (error) {
            console.error(error)
            alert('Error de conexión')
        } finally {
            setLoading(false)
        }
    }

    return (
        <button
            onClick={handlePurchase}
            disabled={loading}
            className="bg-festival-pink hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-xl animate-pulse"
        >
            {loading ? 'Procesando...' : 'Comprar boleto ahora'}
        </button>
    )
}
