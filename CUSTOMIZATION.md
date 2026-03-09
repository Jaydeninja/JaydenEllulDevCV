# 🎨 Quick Customization Checklist

Use this checklist to personalize your CV website!

## ✏️ Essential Changes (Do These First!)

### 1. Update Personal Information

**File: `src/components/Hero.jsx`**
- [ ] Line 42: Change "Jayden" to your name
- [ ] Line 48: Update your job title
- [ ] Line 54: Write your tagline/description

**File: `src/components/About.jsx`**
- [ ] Lines 18-35: Write your bio/story
- [ ] Line 41: Update tech stack tags to your actual skills

**File: `src/components/Contact.jsx`**
- [ ] Line 26: Add your real email
- [ ] Line 38: Add your GitHub username/URL
- [ ] Line 50: Add your LinkedIn profile URL
- [ ] Line 71: Update button email link

### 2. Update Projects

**File: `src/components/Projects.jsx`**
- [ ] Replace dummy projects with your real projects
- [ ] Add project titles, descriptions, and tech stacks
- [ ] Optionally: Add project links/GitHub repos

### 3. Update Skills

**File: `src/components/Skills.jsx`**
- [ ] Update skill categories (Frontend, Backend, etc.)
- [ ] Add your actual skills and proficiency levels
- [ ] Adjust skill percentages honestly

### 4. Update Meta Information

**File: `index.html`**
- [ ] Line 6: Update page description
- [ ] Line 7: Update page title
- [ ] Optionally: Add your favicon (replace `/vite.svg`)

### 5. Configure GitHub Pages

**File: `vite.config.js`**
- [ ] Line 6: Change base path to match your GitHub repo name
  ```javascript
  base: '/your-repo-name/',
  ```

## 🎨 Optional Styling Changes

### Change Color Scheme

**File: `tailwind.config.js`**
```javascript
colors: {
  primary: '#6366f1',    // Main brand color
  secondary: '#8b5cf6',  // Accent color
},
```

Popular color combos:
- Blue/Cyan: `#3b82f6` / `#06b6d4`
- Green/Emerald: `#10b981` / `#059669`
- Pink/Rose: `#ec4899` / `#f43f5e`
- Orange/Amber: `#f97316` / `#f59e0b`

### Update Navigation

**File: `src/components/Navigation.jsx`**
- [ ] Line 14: Change "Jayden.dev" to your brand name
- [ ] Line 16: Customize navigation items

### Adjust Animations

**Speed up/slow down animations:**
- Find `transition={{ duration: X }}` in components
- Decrease X for faster, increase for slower
- Typical range: 0.3 - 1.5 seconds

## 🖼️ Adding Images (Optional)

### 1. Create public folder
```bash
mkdir public
mkdir public/images
```

### 2. Add your images
- Profile photo: `public/images/profile.jpg`
- Project screenshots: `public/images/project1.jpg`, etc.

### 3. Use in components
```jsx
<img src="/images/profile.jpg" alt="Profile" />
```

### Recommended Image Sizes:
- Profile photo: 400x400px (square)
- Project images: 1200x800px (landscape)
- Optimize images with [TinyPNG](https://tinypng.com/)

## 📱 Social Links

**File: `src/components/Contact.jsx`**

Add more social links:
```jsx
<motion.a
  href="https://twitter.com/yourhandle"
  className="..."
>
  🐦 Twitter
</motion.a>
```

Popular social icons (emojis):
- GitHub: 🐙
- LinkedIn: 💼
- Twitter: 🐦
- Email: ✉️
- Portfolio: 🌐
- YouTube: 📺
- Instagram: 📸
- Discord: 💬

## 🎯 SEO & Meta Tags (Advanced)

**File: `index.html`**

Add more meta tags:
```html
<meta name="author" content="Your Name">
<meta name="keywords" content="web developer, react, portfolio">
<meta property="og:title" content="Your Name - CV">
<meta property="og:description" content="Front-end Developer">
<meta property="og:image" content="/images/preview.jpg">
<meta name="twitter:card" content="summary_large_image">
```

## 🚀 Performance Optimization

### 1. Optimize Images
- Use WebP format when possible
- Compress all images
- Use lazy loading for images below fold

### 2. Reduce Animation Complexity
- Limit number of animated particles
- Reduce 3D mesh complexity if laggy
- Use `will-change` CSS property sparingly

### 3. Code Splitting (Advanced)
```jsx
// Lazy load heavy components
const Hero = lazy(() => import('./components/Hero'))
```

## ✅ Pre-Deployment Checklist

Before deploying to GitHub Pages:

- [ ] All personal information updated
- [ ] Real projects added
- [ ] Contact links work
- [ ] Colors match your brand
- [ ] Tested on mobile (responsive)
- [ ] No console errors (F12 → Console)
- [ ] Vite config base path is correct
- [ ] README.md updated with your info
- [ ] Removed any placeholder content

## 🎨 Advanced Customization Ideas

### Add More Sections
- Work Experience timeline
- Education section
- Testimonials/Recommendations
- Blog posts
- Certifications

### Enhanced Features
- Dark/Light mode toggle
- Multiple language support
- Downloadable PDF resume
- Contact form with EmailJS
- Analytics (Google Analytics)

### Animation Enhancements
- Custom cursor
- Parallax scrolling
- Page transitions
- Loading screen
- Scroll progress indicator

## 📚 Learning Resources

Want to customize further? Learn these:

**Framer Motion Tutorials:**
- [Official Docs](https://www.framer.com/motion/)
- [Examples](https://www.framer.com/motion/examples/)

**Three.js:**
- [Three.js Journey](https://threejs-journey.com/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

**Tailwind CSS:**
- [Official Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/)

---

## 💡 Need Inspiration?

Check out these amazing portfolios:
- [awwwards.com](https://www.awwwards.com/) - Award-winning designs
- [dribbble.com](https://dribbble.com/) - Design inspiration
- Search "creative developer portfolio" on Google

---

**Remember**: Your CV website should represent YOU!
Don't be afraid to experiment and make it unique! ✨

Need help? Check the console errors (F12) or ask for assistance!

