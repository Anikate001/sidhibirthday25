# Siddhi Tribute Site

A minimalist, single-page tribute website for Siddhi — friend, creator, curious mind. Built with React, Vite, Tailwind CSS, and smooth scrolling via Lenis.js.

## 🎨 Design Overview

- **Layout**: Left column (75% width on desktop) for content; right column (25%) with sticky portrait image
- **Mobile**: Responsive stacked layout; image scales appropriately
- **Colors**: Near-black background (#0b0b0d), light blue accents (#0ea5ff), high-contrast text
- **Typography**: Clean, minimal system fonts (Inter fallback)
- **Scroll**: Lenis.js for smooth, inertia-based scrolling
- **Tone**: Warm, platonic, celebratory

## 📸 Portrait Image Setup

### Where to Place the Image
1. Create a `public/images/` folder in your project root (if it doesn't exist)
2. Place your portrait image here: `public/images/siddhi-portrait.jpg`

### Image Specifications
- **Recommended size**: 1200×1800 pixels (3:2 vertical aspect ratio)
- **Format**: JPG, PNG, or WebP
- **File name**: Update the path in `src/App.jsx` line ~90 if using a different name
- **Tips**: 
  - Crop to show the portrait subject's face clearly (no heavy cropping on mobile)
  - Ensure good contrast against the near-black background
  - Optimize file size (aim for <200KB)

### How to Replace the Image
1. Open `src/App.jsx`
2. Find the `<img>` tag in the right-side `<aside>` (around line 90)
3. Update the `src` attribute:
   \`\`\`jsx
   <img
     src="/images/your-image-name.jpg"
     alt="Siddhi — a portrait of our friend"
     className="portrait-image w-72 h-auto"
   />
   \`\`\`

## 🎯 Color Token Reference

All colors are defined via CSS variables in `src/globals.css`. To adjust the accent color globally:

\`\`\`css
--color-accent: #0ea5ff; /* Light blue; change to #7dd3fc for lighter variant */
\`\`\`

## ⚙️ Lenis Configuration

Lenis is initialized in `src/App.jsx`. To tweak the smooth scroll settings:

\`\`\`javascript
const lenis = new Lenis({
  duration: 1.2,           // Scroll duration (lower = faster)
  easing: (t) => ...,      // Easing function
  smooth: true,            // Enable smooth scrolling
  smoothTouch: true,       // Enable touch device smoothing
  touchMultiplier: 2,      // Touch scroll speed multiplier
})
\`\`\`

### Disable Lenis on Mobile
Currently, Lenis is automatically disabled on screens < 768px for better native scrolling feel. Adjust this in the `handleResize` function.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm (or pnpm/yarn)

### Installation & Running Locally

1. **Open the project folder in VS Code**:
   \`\`\`
   File > Open Folder > select project-root
   \`\`\`

2. **Open terminal** (Ctrl+` on Windows/Linux, Cmd+` on Mac):
   \`\`\`
   View > Terminal
   \`\`\`

3. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

4. **Start development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

   You'll see:
   \`\`\`
   VITE v5.0.8  ready in 123 ms

   ➜  Local:   http://localhost:5173/
   \`\`\`

5. **Open in browser**: Click the link or paste `http://localhost:5173/` into your browser

### Build for Production

\`\`\`bash
npm run build
\`\`\`

Outputs optimized files to `dist/` folder.

## 📋 Accessibility Checklist

- ✅ **Contrast**: Text meets WCAG AA standards (light gray on near-black)
- ✅ **Alt text**: Portrait image includes descriptive alt text
- ✅ **Keyboard navigation**: All links and buttons are focusable with visible focus states
- ✅ **Semantic HTML**: Used proper heading hierarchy and semantic elements
- ✅ **Focus management**: Custom `:focus-visible` styles on all interactive elements
- ✅ **Responsive**: Mobile layout reflows correctly on small screens
- ✅ **Motion**: Scroll animations use `prefers-reduced-motion` friendly approach (can be enhanced)

## 🎬 Content Sections

1. **Hero**: Intro with name and tagline
2. **About**: Biographical section
3. **Highlights**: Key qualities and achievements (6 items)
4. **Connect**: Social links and contact email
5. **Footer**: Credits and closing message

Replace all placeholder copy with actual content about Siddhi.

## 📱 Responsive Behavior

- **Desktop (>768px)**: 75/25 layout with sticky portrait
- **Tablet/Mobile (<768px)**: Full-width content, portrait image stacks above/below at reduced width
- **All screens**: Proper spacing, readable typography

## 🛠️ File Structure

\`\`\`
siddhi-tribute/
├── public/
│   └── images/
│       └── siddhi-portrait.jpg      ← Add portrait here
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Highlights.jsx
│   │   ├── Connect.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   └── globals.css
├── index.html
├── package.json
├── vite.config.js
├── postcss.config.cjs
└── README.md
\`\`\`

## 🎨 Customization Tips

- **Font**: Edit `--font-family-body` and `--font-family-heading` in `src/globals.css`
- **Colors**: Change CSS variables in `:root` within `src/globals.css`
- **Spacing**: Adjust padding/margins in component files or via Tailwind classes
- **Animation**: Modify `@keyframes fadeInUp` in `src/index.css` or add new animations

## 📖 Key Guidelines

- **KEEP ALL COPY PLATONIC** — no hearts, romantic metaphors, or lovey-dovey language
- Use warm, friendly language (e.g., "friend, creator, curious mind")
- Maintain minimal aesthetic with lots of negative space
- Ensure portrait subject's face is never cropped on mobile

## 🚢 Deployment

1. **Build**: `npm run build`
2. **Deploy `dist/` folder** to:
   - Vercel: Drag and drop `dist/` folder or connect GitHub repo
   - Netlify: Same approach
   - Any static host (GitHub Pages, Cloudflare Pages, etc.)

## 🤝 Support & Troubleshooting

- **Port already in use**: Change port in `vite.config.js` `server.port`
- **Lenis not working**: Check browser console for errors; ensure `@studio-freight/lenis` is installed
- **Image not loading**: Verify the image file is in `public/images/` and path in App.jsx matches
- **Styles not applying**: Clear browser cache (Ctrl+Shift+Delete) and restart dev server

---

**Made with care for a remarkable friend.** ✨
