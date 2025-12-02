# Agilus Diagnostics Lab Mohali - Website

A complete, production-ready Next.js website for Agilus Diagnostics Lab Mohali.

## Features

- **Modern Design**: Glassmorphism, mobile-first, responsive UI using Tailwind CSS.
- **Booking System**: Custom booking flow with validation and email notifications.
- **SEO Optimized**: Local SEO for Mohali/Chandigarh, Schema Markup, Sitemap, and Metadata.
- **Package Catalog**: Filterable list of diagnostic packages with detailed pages.
- **Admin Stub**: Basic admin dashboard to view bookings.
- **Performance**: Optimized images, fonts, and code splitting.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Forms**: React Hook Form, Zod
- **Email**: Nodemailer

## Setup & Deployment

### 1. Clone & Install
```bash
git clone <repo-url>
cd agilus-lab-mohali
npm install
```

### 2. Environment Variables
Create a `.env.local` file with the following variables:

```env
# Email Configuration (for booking notifications)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
SMTP_FROM="Agilus Mohali <bookings@agilusmohali.com>"
ADMIN_EMAIL=admin@agilusmohali.com

# Admin Access
ADMIN_PASSWORD=admin123
```

### 3. Run Locally
```bash
npm run dev
```
Visit `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
npm start
```

## Deployment on Vercel

1. Push code to GitHub.
2. Import project in Vercel.
3. Add Environment Variables in Vercel Project Settings.
4. Deploy.

## Customization

- **Colors**: Edit `tailwind.config.ts` -> `theme.extend.colors.brand`.
- **Logo**: Replace `public/logo.png`.
- **Packages**: Edit `src/lib/packages.ts`.
- **Business Info**: Edit `src/lib/constants.ts`.

## SEO & Analytics

- **Sitemap**: Automatically generated at `/sitemap.xml`.
- **Robots**: Automatically generated at `/robots.txt`.
- **Schema**: JSON-LD implemented on Home and Package pages.

## Testing

Run the build command to verify type safety and build success:
```bash
npm run build
```
