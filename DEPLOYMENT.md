# 🚀 GitHub Pages Deployment Guide

## Step-by-Step Deployment

### 1. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Interactive CV website"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `JaydeninjaDevWebsiteCV` (or your preferred name)
3. Keep it public
4. Don't initialize with README (we already have one)
5. Click "Create repository"

### 3. Update Vite Config

In `vite.config.js`, update the base path to match your repository name:

```javascript
base: '/JaydeninjaDevWebsiteCV/',  // or '/your-repo-name/'
```

### 4. Connect and Push to GitHub

```bash
git remote add origin https://github.com/yourusername/JaydeninjaDevWebsiteCV.git
git branch -M main
git push -u origin main
```

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your project (`npm run build`)
- Create/update the `gh-pages` branch
- Push the built files to GitHub Pages

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select branch: `gh-pages`
4. Click "Save"
5. Wait a few minutes for deployment

Your site will be live at:
```
https://yourusername.github.io/JaydeninjaDevWebsiteCV/
```

## 🔄 Updating Your Site

Whenever you make changes:

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
npm run deploy
```

## 🎨 Before You Deploy - Customize These:

1. **vite.config.js** - Update base path with your repo name
2. **Contact.jsx** - Add your real email, GitHub, LinkedIn
3. **Hero.jsx** - Update with your name and title
4. **About.jsx** - Write your bio
5. **Skills.jsx** - Add your actual skills
6. **Projects.jsx** - Showcase your real projects
7. **index.html** - Update title and meta description
8. **README.md** - Update with your GitHub username

## 🐛 Troubleshooting

**Issue**: Site shows blank page after deployment
- **Fix**: Make sure `base` in `vite.config.js` matches your repo name exactly

**Issue**: CSS/JS not loading
- **Fix**: Check that all paths are relative and base path is correct

**Issue**: 404 on routes
- **Fix**: GitHub Pages only supports single-page apps at root level

## ✨ Optional: Custom Domain

1. Buy a domain (e.g., from Namecheap, Google Domains)
2. Add CNAME file to `/public` folder with your domain
3. Update DNS settings in domain provider
4. Enable "Enforce HTTPS" in GitHub Pages settings

## 📱 Share Your CV

Once deployed, share your CV link:
- LinkedIn profile
- Resume/CV document
- Email signature
- Portfolio platforms
- Social media

---

**Need help?** Check out:
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

