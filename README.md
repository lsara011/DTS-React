# Davie Tire & Auto - Professional Service

A modern React website for Davie Tire Shop, a tire and auto service business in Fort Lauderdale, Florida. The site presents the shop's services, story, owners, contact form, map, hours, and financing link in a dark, responsive interface.

## Features

- Responsive Vite + React single-page application
- Hash-based routing for static hosting compatibility
- Home page with hero image, service highlights, tire brand section, and financing call-to-action
- About page with business story and owner imagery
- Owners page featuring Ada Sanchez and Darwin
- Contact page with Google Maps embed, business details, and Formspree contact form
- Tailwind CDN styling with custom theme colors and typography
- Static image assets stored in `Assets/Images`

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Formspree
- Tailwind CSS via CDN

## Project Structure

```text
.
|-- App.tsx
|-- index.html
|-- index.tsx
|-- constants.tsx
|-- types.ts
|-- vite.config.ts
|-- pages/
|   |-- About.tsx
|   |-- Contact.tsx
|   |-- Home.tsx
|   `-- Owners.tsx
`-- Assets/
    `-- Images/
```

## Getting Started

### Prerequisites

Install Node.js, then install project dependencies:

```bash
npm install
```

On Windows PowerShell, if `npm` is blocked by script execution policy, use:

```bash
npm.cmd install
```

### Run Locally

```bash
npm run dev
```

Or on Windows PowerShell:

```bash
npm.cmd run dev
```

The Vite dev server runs at:

```text
http://localhost:3000/
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Environment Variables

The Vite config reads `GEMINI_API_KEY` from `.env.local`, but the current website does not rely on Gemini features for the public pages.

Example:

```text
GEMINI_API_KEY=your_api_key_here
```

## Contact Form

The contact page uses Formspree:

```tsx
useForm("mykngqql")
```

To connect a different Formspree form, replace the form ID in `pages/Contact.tsx`.

## Deployment

This project can be deployed to static hosts such as GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

For GitHub Pages, the app uses `HashRouter`, which keeps client-side routes working on static hosting without extra rewrite configuration.

When deploying manually, run the production build first and upload the contents of the `dist` folder, not the project source folder. The source `index.html` points to `/index.tsx` for Vite development, but a static web host cannot compile `.tsx` files. The built `dist/index.html` points to the compiled JavaScript in `dist/assets`.

### Custom Domain

For GitHub Pages with a custom domain, add a `CNAME` file inside a `public` folder:

```text
public/CNAME
```

The file should contain only the domain:

```text
www.example.com
```

Then configure the same custom domain in the hosting provider's dashboard and point your DNS records to that provider.

## Business Details

```text
Davie Tire Shop
3800 Davie Blvd, B
Fort Lauderdale, FL 33312

Phone: (954) 860-9497
Hours:
Monday - Saturday: 8am - 7pm
Sunday: 10am - 4pm
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
```
