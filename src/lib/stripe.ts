import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Book products configuration
export const bookProducts = {
  'letters-sand': {
    id: 'letters-sand',
    name: 'Letter to Home from the Sandbox',
    price: 1499, // $14.99 in cents
    description: 'A Reflective Memoir of Deployment',
    filename: 'letter-to-home-from-sandbox.pdf',
  },
  'soldiers-sandbox': {
    id: 'soldiers-sandbox',
    name: 'Soldiers in the Sandbox',
    price: 1499,
    description: 'Continued Reflections from the Field',
    filename: 'soldiers-in-sandbox.pdf',
  },
  'inside-walls': {
    id: 'inside-walls',
    name: 'Inside The Walls',
    price: 1499,
    description: 'A Correctional Officer Memoir',
    filename: 'inside-the-walls.pdf',
  },
  'crazy-lady': {
    id: 'crazy-lady',
    name: 'Crazy Lady',
    price: 1299, // $12.99
    description: 'A Novel',
    filename: 'crazy-lady.pdf',
  },
  'starting-from-scratch': {
    id: 'starting-from-scratch',
    name: 'Starting From Scratch',
    price: 1299,
    description: 'A Journey of Reinvention',
    filename: 'starting-from-scratch.pdf',
  },
} as const

export type BookId = keyof typeof bookProducts
