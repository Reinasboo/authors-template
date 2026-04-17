# Books Directory

Add your PDF files here for the shop feature to work.

Required files:
- letter-to-home-from-sandbox.pdf
- soldiers-in-sandbox.pdf
- inside-the-walls.pdf
- crazy-lady.pdf
- starting-from-scratch.pdf

These filenames are configured in `src/lib/stripe.ts`

Once added, customers can purchase books from `/shop` and download them immediately after payment.

**Note**: This directory is typically added to .gitignore to avoid committing large PDF files. Consider using:
- AWS S3
- Supabase Storage  
- Cloudinary
- Firebase Storage

For production deployment.
