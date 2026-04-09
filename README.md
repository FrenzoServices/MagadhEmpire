# Magadh Empire

> A digital heritage platform dedicated to preserving and sharing the rich narrative of Indian civilization.

## 🏛️ About

Magadh Empire is a scalable digital brand focused on Indian history. Starting with high-quality blog content, it will expand into structured historical series, YouTube content, and AI-powered educational tools.

## 🛠️ Tech Stack

| Technology                  | Purpose                            |
| --------------------------- | ---------------------------------- |
| **Next.js 16**              | Framework (Static Site Generation) |
| **TypeScript**              | Type safety                        |
| **CSS Modules + Variables** | Centralized design system          |
| **GitHub Pages**            | Hosting                            |
| **GitHub Actions**          | CI/CD                              |

## 📁 Project Structure

```
src/
├── app/            # Pages & Layouts (App Router)
├── components/     # Reusable UI components
├── styles/         # Global styles & Design Tokens
├── lib/            # Utilities, hooks, types
└── content/        # Markdown/MDX data files
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production (static export)
npm run build
```

## 🎨 Design System

All visual tokens are centralized in `src/styles/tokens.css`:

- **Colors**: Imperial Gold & Deep Earth palette
- **Typography**: Playfair Display (headings) + Inter (body)
- **Spacing**: Consistent scale from 0.25rem to 4rem

Any change to tokens reflects across the entire application.

## 📦 Deployment

Push to `main` branch triggers automatic deployment to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

## 📐 Engineering Standards

- SOLID principles throughout
- No file exceeds 300 lines
- Clean, modular architecture
- TypeScript strict mode
