# Portfolio Website

A pixel-perfect replica of the portfolio website with modern enhancements including responsive design, interactive animations, and performance optimizations.

## 🚀 Features

### 🎨 Design & UI/UX
- **Pixel-perfect replica** of the original design
- **Dark theme** with elegant color scheme
- **Responsive layout** optimized for all devices
- **Modern typography** using Inter font family
- **Smooth animations** and hover effects
- **Accessibility compliant** (WCAG 2.1 standards)

### ⚡ Performance
- **Optimized loading** with lazy-loaded images
- **Smooth scrolling** and navigation
- **Performance monitoring** with Web Vitals tracking
- **SEO optimized** with meta tags and Open Graph
- **Cross-browser compatibility** tested

### 🛠 Technical Stack
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Radix UI** components
- **Lucide React** icons
- **React Router** for navigation

### 📱 Interactive Elements
- **Scroll-triggered animations** using Intersection Observer
- **Hover effects** on cards and buttons
- **Form validation** with toast notifications
- **Smooth scroll-to-top** functionality
- **Tab navigation** for project filtering

## 🏗 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with profile
│   ├── ExperienceSection.tsx # Work experience timeline
│   ├── ProjectsSection.tsx # Projects showcase
│   ├── ContactSection.tsx  # Contact form
│   ├── Footer.tsx          # Site footer
│   ├── ScrollToTop.tsx     # Scroll to top button
│   ├── SEO.tsx             # SEO meta tags
│   ├── TechTag.tsx         # Technology tag component
│   └── AnimatedSection.tsx # Animation wrapper
├── hooks/
│   ├── useIntersectionObserver.ts # Scroll animations
│   └── use-toast.ts        # Toast notifications
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── analytics.ts        # Analytics tracking
│   └── performance.ts      # Performance monitoring
├── assets/
│   └── profile.jpg         # Profile image
└── pages/
    ├── Index.tsx           # Main page
    └── NotFound.tsx        # 404 page
```

## 🎯 Key Sections

### Hero Section
- Animated profile picture with floating effect
- Professional introduction
- Status indicator (online/available)

### Experience Timeline
- Work history with company details
- Technology tags for each role
- External links to projects and companies
- Status badges (Current/Past)

### Projects Showcase
- Tabbed interface (Personal Projects / Client Work)
- Project cards with hover animations
- Technology stack indicators
- GitHub and demo links
- Status indicators (Active/Paused/Completed)

### Contact Section
- Contact form with validation
- Contact information display
- Social media links
- Professional availability status

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Design System
The entire design system is defined in `src/index.css` and `tailwind.config.ts`:

- **Colors**: HSL-based color tokens for consistent theming
- **Typography**: Inter font with various weights
- **Animations**: Custom keyframes and transitions
- **Components**: Reusable component styles

### Content Updates
1. **Personal Information**: Update `src/components/Hero.tsx`
2. **Experience**: Modify the experiences array in `src/components/ExperienceSection.tsx`
3. **Projects**: Update the projects array in `src/components/ProjectsSection.tsx`
4. **Contact**: Customize contact details in `src/components/ContactSection.tsx`

### SEO & Meta Tags
Update SEO information in `src/components/SEO.tsx` and `index.html`

## 📊 Performance Features

- **Lazy loading** for images and components
- **Intersection Observer** for scroll animations
- **Web Vitals monitoring** (LCP, FID, CLS)
- **Analytics tracking** ready for Google Analytics/Mixpanel
- **Optimized bundle size** with tree shaking

## 🌐 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 📝 Development Notes

### Analytics Integration
The analytics system is ready for integration with:
- Google Analytics 4
- Mixpanel
- Custom analytics solutions

### Accessibility Features
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### Future Enhancements
- Blog section integration
- CMS integration for content management
- Advanced filtering for projects
- Theme switching (light/dark mode)
- Multi-language support

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please reach out through:
- Email: hello@chaitanya-bajpai.xyz
- GitHub Issues
- Social media links in the portfolio

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
