'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { motion } from 'framer-motion'
import { bookProducts, type BookId } from '@/lib/stripe'
import Button from '@/components/Button'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
)

interface CheckoutFormProps {
  bookId: BookId
}

function CheckoutForm({ bookId }: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const book = bookProducts[bookId]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Create payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookId, email }),
      })

      const { clientSecret } = await response.json()

      // Confirm payment with card details
      const cardElement = elements.getElement(CardElement)
      if (!cardElement) throw new Error('Card element not found')

      const { error: paymentError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: { email },
          },
        })

      if (paymentError) {
        setError(paymentError.message || 'Payment failed')
      } else if (paymentIntent?.status === 'succeeded') {
        setSuccess(true)
        // Clear form
        setEmail('')
        elements.getElement(CardElement)?.clear()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-serif text-deep-brown dark:text-dark-text mb-2">
          Payment Successful!
        </h3>
        <p className="text-charcoal dark:text-dark-text-secondary mb-6">
          A download link has been sent to <strong>{email}</strong>
        </p>
        <p className="text-sm text-charcoal/70 dark:text-dark-text-secondary/70">
          Check your email for "{book.name}"
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-deep-brown dark:text-dark-text mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border-2 border-sand-dark/30 dark:border-dark-border rounded-lg bg-white dark:bg-dark-surface text-deep-brown dark:text-dark-text focus:outline-none focus:border-deep-brown dark:focus:border-green-accent"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-deep-brown dark:text-dark-text mb-2">
          Card Details
        </label>
        <div className="px-4 py-3 border-2 border-sand-dark/30 dark:border-dark-border rounded-lg bg-white dark:bg-dark-surface">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#3D2817',
                  '::placeholder': {
                    color: '#999999',
                  },
                },
                invalid: {
                  color: '#fa755a',
                },
              },
            }}
          />
        </div>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm"
        >
          {error}
        </motion.div>
      )}

      <Button
        disabled={loading || !stripe}
        className="w-full"
        variant="primary"
      >
        {loading ? 'Processing...' : `Pay $${(book.price / 100).toFixed(2)}`}
      </Button>

      <p className="text-xs text-charcoal/50 dark:text-dark-text-secondary/50 text-center">
        Your payment is secure and processed by Stripe
      </p>
    </form>
  )
}

export function StripeCheckout({ bookId }: CheckoutFormProps) {
  const book = bookProducts[bookId]

  return (
    <Elements stripe={stripePromise}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto p-8 bg-sand-light dark:bg-dark-surface rounded-lg border border-sand-dark/30 dark:border-dark-border"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif text-deep-brown dark:text-dark-text mb-2">
            Buy {book.name}
          </h2>
          <p className="text-4xl font-light text-deep-brown dark:text-dark-text">
            ${(book.price / 100).toFixed(2)}
          </p>
          <p className="text-sm text-charcoal/70 dark:text-dark-text-secondary mt-2">
            Get instant download after payment
          </p>
        </div>

        <CheckoutForm bookId={bookId} />
      </motion.div>
    </Elements>
  )
}
