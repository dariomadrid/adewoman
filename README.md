# Abe Wild - Multilingual Portfolio Website

A modern, multilingual portfolio website built with Astro and Vue.js, featuring dynamic content management and responsive design.

## 🌐 Features

- **Multilingual Support**: Available in Catalan (ca) and Spanish (es)
- **Dynamic Portfolio**: Showcasing creative works with detailed project pages
- **Modern Tech Stack**: Built with Astro, Vue.js, and Tailwind CSS
- **Responsive Design**: Optimized for all devices
- **Fast Performance**: Static site generation with dynamic components

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── portfolio/          # Portfolio project images
│   ├── fonts/             # Custom fonts (Synonym, Chillax)
│   ├── logos/             # Brand assets
│   └── favicon.svg
├── src/
│   ├── components/        # Vue components (Navbar, Footer, etc.)
│   ├── pages/            # Astro pages with language routing
│   ├── config/           # Site and i18n configuration
│   ├── content/          # Portfolio content management
│   ├── layouts/          # Layout components
│   └── styles/           # Global CSS styles
└── package.json
```

## 📁 Available Routes

- `/` - Homepage (default language)
- `/ca/` - Catalan homepage
- `/es/` - Spanish homepage
- `/ca/portfolio/` - Catalan portfolio listing
- `/es/portfolio/` - Spanish portfolio listing
- `/ca/portfolio/[id]` - Individual project pages (Catalan)
- `/es/portfolio/[id]` - Individual project pages (Spanish)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎨 Portfolio Projects

The website showcases various creative projects including:
- **Hiroshi**: Brand identity and design work
- **La Barraca**: Branding project
- **La Sal**: Content design
- **Mambo**: Complete branding and design system
- **Mas Les Goges**: Branding and content creation
- **Praline**: Design and content strategy

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or [Vue.js documentation](https://vuejs.org/).