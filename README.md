# Narges Hashemi - Personal Portfolio

A modern, responsive personal portfolio website showcasing the professional journey of Narges Hashemi, a skilled Backend Developer specializing in Java, Spring Boot, and system architecture.

## 🚀 Features

- **Responsive Design**: Optimized for all devices with a clean, modern interface
- **Interactive Sections**: Hero, About, Experience, Projects, Skills, Education, and Languages
- **PDF Resume Generation**: Downloadable resume in PDF format
- **Smooth Animations**: Scroll-triggered animations for enhanced user experience
- **Dark/Light Theme Support**: Built with Tailwind CSS for consistent styling
- **SEO Optimized**: Proper meta tags and structured content

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **PDF Generation**: jsPDF
- **Package Manager**: Bun

## 📋 Prerequisites

- Node.js 18+
- Bun package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/hmenarges/hmenarges.github.io
   cd hmenarges.github.io
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Run the development server**
   ```bash
   bun run dev
   ```

4. **Open [http://localhost:9002](http://localhost:9002) in your browser**

## 📜 Available Scripts

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run typecheck` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── hero.tsx       # Hero section
│   ├── about.tsx      # About section
│   ├── experience.tsx # Experience section
│   ├── projects.tsx   # Projects section
│   ├── skills.tsx     # Skills section
│   ├── education.tsx  # Education section
│   └── footer.tsx     # Footer component
├── lib/               # Utility functions
│   ├── resume-data.ts # Resume data
│   ├── generate-pdf.ts # PDF generation logic
│   └── utils.ts       # Helper functions
└── hooks/             # Custom React hooks
```

## 🎨 Design System

- **Primary Color**: Deep Violet (#673AB7)
- **Background**: Light Gray (#F5F5F5)
- **Accent**: Electric Indigo (#7C4DFF)
- **Fonts**: Belleza (headlines), Alegreya (body text)

## 📄 PDF Resume

The site includes functionality to generate and download a PDF version of the resume using jsPDF. The resume data is structured in `src/lib/resume-data.ts`.

## 🚀 Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions. The workflow:

1. Triggers on push to `main` branch
2. Builds the project with Bun
3. Deploys to GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.


---

Built with ❤️ using Next.js and Tailwind CSS
