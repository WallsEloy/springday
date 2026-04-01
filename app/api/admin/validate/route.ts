import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: Request) {
    try {
        const { qr_code } = await req.json()

        if (!qr_code) return NextResponse.json({ error: 'Falta código QR' }, { status: 400 })

        // 1. Find ticket
        const { data: ticket, error: ticketError } = await supabaseAdmin
            .from('tickets')
            .select('id, payment_status')
            .eq('qr_code', qr_code)
            .single()

        if (ticketError || !ticket) {
            return NextResponse.json({ error: 'Boleto no encontrado' }, { status: 404 })
        }

        if (ticket.payment_status !== 'paid') {
            return NextResponse.json({ error: 'Pago no completado' }, { status: 400 })
        }

        // 2. Check if already checked in
        const { data: checkin } = await supabaseAdmin
            .from('checkins')
            .select('id, scanned_at')
            .eq('ticket_id', ticket.id)
            .single()

        if (checkin) {
            return NextResponse.json({
                error: 'Boleto YA USADO',
                used: true,
                scanned_at: checkin.scanned_at
            }, { status: 400 })
        }

        // 3. Register check-in
        const { error: insertError } = await supabaseAdmin
            .from('checkins')
            .insert({
                ticket_id: ticket.id,
                used: true
            })

        if (insertError) {
            return NextResponse.json({ error: 'Error al registrar entrada' }, { status: 500 })
        }

        return NextResponse.json({ success: true, message: '¡Acceso Concedido!' })
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 })
    }
}
