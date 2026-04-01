# KTech Portfolio — Engineering Extraordinary Digital Experiences

A high-performance personal portfolio built with **Next.js 16**, **Tailwind CSS v4**, **MUI v7**, and **Framer Motion**.

## 🚀 Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up environments:
   Create a `.env.local` file and add:
   ```env
   RESEND_API_KEY=re_your_key_here
   CONTACT_EMAIL=kevalmistry5927@gmail.com
   ```
3. Run locally:
   ```bash
   npm run dev
   ```

## 🌍 Vercel Deployment (GitHub Integration)
This project is optimized for **Vercel** with Next.js App Router performance.

### Setup Instructions:
1. **Connect GitHub:** Import this repository into the Vercel dashboard.
2. **Framework Preset:** Select `Next.js`.
3. **Environment Variables:** Add `RESEND_API_KEY` and `CONTACT_EMAIL` in **Project Settings > Environment Variables** on Vercel.
4. **Deploy:** Vercel will automatically trigger a build on every push to `main`.

## 📦 Docker Support
While Vercel is the primary deployment target, this project includes a multi-stage Docker configuration for local orchestration or alternative cloud providers.
```bash
docker-compose up --build
```

## 🛠️ Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 & Vanilla CSS
- **Components:** MUI v7 (Selective)
- **Animations:** Framer Motion (Scroll-linked)
- **Email:** Resend API
- **Quality:** GitHub Actions (CI/CD)

Developed by **Keval Mistry**.
© 2026 KTech.
