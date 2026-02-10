# Taddi Venkatesh | Portfolio Website

A modern, fully responsive React-based portfolio website for an aspiring Assistant Professor and Machine Learning Engineer.

## 🎯 Features

### ✨ Pages & Sections
- **Home** - Hero section with animated gradient background
- **About** - Career objective, bio, and teaching philosophy
- **Education** - Timeline-based education history
- **Skills** - Progressive skill bars with categories
- **Experience** - Teaching assistant experience with timeline
- **Projects** - Showcase of ML and web development projects
- **Research** - Published research papers and publications
- **Certifications** - Professional certifications and workshops
- **Achievements** - Key accomplishments and milestones
- **Contact** - Contact form with EmailJS integration

### 🎨 Design Features
- ✅ Dark/Light mode toggle
- ✅ Smooth scroll animations
- ✅ Hover effects and transitions
- ✅ Responsive mobile design
- ✅ Sticky navigation bar
- ✅ Glass morphism cards
- ✅ Framer Motion animations
- ✅ Scroll-to-top button
- ✅ WhatsApp floating button

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Routing**: React Router DOM
- **Email**: EmailJS
- **Build Tool**: Vite

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Install Dependencies**
```bash
cd portfolio
npm install
```

2. **Install Additional Packages** (if not already installed)
```bash
npm install react-router-dom framer-motion react-icons emailjs-com
```

3. **Configure EmailJS**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID and Public Key
   - Open `src/pages/Contact.jsx` and update:
     ```javascript
     emailjs.init('YOUR_PUBLIC_KEY')
     // And update template ID and service ID in handleSubmit
     ```

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Education.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Research.jsx
│   ├── Certifications.jsx
│   ├── Achievements.jsx
│   └── Contact.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ScrollToTop.jsx
│   └── WhatsAppButton.jsx
├── context/
│   └── ThemeContext.jsx
├── assets/
├── App.jsx
├── main.jsx
└── index.css
```

## 🎯 Customization

### Update Personal Information
Edit the following files to customize content:
- `src/pages/Home.jsx` - Name, title, and intro
- `src/pages/About.jsx` - Bio and philosophy
- `src/pages/Education.jsx` - Education details
- `src/pages/Skills.jsx` - Skills and proficiency levels
- `src/pages/Experience.jsx` - Teaching experience
- `src/pages/Projects.jsx` - Project details
- `src/pages/Research.jsx` - Publications
- `src/pages/Certifications.jsx` - Certifications
- `src/pages/Achievements.jsx` - Achievements

### Update Social Links
Edit `src/components/Navbar.jsx`, `src/pages/Home.jsx`, and `src/components/Footer.jsx` to add your:
- GitHub profile
- LinkedIn profile
- Email address
- Phone number

### Customize Colors
- Update Tailwind color classes in each component
- Modify gradient colors in CSS classes
- Edit theme colors in `src/index.css`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎬 Animations

All animations are built with Framer Motion and include:
- Scroll reveal animations
- Hover effects
- Button interactions
- Page transitions
- Floating elements

## 🔧 Configuration Files

### vite.config.js
```javascript
// Already configured for React
```

### tailwind.config.js
```javascript
// Extends default Tailwind theme with custom colors
```

### postcss.config.js
```javascript
// Automatically configured
```

## 📄 Resume Download

To enable resume download:
1. Add your resume PDF to `src/assets/`
2. Update the download button in `src/pages/Home.jsx`

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the dist folder to Netlify
```

### Deploy to GitHub Pages
1. Update `vite.config.js` with your repo name
2. Run: `npm run build && npm run deploy`

## 📞 EmailJS Setup

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service
3. Create email template
4. Get credentials and add to Contact.jsx

## ✅ Performance Optimization

- Code splitting with React Router
- Lazy loading components
- Optimized animations
- Minified production build
- Image optimization ready

## 📝 License

This portfolio template is open source and available for educational use.

## 🤝 Support

For issues or questions, create an issue in the repository or contact Taddi Venkatesh.

## 🎓 Content Guidelines

This portfolio is designed for:
- Faculty interview panels
- Academic recruiters
- ML industry professionals
- Educational institutions

### Best Practices
- Keep bio professional yet personable
- Highlight teaching experience
- Showcase research work
- Include real project links
- Maintain updated skills section
- Add recent certifications
- Include contact information

## 🚀 Future Enhancements

- [ ] Blog section
- [ ] Video testimonials
- [ ] Project demo videos
- [ ] Analytics integration
- [ ] Newsletter signup
- [ ] Multi-language support

---

**Built with ❤️ by GitHub Copilot**
**Last Updated: February 2026**
"# portfolio_venky" 
