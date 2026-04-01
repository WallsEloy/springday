import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy', {
    apiVersion: '2023-10-16' as any,
})

export async function POST(req: Request) {
    try {
        const origin = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'mxn',
                        product_data: {
                            name: 'Spring Day - Pool Party Experience (Edición 5) General',
                            description: 'Acceso general al evento del 2 de Abril',
                        },
                        unit_amount: 50000, // $500.00 MXN in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/ticket/{CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/`,
        })

        return NextResponse.json({ url: session.url })
    } catch (error: any) {
        console.error('Checkout error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
