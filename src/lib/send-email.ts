import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendDownloadEmailProps {
  email: string
  bookName: string
  downloadUrl: string
}

export async function sendDownloadEmail({
  email,
  bookName,
  downloadUrl,
}: SendDownloadEmailProps) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not set - email not sent')
    return
  }

  try {
    const result = await resend.emails.send({
      from: 'Scott G. A. Metcalf <noreply@scottmetcalf.com>',
      to: email,
      subject: `Your Book Download: ${bookName}`,
      html: emailTemplate({
        bookName,
        downloadUrl,
        email,
      }),
    })

    if (result.error) {
      console.error('Email send error:', result.error)
      return false
    }

    console.log(`Download email sent to ${email}:`, result.data)
    return true
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}

function emailTemplate({
  bookName,
  downloadUrl,
  email,
}: {
  bookName: string
  downloadUrl: string
  email: string
}) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f9f7f4;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      .header {
        background-color: #3d2817;
        color: white;
        padding: 40px 20px;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 28px;
        font-weight: 300;
        letter-spacing: 0.5px;
      }
      .content {
        padding: 40px 30px;
      }
      .content h2 {
        font-size: 20px;
        color: #3d2817;
        margin-top: 0;
        margin-bottom: 16px;
        font-weight: 500;
      }
      .book-title {
        font-size: 18px;
        font-weight: 500;
        color: #3d2817;
        margin: 20px 0;
      }
      .download-section {
        background-color: #f9f7f4;
        border-left: 4px solid #6b8e6b;
        padding: 20px;
        margin: 30px 0;
        border-radius: 4px;
      }
      .download-button {
        display: inline-block;
        background-color: #3d2817;
        color: white;
        padding: 12px 32px;
        text-decoration: none;
        border-radius: 4px;
        font-weight: 500;
        margin: 20px 0;
        transition: background-color 0.3s ease;
      }
      .download-button:hover {
        background-color: #2a1b0f;
      }
      .footer {
        border-top: 1px solid #e0d4c8;
        padding: 30px;
        background-color: #fafaf8;
        font-size: 12px;
        color: #888;
      }
      .footer p {
        margin: 0 0 10px 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Scott G. A. Metcalf</h1>
      </div>
      
      <div class="content">
        <h2>Your Book is Ready!</h2>
        
        <p>Thank you for your purchase! We're excited to have you as a reader.</p>
        
        <div class="download-section">
          <p><strong>Book:</strong></p>
          <div class="book-title">${bookName}</div>
          
          <p><strong>Download your book:</strong></p>
          <a href="${downloadUrl}" class="download-button" style="display: inline-block;">
            📥 Download PDF
          </a>
          
          <p style="margin-top: 20px; font-size: 12px; color: #666;">
            Or copy this link: <br>
            <code style="background-color: #f0f0f0; padding: 8px; border-radius: 3px; display: inline-block; word-break: break-all; margin-top: 8px;">
              ${downloadUrl}
            </code>
          </p>
        </div>
        
        <p>If you have any questions or issues downloading, please reply to this email.</p>
        
        <p>Happy reading,<br><strong>Scott G. A. Metcalf</strong></p>
      </div>
      
      <div class="footer">
        <p><strong>Receipt Information</strong></p>
        <p>Email: ${email}</p>
        <p>Book: ${bookName}</p>
        <p style="margin-top: 20px; border-top: 1px solid #e0d4c8; padding-top: 20px;">
          © ${new Date().getFullYear()} Scott G. A. Metcalf. All rights reserved.<br>
          <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="color: #6b8e6b; text-decoration: none;">Visit Website</a>
        </p>
      </div>
    </div>
  </body>
</html>
  `
}
