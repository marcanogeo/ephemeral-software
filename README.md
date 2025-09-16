# Ephemeral Software

Official website for **Ephemeral Software** - A modern, fast, and responsive company website built with cutting-edge web technologies.

## 🚀 About

Ephemeral Software is a software development company dedicated to creating innovative digital solutions. This repository contains the source code for our official company website, showcasing our services, team, and portfolio.

## 🛠️ Technology Stack

- **[Astro](https://astro.build/)** - The web framework for content-driven websites
- **[TailwindCSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapid UI development
- **JavaScript/TypeScript** - Modern web development languages
- **HTML5** - Semantic markup structure

## ✨ Features

- 🎨 Modern and responsive design
- ⚡ Lightning-fast performance with Astro's static site generation
- 📱 Mobile-first responsive layout
- 🎯 SEO optimized
- ♿ Accessible design following WCAG guidelines
- 🌙 Clean and professional user interface

## 📦 Installation

### Prerequisites

Make sure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/marcanogeo/Ephemeral.git
   cd Ephemeral
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:4321` to see the website in development mode.

## 🏗️ Build and Deployment

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run astro` | Run Astro CLI commands |

### Building for Production

```bash
npm run build
```

The built files will be generated in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment

The website can be deployed to various platforms:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import the project for seamless CI/CD
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Any static hosting service**: Upload the `dist/` folder contents

## 📁 Project Structure

```
/
├── public/          # Static assets (images, icons, etc.)
├── src/
│   ├── components/  # Reusable Astro components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Website pages (file-based routing)
│   └── styles/      # Global styles and TailwindCSS configuration
├── astro.config.mjs # Astro configuration
├── tailwind.config.mjs # TailwindCSS configuration
├── package.json     # Project dependencies and scripts
└── README.md        # You are here!
```

## 🎨 Customization

### Styling

The project uses TailwindCSS for styling. You can:

- Modify the TailwindCSS configuration in `tailwind.config.mjs`
- Add custom styles in the `src/styles/` directory
- Use Tailwind utility classes directly in components

### Content

- Edit page content in the `src/pages/` directory
- Modify reusable components in `src/components/`
- Update layouts in `src/layouts/`

## 🤝 Contributing

We welcome contributions to improve our website! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Ensure responsive design for all screen sizes
- Test your changes across different browsers
- Write meaningful commit messages
- Update documentation when necessary

## 📄 License

This project is licensed under the [CC0 1.0 Universal](LICENSE) license - see the LICENSE file for details.

## 📞 Contact

**Ephemeral Software**

For more information about our services or if you have any questions about this project:

- 🌐 Website: [Coming Soon]
- 📧 Email: [Contact Information]
- 💼 LinkedIn: [Company LinkedIn]

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!

*Built with ❤️ by the Ephemeral Software team*

