import Stripe from 'stripe'

let stripeInstance: Stripe | null = null

export const getStripe = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set in environment variables')
  }
  
  if (!stripeInstance) {
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY)
  }
  
  return stripeInstance
}

// Book products configuration
export const bookProducts = {
  'letters-from-sand': {
    id: 'letters-from-sand',
    name: 'Letters from the Sand',
    price: 1000, // $10.00
    description: 'Correspondence and Reflections',
    filename: 'letters-from-the-sand.pdf',
    image: 'https://imgur.com/OAJtzds.jpg',
  },
  'soldiers-sandbox': {
    id: 'soldiers-sandbox',
    name: 'Soldiers in the Sandbox',
    price: 500, // $5.00
    description: 'Continued Reflections from the Field',
    filename: 'soldiers-in-sandbox.pdf',
    image: 'https://imgur.com/R6qIVw3.jpg',
  },
  'inside-walls': {
    id: 'inside-walls',
    name: 'Inside The Walls',
    price: 1000, // $10.00
    description: 'A Correctional Officer Memoir',
    filename: 'inside-the-walls.pdf',
    image: 'https://imgur.com/D8JMFN8.jpg',
  },
  'crazy-lady': {
    id: 'crazy-lady',
    name: 'Crazy Lady',
    price: 1000, // $10.00
    description: 'A Novel',
    filename: 'crazy-lady.pdf',
    image: 'https://imgur.com/GfjSvqm.jpg',
  },
  'starting-from-scratch': {
    id: 'starting-from-scratch',
    name: 'Starting From Scratch',
    price: 500, // $5.00
    description: 'A Journey of Reinvention',
    filename: 'starting-from-scratch.pdf',
    image: 'https://imgur.com/4WGRSKH.jpg',
  },
} as const

export type BookId = keyof typeof bookProducts
