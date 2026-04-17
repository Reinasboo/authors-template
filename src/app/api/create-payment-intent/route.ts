import { NextRequest, NextResponse } from 'next/server'
import { getStripe, bookProducts, type BookId } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const { bookId, email } = await request.json()

    // Validate book ID
    if (!bookId || !bookProducts[bookId as BookId]) {
      return NextResponse.json(
        { error: 'Invalid book ID' },
        { status: 400 }
      )
    }

    const book = bookProducts[bookId as BookId]

    // Create Stripe payment intent
    const stripe = getStripe()
    const paymentIntent = await stripe.paymentIntents.create({
      amount: book.price,
      currency: 'usd',
      metadata: {
        bookId,
        email,
        bookName: book.name,
      },
      description: `Purchase: ${book.name}`,
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      bookId,
      amount: book.price,
      bookName: book.name,
    })
  } catch (error) {
    console.error('Payment intent error:', error)
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    )
  }
}
