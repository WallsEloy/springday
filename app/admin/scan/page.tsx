'use client'
import { useState } from 'react'

export default function AdminScan() {
    const [code, setCode] = useState('')
    const [result, setResult] = useState<{ success?: boolean; error?: string; message?: string } | null>(null)
    const [loading, setLoading] = useState(false)

    const handleValidate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!code) return

        setLoading(true)
        setResult(null)

        try {
            const res = await fetch('/api/admin/validate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ qr_code: code.trim().toUpperCase() })
            })
            const data = await res.json()
            if (res.ok) {
                setResult({ success: true, message: data.message })
                setCode('')
            } else {
                setResult({ success: false, error: data.error })
            }
        } catch (err: any) {
            setResult({ success: false, error: 'Error de red' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 flex flex-col items-center">
            <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl">
                <div className="inline-block bg-pool-100 text-pool-800 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-6">
                    MÓDULO DE ADMINISTRACIÓN
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 leading-tight">
                    Validación de <br /><span className="text-pool-600">Boletos</span>
                </h1>

                <form onSubmit={handleValidate} className="mb-8 relative">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Ingresa o Escanea el Código</label>
                    <input
                        type="text"
                        value={code}
                        onChange={e => setCode(e.target.value)}
                        placeholder="SD5-XXXX-XXXX"
                        className="w-full text-center text-2xl font-bold p-5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pool-500 focus:ring-4 focus:ring-pool-500/20 mb-6 uppercase shadow-inner"
                    />
                    <button
                        type="submit"
                        disabled={loading || !code}
                        className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-95"
                    >
                        {loading ? 'Validando...' : 'Validar Boleto'}
                    </button>
                </form>

                {result && (
                    <div className={`p-6 rounded-2xl text-center shadow-inner animate-fade-in ${result.success ? 'bg-green-50 text-green-800 border-2 border-green-500' : 'bg-red-50 text-red-800 border-2 border-red-500'}`}>
                        {result.success ? (
                            <>
                                <div className="text-6xl mb-4">✅</div>
                                <h2 className="text-2xl font-bold tracking-tight">{result.message}</h2>
                            </>
                        ) : (
                            <>
                                <div className="text-6xl mb-4">❌</div>
                                <h2 className="text-2xl font-bold tracking-tight">{result.error}</h2>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
