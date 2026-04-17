import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
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

      if (metadata.bookId && metadata.email) {
        // Send email with download link
        await sendDownloadEmail(
          metadata.email,
          metadata.bookId,
          metadata.bookName || 'Your Book'
        )
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

async function sendDownloadEmail(
  email: string,
  bookId: string,
  bookName: string
) {
  // For now, we'll just log this
  // In production, integrate with email service (SendGrid, Nodemailer, etc.)
  const downloadUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/download/${bookId}?email=${email}`
  console.log(`Sending download link to ${email} for ${bookName}: ${downloadUrl}`)

  // Example email body:
  // Subject: Your Book is Ready to Download
  // Body: Click here to download ${bookName}: ${downloadUrl}
}
