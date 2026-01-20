# Portfolio Website

A modern, dark portfolio website for a UI/UX Designer & AI Full-Stack Developer, built with Next.js, React Three Fiber, and Framer Motion.

## Features

- 🎨 3D hero scene with cursor interaction
- 📱 Responsive design
- ⚡ Performance optimized
- 🎭 Smooth animations with Framer Motion
- 🤖 AI chatbot ready (system prompt included)
- 📊 Project metrics display
- 📄 Resume download
- ✉️ Contact form with direct links

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Three Fiber** - 3D graphics
- **Framer Motion** - Animations
- **Three.js** - 3D library

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
option-cursor/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar with resume link
│   ├── HeroSection.tsx  # 3D hero with text overlay
│   ├── HeroScene.tsx   # 3D scene component
│   ├── ProjectsSection.tsx  # Projects grid
│   ├── ProjectCard.tsx      # Individual project card
│   ├── AboutSection.tsx     # About section with availability
│   ├── ContactSection.tsx   # Contact form and links
│   └── HomePage.tsx         # Main page component
├── hooks/
│   └── useMouse.ts      # Mouse position hook for 3D interaction
└── prompts/
    └── portfolio-bot-system-prompt.md  # AI chatbot prompt
```

## Customization

### Personal Information

1. **Navigation** (`components/Navigation.tsx`):
   - Update "Your Name" to your name
   - Update resume link if needed

2. **About Section** (`components/AboutSection.tsx`):
   - Update years of experience
   - Update availability status
   - Add your professional photo
   - Update skills list

3. **Contact Section** (`components/ContactSection.tsx`):
   - Update email address
   - Update LinkedIn URL

4. **Projects** (`components/ProjectsSection.tsx`):
   - Update project metrics with real data
   - Add project images
   - Update project descriptions

### Add Assets

1. **Resume**: Place `resume.pdf` in `/public` folder
2. **Professional Photo**: Add to `/public` and update AboutSection
3. **Project Images**: Add to `/public/projects/` and update image paths

### Update Metrics

Edit the `metrics` array in `ProjectsSection.tsx`:

```typescript
metrics: [
  { label: 'Engagement', value: '+40%' },
  { label: 'User Satisfaction', value: '4.8/5' },
],
```

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting**

## Notes

- The 3D hero scene requires WebGL support
- All animations respect `prefers-reduced-motion`
- The AI chatbot system prompt is ready to integrate with your preferred AI service

## License

Private project - All rights reserved
