# Samputhy Khim — Portfolio

A retro Roblox-styled portfolio built with Next.js.

## Features

- 🎮 Retro early-Roblox aesthetic
- 📝 Markdown blog support
- 🔍 SEO optimized (sitemap, meta tags, Open Graph)
- 📱 Mobile responsive
- ⚡ Static site generation for GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Building for Production

```bash
# Build static site
npm run build

# The output will be in the 'out' folder
```

## Adding Blog Posts

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2025-02-01"
excerpt: "A short description of your post"
tags: ["tag1", "tag2"]
---

Your content here...
```

3. Rebuild the site

## Project Structure

```
├── content/
│   └── blog/           # Markdown blog posts
├── public/
│   ├── logos/          # Organization logos
│   ├── files/          # Downloadable files (CV, etc.)
│   └── photo.png       # Profile photo
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # Reusable React components
│   ├── lib/            # Utility functions (blog parser)
│   └── styles/         # Global CSS
```

## Deploying to GitHub Pages

1. Push to your GitHub repo
2. Go to Settings → Pages
3. Set source to "GitHub Actions"
4. Create `.github/workflows/deploy.yml` (see below)

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## SEO Notes

- All meta tags are set in `src/app/layout.js`
- Sitemap auto-generates at `/sitemap.xml`
- Robots.txt auto-generates at `/robots.txt`
- Each blog post has its own meta tags

## Customization

- Edit `src/styles/globals.css` for styling
- Edit data arrays in `src/app/page.js` for content
- Update `metadataBase` in `layout.js` for your domain

## License

MIT
