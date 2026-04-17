# Stripe Integration Setup Guide

## Overview
This author portfolio now includes Stripe integration for selling ebooks with instant downloads.

## Setup Instructions

### 1. Get Stripe API Keys
1. Create a Stripe account at https://stripe.com
2. Go to https://dashboard.stripe.com/apikeys
3. Copy your **Publishable Key** and **Secret Key**

### 2. Configure Environment Variables
Create/update `.env.local` with:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_KEY
STRIPE_WEBHOOK_SECRET=whsec_YOUR_SECRET
NEXT_PUBLIC_APP_URL=https://yoursite.com
```

### 3. Setup Stripe Webhook (Production)
1. Go to https://dashboard.stripe.com/webhooks
2. Create a new webhook endpoint
3. Set URL to: `https://yoursite.com/api/webhooks/stripe`
4. Subscribe to event: `payment_intent.succeeded`
5. Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`

### 4. Add PDF Files
Create folder: `public/books/`
Add your PDF files matching filenames in `src/lib/stripe.ts`:
- letter-to-home-from-sandbox.pdf
- soldiers-in-sandbox.pdf
- inside-the-walls.pdf
- crazy-lady.pdf
- starting-from-scratch.pdf

### 5. Setup Email Service (Optional)
For production, integrate email service in `src/app/api/webhooks/stripe/route.ts`:
- SendGrid
- Nodemailer
- Resend
- AWS SES

Example integration with Resend:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'noreply@yoursite.com',
  to: email,
  subject: `Your book ${bookName} is ready!`,
  html: `<p>Click to download: <a href="${downloadUrl}">Download Now</a></p>`,
})
```

### 6. Customize Book Prices
Edit `src/lib/stripe.ts` and update prices:
```typescript
'letters-sand': {
  price: 1999, // $19.99
  // ...
}
```

## Features

✅ **Secure Payment Processing** - Stripe handles all PCI compliance
✅ **Instant Downloads** - Users get download link immediately after payment
✅ **Email Delivery** - Download link sent via email
✅ **Webhook Verification** - Validates all payments server-side
✅ **Mobile Responsive** - Works on all devices
✅ **Dark Mode Support** - Full dark mode styling

## Testing

### Test Card Numbers
Use Stripe's test cards for development:
- **4242 4242 4242 4242** - Success
- **4000 0000 0000 9995** - Decline
- **4000 0025 0000 3155** - Require authentication

Exp: Any future date
CVC: Any 3 digits

### Test Webhook Locally
Use Stripe CLI to forward webhooks:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## Pages

- **Shop**: `/shop` - Browse and purchase books
- **Download**: `/api/download/[bookId]` - Download purchased book
- **Webhook**: `/api/webhooks/stripe` - Handle payment events

## Security Notes

1. **API Keys**: Keep `STRIPE_SECRET_KEY` private (server-side only)
2. **Webhook Signature**: Verify all webhooks with signature
3. **Download Verification**: In production, verify user purchased the book before allowing download
4. **Rate Limiting**: Add rate limiting to prevent abuse
5. **HTTPS Only**: Always use HTTPS in production

## Troubleshooting

**"API key not found"**
- Check `.env.local` has correct keys
- Restart dev server after adding env variables

**"Webhook error: No signature provided"**
- Verify webhook secret is correct in `.env.local`
- Check Stripe Dashboard webhook configuration

**"Cannot find module 'stripe'"**
- Run: `npm install stripe @stripe/stripe-js`

**Payment succeeds but no email sent**
- Email service not configured (see Step 5)
- Check server logs for errors
- Verify webhook endpoint is public and accessible

## Production Checklist

- [ ] Switch to Stripe Production API keys
- [ ] Configure email service for download links
- [ ] Set `NEXT_PUBLIC_APP_URL` to your production domain
- [ ] Add webhook signing secret to production env
- [ ] Set up webhook in Stripe Dashboard
- [ ] Test payment flow end-to-end
- [ ] Add rate limiting to API routes
- [ ] Enable CORS only for your domain
- [ ] Monitor webhook delivery in Stripe Dashboard
- [ ] Set up error alerting/logging

## Support

For Stripe documentation: https://stripe.com/docs
For API reference: https://stripe.com/docs/api
