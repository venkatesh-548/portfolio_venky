# Deployment Guide

## 🚀 Deploying Your Portfolio

This guide covers multiple deployment options for your Taddi Venkatesh portfolio website.

## 1. Vercel (Recommended - Easiest)

### Benefits
- Free hosting
- Automatic deployments from Git
- Zero configuration
- Fast performance globally
- Custom domain support

### Steps

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial portfolio"
git push origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework: Select "Vite"
   - Click "Deploy"

3. **Custom Domain**
   - Go to Project Settings
   - Navigate to "Domains"
   - Add your custom domain

## 2. Netlify

### Steps

1. **Build the Project**
```bash
npm run build
```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect GitHub for automatic deployments

3. **Configure**
   - Set build command: `npm run build`
   - Set publish directory: `dist`

## 3. GitHub Pages

### Steps

1. **Update vite.config.js**
```javascript
export default {
  base: '/your-repo-name/',
  // ... rest of config
}
```

2. **Build and Deploy**
```bash
npm run build
npm run deploy
```

3. **Enable GitHub Pages**
   - Go to Repository Settings
   - Navigate to "Pages"
   - Select "Deploy from a branch"
   - Select `gh-pages` branch

## 4. Traditional Hosting (Shared/VPS)

### Steps

1. **Build**
```bash
npm run build
```

2. **Upload Files**
   - Upload contents of `dist` folder to your server's public directory
   - No backend required (static site)

3. **Configure Server**
   - For SPA routing, redirect 404s to `index.html`
   - Nginx example:
   ```nginx
   location / {
     try_files $uri /index.html;
   }
   ```

## 5. Docker Deployment

### Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

### Build and Run
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Pre-Deployment Checklist

### Content Updates
- [ ] Update all personal information
- [ ] Add real project links and descriptions
- [ ] Update social media links
- [ ] Add working email address
- [ ] Update phone number
- [ ] Add resume PDF link
- [ ] Update GitHub links
- [ ] Add LinkedIn profile

### Technical Checks
- [ ] Configure EmailJS credentials
- [ ] Test contact form
- [ ] Check all links work
- [ ] Test dark/light mode toggle
- [ ] Test responsive design on mobile
- [ ] Test all animations
- [ ] Check page load speed
- [ ] Test form validation

### SEO Optimization
- [ ] Add meta tags
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Optimize image sizes
- [ ] Add alt text to images

### Performance
- [ ] Check Lighthouse score
- [ ] Optimize bundle size
- [ ] Enable compression
- [ ] Cache static assets
- [ ] Test on slow networks

## Environment Variables

Create `.env.local` for sensitive data:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Update Contact.jsx:
```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
```

## Domain Configuration

### Using Custom Domain

1. **Vercel**
   - Settings → Domains
   - Add domain
   - Configure DNS (instructions provided)

2. **Netlify**
   - Site Settings → Domain Management
   - Add custom domain
   - Update DNS records

3. **GitHub Pages**
   - Create `CNAME` file in root with domain
   - Update DNS records

### DNS Records (Example)
```
Type: A
Name: @
Value: 76.76.19.165 (Vercel example)

Type: CNAME
Name: www
Value: your-domain.vercel.app
```

## HTTPS/SSL

- **Vercel**: Automatic ✅
- **Netlify**: Automatic ✅
- **GitHub Pages**: Automatic ✅
- **Self-hosted**: Use Let's Encrypt (free)

## Post-Deployment

### Monitor
- Check analytics
- Monitor error logs
- Test all functionality
- Check email delivery

### Updates
- Edit content in code
- Run `npm run build`
- Re-deploy new build
- Test in production

### Maintenance
- Keep dependencies updated
- Monitor performance
- Backup regularly
- Update content periodically

## Troubleshooting

### Issue: 404 Errors on Refresh
**Solution**: Configure server to serve `index.html` for all routes

### Issue: Images Not Loading
**Solution**: Check image paths, ensure they're relative to public folder

### Issue: Styles Not Loading
**Solution**: Verify base path in vite.config.js matches deployment path

### Issue: Contact Form Not Working
**Solution**: Check EmailJS credentials and API keys

## Performance Tips

1. **Image Optimization**
   - Use WebP format
   - Compress before upload
   - Use appropriate sizes

2. **Code Splitting**
   - Already configured with React Router
   - Lazy load components if needed

3. **Caching**
   - Set cache headers for static assets
   - Vercel/Netlify do this automatically

4. **CDN**
   - Vercel/Netlify provide global CDN
   - Faster content delivery worldwide

## Analytics Setup

### Google Analytics
```javascript
// Add to index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Backup & Version Control

```bash
# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Portfolio website"

# Push to GitHub
git remote add origin https://github.com/username/portfolio.git
git push -u origin main
```

## Support

For deployment issues:
- Check framework documentation
- Review hosting provider docs
- Check browser console for errors
- Test locally before deploying

---

**Happy Deploying! 🚀**
