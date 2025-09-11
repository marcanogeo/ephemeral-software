# Ephemeral.SL

> Official website for Ephemeral Software SL

A modern, fast, and responsive company website built with cutting-edge web technologies to showcase Ephemeral Software SL's services and expertise.

## 🚀 Tools & Technologies

This project leverages a modern web development stack designed for performance, developer experience, and maintainability:

### Core Framework
- **[Astro](https://astro.build/)** - A modern static site generator that delivers lightning-fast performance
  - Zero JS by default, ships only the JavaScript you need
  - Component-based architecture supporting multiple frameworks
  - Built-in optimization for images, CSS, and JavaScript
  - Server-side rendering (SSR) and static site generation (SSG)

### Styling & Design
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework
  - Rapid UI development with pre-built utility classes
  - Responsive design system
  - Built-in dark mode support
  - Automatic purging of unused CSS for optimal performance
  - Customizable design tokens and themes

### Development Tools
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript development
- **[Vite](https://vitejs.dev/)** - Fast build tool and development server (integrated with Astro)
- **[PostCSS](https://postcss.org/)** - CSS processing with plugins
- **[Autoprefixer](https://autoprefixer.github.io/)** - Automatic CSS vendor prefixing

### Code Quality & Formatting
- **[ESLint](https://eslint.org/)** - JavaScript/TypeScript linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks for pre-commit checks

### Package Management
- **[npm](https://www.npmjs.com/)** or **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## 📋 Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **pnpm** (version 7.0.0 or higher)
- **Git** for version control

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/marcanogeo/Ephemeral.SL.git
   cd Ephemeral.SL
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to view the website

## 🏗️ Build & Deployment

### Development Build
```bash
npm run build
# or
pnpm build
```

### Preview Production Build
```bash
npm run preview
# or
pnpm preview
```

### Static Site Generation
Astro generates static HTML files optimized for deployment to any static hosting service:
- **Netlify**
- **Vercel**
- **GitHub Pages**
- **Cloudflare Pages**
- **AWS S3 + CloudFront**

## 📁 Project Structure

```
/
├── public/              # Static assets (images, fonts, icons)
├── src/
│   ├── components/      # Reusable Astro/React/Vue components
│   ├── layouts/         # Page layout templates
│   ├── pages/           # File-based routing (generates URLs)
│   ├── styles/          # Global CSS and Tailwind config
│   └── content/         # Markdown content and collections
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript type checking |

## 🎨 Customization

### Tailwind CSS Configuration
Customize the design system by modifying `tailwind.config.mjs`:
- Colors, fonts, and spacing
- Responsive breakpoints
- Custom utility classes
- Dark mode settings

### Astro Configuration
Extend functionality through `astro.config.mjs`:
- Add integrations (React, Vue, Svelte)
- Configure build output
- Set up SSR/SSG options
- Add plugins and middleware

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [CC0 1.0 Universal](LICENSE) - see the LICENSE file for details.

## 🏢 About Ephemeral Software SL

Ephemeral Software SL is a technology company focused on delivering innovative software solutions. This website serves as our digital presence and showcase of our capabilities.

---

Built with ❤️ using [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/)
