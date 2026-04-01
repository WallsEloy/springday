export type TicketStatus = 'pending' | 'paid' | 'used'

export interface Ticket {
    id: string
    email: string
    stripe_session_id?: string
    payment_status: 'pending' | 'paid'
    qr_code?: string
    created_at: string
}

export interface Checkin {
    id: string
    ticket_id: string
    used: boolean
    scanned_at: string
}
