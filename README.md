# 👤 Portfolio

[![Deploy](https://github.com/petrsafrata/portfolio/actions/workflows/deploy-pages.yml/badge.svg?branch=master)](https://github.com/petrsafrata/portfolio/actions/workflows/deploy-pages.yml)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-Personal_Project-lightgrey)

A personal portfolio showcasing my professional experience, projects, and technical skills in software development, with a primary focus on **Java and back-end development**.

The application is built with React and TypeScript and provides both **Czech and English language versions**. It focuses on responsive design, clean component architecture, and easy maintainability.

> [!TIP]
> **Live:** https://petrsafrata.cz/

---

## ✨ Features

- Czech and English language versions with a built-in language switcher
- Persistent language preference across visits
- Overview of professional experience, education, and technical skills
- Showcase of software projects with links to their GitHub repositories
- Presentation of certifications with the option to view original certificates
- Responsive interface optimized for desktop and mobile devices
- Component-based architecture with separated content, translations, types, and UI sections
- Automated build and deployment to GitHub Pages using GitHub Actions

---

## 🛠️ Technologies

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**

---

## 📁 Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   ├── components/
│   │   ├── certificates/
│   │   │   ├── CertificateCard.tsx
│   │   │   └── CertificateModal.tsx
│   │   ├── ui/
│   │   │   ├── Card.tsx
│   │   │   ├── Chip.tsx
│   │   │   └── Section.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── ProfilePhoto.tsx
│   ├── context/
│   │   ├── LanguageContext.tsx
│   │   ├── LanguageContextValue.ts
│   │   └── useLanguage.ts
│   ├── data/
│   │   ├── index.ts
│   │   ├── portfolio.cs.ts
│   │   └── portfolio.en.ts
│   ├── i18n/
│   │   └── translations.ts
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── types/
│   │   ├── language.ts
│   │   └── portfolio.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── README.md
└── vite.config.ts
```

The application is divided into several main layers:

- `components/` contains reusable UI and feature-specific components
- `context/` manages the currently selected language and language switching
- `data/` contains separate Czech and English portfolio content
- `i18n/` contains shared user-interface translations
- `sections/` contains the individual portfolio page sections
- `types/` contains shared TypeScript types
- `assets/` contains assets processed by the application
- `public/` contains publicly accessible static files

---

## 🌍 Localization

The portfolio supports both Czech and English.

Language-specific portfolio content is stored separately:

```text
src/data/portfolio.cs.ts
src/data/portfolio.en.ts
```

Shared interface translations are stored in:

```text
src/i18n/translations.ts
```

The active language is managed through the language context located in:

```text
src/context/
```

Users can switch between Czech and English directly in the interface. The selected language is persisted locally so it remains active on subsequent visits.

---

## 💻 Local Development

The project requires **Node.js** and **npm**.

```bash
git clone https://github.com/petrsafrata/portfolio.git
cd portfolio
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

The production files will be generated in the `dist/` directory.

---

## 🚀 Deployment

The portfolio is automatically built and deployed to **GitHub Pages** using GitHub Actions.

Workflow:

```text
.github/workflows/deploy-pages.yml
```

Whenever changes are pushed to the main branch, a new production build is created and automatically deployed after a successful workflow run.

The current deployment status is displayed by the GitHub Actions badge at the top of this README.

---

## ⚖️ License

This project is copyrighted work.

The source code, or any part of it, may not be copied, modified, distributed, or used in other projects without the author's prior permission.

© Petr Šafrata. All rights reserved.