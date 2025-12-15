# Portfolio Website - Neha Durugkar

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing my professional experience, projects, and skills.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing
- **Modern UI**: Built with shadcn/ui components for a polished, professional look
- **Smooth Navigation**: Easy-to-use navigation with smooth scrolling between sections
- **Interactive Components**: Engaging UI elements and animations

## 🛠️ Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel deployment

## 📋 Sections

- **Hero**: Introduction and professional headline
- **About**: Background and professional summary
- **Experience**: Work history and professional experience
- **Projects**: Showcase of key projects and achievements
- **Skills**: Technical skills and competencies
- **Education**: Academic background
- **Contact**: Get in touch section

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NehaMiSeq/PortfolioND.git
cd PortfolioND
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── metadata.ts        # SEO metadata
├── components/            # React components
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── experience.tsx    # Experience section
│   ├── projects.tsx      # Projects section
│   ├── skills.tsx        # Skills section
│   ├── education.tsx     # Education section
│   ├── contact.tsx       # Contact section
│   ├── navigation.tsx    # Navigation bar
│   ├── footer.tsx        # Footer
│   ├── theme-toggle.tsx  # Dark/light mode toggle
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets

```

## 🎨 Customization

To customize the portfolio for your own use:

1. Update personal information in the component files
2. Replace images in the `public/` directory
3. Modify the color scheme in `tailwind.config.ts`
4. Update metadata in `app/metadata.ts` for SEO

## 🚢 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your site will be live!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/NehaMiSeq/PortfolioND)

### Other Deployment Options

- **Netlify**: Connect your GitHub repository to Netlify
- **GitHub Pages**: Use `next export` for static site generation
- **Self-hosted**: Build and deploy on your own server

## 📝 License

This project is open source and available for personal use.

## 📧 Contact

Neha Durugkar - neha21d@gmail.com

Portfolio: [https://github.com/NehaMiSeq/PortfolioND](https://github.com/NehaMiSeq/PortfolioND)

---

⭐ If you found this portfolio template helpful, please consider giving it a star!
