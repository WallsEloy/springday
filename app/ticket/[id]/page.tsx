import { supabaseAdmin } from '@/lib/supabase'
import QRCode from 'qrcode'

export default async function TicketPage({ params }: { params: { id: string } }) {
    const { id } = params

    // id is the stripe_session_id
    const { data: ticket, error } = await supabaseAdmin
        .from('tickets')
        .select('*')
        .eq('stripe_session_id', id)
        .single()

    if (error || !ticket) {
        // Stripe redirects immediately, webhook might take a second to process
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 text-center px-4">
                <div className="max-w-md p-8 bg-white rounded-2xl shadow-md border border-gray-100">
                    <h1 className="text-2xl font-bold mb-4 text-gray-800">Procesando pago...</h1>
                    <p className="text-gray-600 mb-6">Estamos confirmando tu boleto y generando el código QR. Por favor actualiza esta página en unos segundos.</p>
                    <a href={`/ticket/${id}`} className="inline-block px-8 py-3 bg-pool-500 hover:bg-pool-600 font-bold text-white rounded-full transition-colors">
                        Actualizar Página
                    </a>
                </div>
            </div>
        )
    }

    const qrCodeDataUrl = await QRCode.toDataURL(ticket.qr_code, {
        width: 300,
        margin: 2,
        color: {
            dark: '#111827',
            light: '#ffffff'
        }
    })

    return (
        <div className="min-h-screen bg-pool-50 py-10 px-4 flex items-center justify-center">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-md w-full text-center border-t-8 border-festival-pink relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

                <h2 className="text-sm font-bold tracking-widest text-pool-500 uppercase mb-2">Boleto Oficial</h2>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Spring Day <br /> Edición 5</h1>
                <p className="text-gray-500 mb-8">{ticket.email}</p>

                <div className="bg-gray-50 p-6 rounded-2xl flex justify-center mb-8 inline-block shadow-inner mx-auto border border-gray-200">
                    <img src={qrCodeDataUrl} alt="Ticket QR Code" className="w-64 h-64 object-contain" />
                </div>

                <div className="text-xl font-bold tracking-widest text-gray-800 bg-gray-100 py-3 rounded-lg mb-8 border border-gray-200">
                    {ticket.qr_code}
                </div>

                <div className="space-y-4 text-left border-t border-gray-100 pt-8 mt-8">
                    <div>
                        <p className="text-sm text-gray-500">Fecha</p>
                        <p className="font-semibold text-gray-800">2 de Abril, 12:00 PM</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Lugar</p>
                        <p className="font-semibold text-gray-800">Balneario Cuauhtémoc</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Estado</p>
                        <p className="font-semibold text-green-600 tracking-wider">PAGADO / CONFIRMADO</p>
                    </div>
                </div>

                <p className="text-xs text-gray-400 mt-8">
                    Muestra este código en la entrada del evento. No lo compartas con nadie.
                </p>
            </div>
        </div>
    )
}
