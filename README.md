# King Wheel Works

A professional, portfolio-focused digital brochure website for King Wheel Works, a specialized bicycle wheel building company.

## 🚴 Project Overview

King Wheel Works is a modern, responsive website showcasing custom bicycle wheel building services. The site emphasizes craftsmanship, expertise, and provides a clear path for potential customers to initiate custom wheel build consultations.

## ✨ Features

- **Responsive Design**: Fully mobile-responsive layout that works seamlessly from 320px to 4K displays
- **Modern Tech Stack**: Built with React, Vite, and Tailwind CSS for optimal performance
- **Five Core Pages**:
  - **Home**: High-impact hero section with value propositions and featured builds
  - **Portfolio**: Gallery showcasing custom wheel builds with detailed specifications
  - **Process**: Step-by-step breakdown of the custom build journey
  - **About**: Builder biography and company philosophy
  - **Contact**: Full-featured inquiry form with validation

- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML and proper ARIA labels
- **Form Validation**: Client-side validation with helpful error messages
- **Professional UI**: Clean, minimalist design emphasizing visual quality

## 🛠 Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite (fast, modern bundler)
- **Styling**: Tailwind CSS (utility-first CSS framework)
- **Routing**: React Router v6
- **Language**: JavaScript (ES6+)

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## 🚀 Getting Started

### Installation

1. Navigate to the project directory:
```bash
cd king-wheel-works
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot-reload:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
king-wheel-works/
├── public/               # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── PortfolioCard.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Process.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main routing component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Custom Tailwind Classes

The project includes several custom utility classes:

- `.btn-primary`: Primary call-to-action button
- `.btn-secondary`: Secondary outlined button
- `.section-padding`: Consistent section spacing
- `.container-custom`: Max-width container with responsive padding

## 🔧 Configuration

### Tailwind Theme

Custom colors defined in `tailwind.config.js`:
- `brand-charcoal`: #2c2c2c (dark base)
- `brand-silver`: #c0c0c0 (metallic accent)
- `brand-accent`: #4a90e2 (primary blue)

### Vite Configuration

Standard Vite + React configuration with hot-reload enabled.

## 📝 Form Integration

The contact form is fully implemented with client-side validation and is ready for backend integration. Currently, form submissions are logged to the console. To integrate with a backend:

1. Update the `handleSubmit` function in `src/pages/Contact.jsx`
2. Replace `console.log('Form submitted:', formData)` with your API call
3. Add error handling for failed submissions

Example integration:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const newErrors = validateForm();
  
  if (Object.keys(newErrors).length === 0) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitted(true);
        // Reset form...
      }
    } catch (error) {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  }
};
```

## 🎯 Future Enhancements

Potential improvements for future iterations:

- Add real product images to replace placeholders
- Implement image lightbox/gallery for portfolio
- Add backend API for form submissions
- Integrate email notification system
- Add blog/news section
- Implement analytics tracking
- Add customer testimonials section
- Create admin dashboard for content management

## 🌐 Deployment

This is a static site that can be deployed to any hosting platform:

### Netlify
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy the 'dist' folder to Vercel
```

### GitHub Pages
```bash
npm run build
# Use gh-pages or similar to deploy 'dist' folder
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a client project. For any modifications or enhancements, please contact the development team.

## 📄 License

Proprietary - All rights reserved by King Wheel Works

## 📞 Support

For technical support or questions about the website, please contact the development team.

---

Built with ⚡ by a senior React developer specializing in high-performance web applications.
