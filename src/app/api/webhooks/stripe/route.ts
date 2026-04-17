import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { sendDownloadEmail } from '@/lib/send-email'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    )
  }

  try {
    const stripe = getStripe()
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    ) as Stripe.Event

    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      const metadata = paymentIntent.metadata

      if (metadata.bookId && metadata.email && metadata.bookName) {
        // Send email with download link
        const downloadUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/download/${metadata.bookId}?email=${encodeURIComponent(metadata.email)}`
        
        await sendDownloadEmail({
          email: metadata.email,
          bookName: metadata.bookName,
          downloadUrl,
        })
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    )
  }
}
