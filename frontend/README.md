# Indian Student Organization (ISO) - SJSU Website

A modern, responsive website for the Indian Student Organization at San Jose State University, built with Next.js, TypeScript, and TailwindCSS.

## 🌟 Features

### Core Functionality
- **Homepage**: Hero section, mission statement, upcoming events preview, newsletter signup
- **Events System**: Event listings with RSVP functionality and category filtering
- **News & Announcements**: Blog-style news section with featured articles
- **Photo Gallery**: Image gallery with lightbox modal and category filtering
- **About Us**: Organization history, mission, vision, and values
- **Leadership Team**: Team member profiles with contact information
- **Contact Form**: Contact form with EmailJS integration (ready for implementation)
- **Contact System**: Contact form for sponsorship inquiries and general questions

### Design & User Experience
- **Responsive Design**: Mobile-first approach using TailwindCSS breakpoints
- **Cultural Color Palette**: Saffron (#FF9933), Green (#138808), Deep Red (#B22222), Gold (#FFD700)
- **Typography**: Merriweather for headings, Inter for body text
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Semantic HTML and proper ARIA labels

### Technical Stack
- **Frontend**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom configuration
- **Language**: TypeScript for type safety
- **Icons**: Heroicons for UI elements
- **Fonts**: Google Fonts (Inter, Merriweather)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd iso-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
iso-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── events/            # Events page
│   │   ├── gallery/           # Photo gallery
│   │   ├── leadership/        # Leadership team
│   │   ├── news/              # News & announcements
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── layout/            # Layout components
│   │   │   ├── Navbar.tsx     # Navigation bar
│   │   │   └── Footer.tsx     # Footer
│   │   ├── ui/                # UI components
│   │   │   ├── EventCard.tsx  # Event card component
│   │   │   └── TeamCard.tsx   # Team member card
│   │   └── common/            # Common components
│   │       └── Button.tsx     # Reusable button
│   └── lib/                   # Utilities and data
│       └── dummy-data.ts      # Sample data
├── public/                    # Static assets
├── tailwind.config.ts         # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Saffron**: `#FF9933` - Primary brand color
- **Green**: `#138808` - Secondary color (Indian flag)
- **Deep Red**: `#B22222` - Accent color
- **Gold**: `#FFD700` - Highlight color

### Typography
- **Headings**: Merriweather (serif)
- **Body Text**: Inter (sans-serif)

### Components
- **EventCard**: Displays event information with RSVP functionality
- **TeamCard**: Shows team member profiles with contact links
- **Button**: Reusable button with multiple variants

## 🛠 Future Enhancements

### Backend Integration
- **Database**: MongoDB with Mongoose for data persistence
- **Authentication**: Firebase Auth for user login/registration
- **API Routes**: Next.js API routes for backend functionality

### Third-Party Integrations
- **Email Service**: EmailJS for contact form
- **Email Service**: EmailJS for contact form and sponsorship inquiries
- **Newsletter**: Mailchimp integration
- **Calendar**: Google Calendar API for events
- **CMS**: Sanity or Strapi for content management

### Additional Features
- **Member Portal**: User authentication and member-only content
- **Event RSVP System**: Database-backed RSVP tracking
- **Admin Dashboard**: Content management for leadership
- **Language Support**: Hindi/English language switcher
- **SEO Optimization**: Enhanced meta tags and sitemap

## 📦 Deployment

### Vercel (Recommended)
1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Configure Environment Variables**
   - Set up environment variables for email, payment processing, etc.

### Other Platforms
- **Netlify**: Deploy static build
- **Railway**: Full-stack deployment
- **DigitalOcean**: VPS deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

For questions about this project, contact:
- **Development Team**: Contact through GitHub issues
- **ISO Leadership**: contact@iso-sjsu.org

## 📄 License

This project is developed for the Indian Student Organization at San Jose State University.

---

**Built with ❤️ for the Indian Student Organization at SJSU**
