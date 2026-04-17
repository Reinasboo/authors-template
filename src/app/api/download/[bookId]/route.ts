import { NextRequest, NextResponse } from 'next/server'
import { bookProducts, type BookId } from '@/lib/stripe'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { bookId: string } }
) {
  try {
    const bookId = params.bookId as BookId
    const email = request.nextUrl.searchParams.get('email')

    // Validate book ID
    if (!bookId || !bookProducts[bookId]) {
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      )
    }

    // In production, verify that the user has purchased this book
    // Check against your database or Stripe records
    // For now, we'll just check if email is provided (basic security)
    if (!email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const book = bookProducts[bookId]

    // Try to read the PDF file from public/books directory
    // Note: You need to add PDF files to public/books/ folder
    const filePath = join(process.cwd(), 'public', 'books', book.filename)

    try {
      const fileContent = readFileSync(filePath)

      return new NextResponse(fileContent, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${book.filename}"`,
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      })
    } catch (error) {
      // File not found - in production, handle this gracefully
      console.error('File not found:', filePath)
      return NextResponse.json(
        { error: 'Download file not found. Please contact support.' },
        { status: 404 }
      )
    }
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json(
      { error: 'Download failed' },
      { status: 500 }
    )
  }
}
