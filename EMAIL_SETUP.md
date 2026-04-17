# Email Setup Guide - Resend Integration

## Overview
Customers receive download links via email immediately after successful payment.

## Setup Instructions

### 1. Create Resend Account
1. Go to https://resend.com
2. Sign up for free account
3. Verify your email
4. Go to https://resend.com/api-keys
5. Copy your **API Key** (starts with `re_`)

### 2. Add to Environment Variables

**Local Development** (`.env.local`):
```
RESEND_API_KEY=re_YOUR_API_KEY_HERE
```

**Production (Vercel)**:
1. Go to https://vercel.com → Your Project → Settings
2. Click **Environment Variables**
3. Add: `RESEND_API_KEY` = `re_YOUR_API_KEY`
4. Save and Vercel will redeploy

### 3. Verify Sender Email (Production)

Before sending to customers, add your sender domain:

1. In Resend dashboard, go to **Domains**
2. Add domain: `scottmetcalf.com` (or your domain)
3. Add DNS records provided by Resend to your domain registrar
4. Wait for verification (usually 5-10 minutes)
5. Once verified, emails will come from `noreply@scottmetcalf.com`

**For Testing**: Resend allows test emails to any address by default.

### 4. How It Works

**Payment Flow:**
1. Customer buys book on `/shop`
2. Payment succeeds
3. Webhook triggered automatically
4. Download link email sent via Resend
5. Customer receives email with download button

**Email Includes:**
- Professional HTML template
- Book title
- Direct download button
- Backup download link
- Receipt information

### 5. Email Template

The email template is in `src/lib/send-email.ts` and includes:
- Professional branding
- Direct download button
- Copy-able download link
- Contact information
- Receipt details

**Customize it by editing `src/lib/send-email.ts`:**
```typescript
function emailTemplate({
  bookName,
  downloadUrl,
  email,
}: {...}) {
  return `...your custom HTML...`
}
```

## Testing Email Delivery

### Test Mode (Development)
1. Resend allows test emails to any address
2. No need for domain verification in test mode
3. Emails should arrive in seconds

**Test Steps:**
1. Go to `/shop`
2. Click "Buy Now"
3. Use test card: `4242 4242 4242 4242`
4. Any expiry date, any CVC
5. Use your email address
6. After payment, check your inbox

### Production Mode
1. Verify your domain (see Step 3 above)
2. Emails will come from `noreply@yoursite.com`
3. Much better deliverability
4. Builds sender reputation

## Troubleshooting

### Emails Not Arriving
- Check spam/promotions folder
- Verify email address is correct in payment form
- Check Resend dashboard for delivery status
- Ensure `RESEND_API_KEY` is set correctly

### Domain Not Verified
- Check DNS records are added correctly
- Wait 5-10 minutes for propagation
- Some registrars take longer (up to 48 hours)

### Test Mode Not Working
- Verify `RESEND_API_KEY` starts with `re_`
- Check browser console for errors
- Check server logs (Vercel dashboard)

## Resend Resources

- **Docs**: https://resend.com/docs
- **Dashboard**: https://resend.com
- **Status**: https://resend.com/status
- **Support**: support@resend.com

## Cost

- **Free tier**: 100 emails/day (great for testing)
- **Paid**: $20/month for 100k emails/month
- No setup fees or overages

## Production Checklist

- [ ] Create Resend account
- [ ] Copy API key
- [ ] Add `RESEND_API_KEY` to Vercel env vars
- [ ] Add domain and verify DNS records
- [ ] Test email with test purchase
- [ ] Verify customer receives email
- [ ] Download link works
- [ ] Email looks good on mobile

## Advanced: Custom Sender Email

To send from a custom email (instead of noreply@):

1. In Resend dashboard, add your domain
2. Update sender in `src/lib/send-email.ts`:
```typescript
from: 'Scott G. A. Metcalf <scott@yoursite.com>'
```
3. Verify domain DNS records
4. Resend will automatically route through verified domain

## Future Enhancements

- [ ] SMS delivery option
- [ ] Custom email templates for different books
- [ ] Receipt PDF attachment
- [ ] Personalized welcome message
- [ ] Re-send download link if lost
