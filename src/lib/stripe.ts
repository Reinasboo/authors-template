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
    formats: {
      paperback: 'https://www.barnesandnoble.com/w/letter-to-home-from-the-sandbox-scott-g-a-metcalf/1148702970?ean=9798349679315',
      hardcover: 'https://www.barnesandnoble.com/w/letter-to-home-from-the-sandbox-scott-g-a-metcalf/1148702970?ean=9798349679353',
    },
  },
  'soldiers-sandbox': {
    id: 'soldiers-sandbox',
    name: 'Soldiers in the Sandbox',
    price: 500, // $5.00
    description: 'Continued Reflections from the Field',
    filename: 'soldiers-in-sandbox.pdf',
    image: 'https://imgur.com/R6qIVw3.jpg',
    formats: {
      paperback: 'https://www.barnesandnoble.com/w/soldiers-in-the-sandbox-scott-g-a-metcalf/1149044044?ean=9798295506666',
      hardcover: 'https://www.barnesandnoble.com/w/soldiers-in-the-sandbox-scott-g-a-metcalf/1149044044?ean=9798295507502',
    },
  },
  'inside-walls': {
    id: 'inside-walls',
    name: 'Inside The Walls',
    price: 1000, // $10.00
    description: 'A Correctional Officer Memoir',
    filename: 'inside-the-walls.pdf',
    image: 'https://imgur.com/D8JMFN8.jpg',
    formats: {
      paperback: 'https://www.barnesandnoble.com/w/inside-the-walls-scott-g-a-metcalf/1149779487?ean=9798295746697',
      hardcover: 'https://www.barnesandnoble.com/w/inside-the-walls-scott-g-a-metcalf/1149779487?ean=9798295484346',
    },
  },
  'crazy-lady': {
    id: 'crazy-lady',
    name: 'Crazy Lady',
    price: 1000, // $10.00
    description: 'A Novel',
    filename: 'crazy-lady.pdf',
    image: 'https://imgur.com/GfjSvqm.jpg',
    formats: {
      paperback: 'https://www.barnesandnoble.com/w/inside-the-walls-scott-g-a-metcalf/1149779487?ean=9798295484346',
      hardcover: 'https://www.barnesandnoble.com/w/crazy-lady-scott-g-a-metcalf/1149078445?ean=9781977287106',
    },
  },
  'starting-from-scratch': {
    id: 'starting-from-scratch',
    name: 'Starting From Scratch',
    price: 500, // $5.00
    description: 'A Journey of Reinvention',
    filename: 'starting-from-scratch.pdf',
    image: 'https://imgur.com/4WGRSKH.jpg',
    formats: {
      paperback: 'https://www.barnesandnoble.com/w/crazy-lady-scott-g-a-metcalf/1149078445?ean=9781977287106',
    },
  },
} as const

export type BookId = keyof typeof bookProducts
