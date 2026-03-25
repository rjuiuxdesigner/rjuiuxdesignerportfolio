# RJ Portfolio — Rushikesh Jagadale | UI/UX Designer

Production-ready React portfolio built with Vite. Deployable to GitHub Pages in minutes.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deploy to GitHub Pages

### Step 1 — Create a new GitHub repository
1. Go to [github.com](https://github.com) → **New repository**
2. Name it `rj-portfolio` (or any name you prefer)
3. Set it to **Public**
4. Do **not** initialise with README (you already have one)

### Step 2 — Push this project
```bash
cd rj-portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rj-portfolio.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source** select **GitHub Actions**
3. The workflow at `.github/workflows/deploy.yml` runs automatically on every push to `main`
4. Your site will be live at: `https://YOUR_USERNAME.github.io/rj-portfolio/`

### Step 4 — Custom domain (optional)
1. In repo Settings → Pages → Custom domain, enter your domain
2. Add a `CNAME` file in `public/` with your domain name
3. Update DNS records with your provider

## 🗂 Project Structure

```
rj-portfolio/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── Nav.jsx          # Fixed navigation bar
│   │   ├── Hero.jsx         # Landing hero section
│   │   ├── About.jsx        # About me section
│   │   ├── Experience.jsx   # Work experience cards
│   │   ├── Projects.jsx     # Featured projects grid
│   │   ├── ImpactDashboard.jsx  # Stats + charts
│   │   ├── Skills.jsx       # Skills & tools section
│   │   ├── Contact.jsx      # Contact form + info
│   │   ├── Footer.jsx       # Footer
│   │   ├── CaseStudy.jsx    # Case study page renderer
│   │   ├── DashboardMockup.jsx  # SVG UI mockup
│   │   └── Icon.jsx         # SVG icon library
│   ├── data/
│   │   └── projects.js      # All project & case study data
│   ├── hooks/
│   │   └── useReveal.js     # Scroll reveal hook
│   ├── styles/
│   │   └── global.css       # Design tokens & global styles
│   ├── App.jsx              # Root component + routing
│   └── main.jsx             # React entry point
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions CI/CD
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies
```

## ✏️ Customisation

### Update your personal info
Edit `src/components/Hero.jsx` — update name, phone, email, Behance handle.

### Add/edit projects
Edit `src/data/projects.js` — both the `PROJECTS` array (grid cards) and `CASE_STUDIES` object (detail pages).

### Add your photo
Replace the initials placeholder in `src/components/About.jsx`:
```jsx
// Replace this:
<div className="photo-initials">RJ</div>

// With this:
<img src="/your-photo.jpg" alt="Rushikesh Jagadale" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
```
Put your photo in the `public/` folder.

### Change accent colors
All color tokens are in `src/styles/global.css` under `:root`.

## 🛠 Tech Stack
- **React 18** — UI framework
- **Vite 5** — build tool & dev server
- **Chart.js** — dashboard charts
- **GitHub Actions** — CI/CD pipeline
- **GitHub Pages** — hosting

## 📄 License
© 2025 Rushikesh Jagadale. All rights reserved.
