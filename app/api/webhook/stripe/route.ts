import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabaseAdmin } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy', {
    apiVersion: '2023-10-16' as any,
})

export async function POST(req: Request) {
    const body = await req.text()
    const signature = req.headers.get('Stripe-Signature') as string

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET || 'whsec_dummy'
        )
    } catch (error: any) {
        console.error('Webhook signature verification failed:', error.message)
        return NextResponse.json({ error: `Webhook Error: ${error.message}` }, { status: 400 })
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session

        const email = session.customer_details?.email || 'no-email@example.com'
        const stripeSessionId = session.id

        // Generate a unique QR code string (easier to read manually if needed)
        const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase()
        const qrCode = `SD5-${randomPart}-${stripeSessionId.slice(-6).toUpperCase()}`

        // Insert ticket into Supabase using the admin client (bypasses RLS)
        const { error } = await supabaseAdmin
            .from('tickets')
            .insert({
                email,
                stripe_session_id: stripeSessionId,
                payment_status: 'paid',
                qr_code: qrCode
            })

        if (error) {
            console.error('Error inserting ticket into Supabase:', error)
            return NextResponse.json({ error: 'Database error' }, { status: 500 })
        }

        console.log(`Ticket provisioned for ${email} with session ${stripeSessionId}`)
    }

    return NextResponse.json({ received: true })
}
