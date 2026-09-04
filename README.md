# 👤 Portfolio

[![Deploy](https://github.com/petrsafrata/portfolio/actions/workflows/deploy-pages.yml/badge.svg?branch=master)](https://github.com/petrsafrata/portfolio/actions/workflows/deploy-pages.yml)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-Personal_Project-lightgrey)

Osobní portfolio zaměřené na prezentaci mé práce, zkušeností a projektů v oblasti vývoje softwaru, především **Java a back-end vývoje**.

Aplikace je vytvořena v Reactu a TypeScriptu s důrazem na jednoduchý responzivní design, přehlednou strukturu a snadnou rozšiřitelnost.

> [!TIP]
> **Live:** https://petrsafrata.github.io/portfolio/

---

## ✨ Funkce

- Prezentace profesních zkušeností, vzdělání a technických dovedností
- Přehled vlastních softwarových projektů s odkazy na jejich GitHub repozitáře
- Prezentace certifikací včetně možnosti zobrazení originálního certifikátu
- Responzivní rozhraní optimalizované pro desktop i mobilní zařízení
- Komponentová architektura s oddělenými daty, typy a jednotlivými sekcemi
- Automatický build a deployment na GitHub Pages pomocí GitHub Actions

---

## 🛠️ Technologie

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**

---

## 📁 Struktura projektu

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── public/
│   └── certificates/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── certificates/
│   │   │   ├── CertificateCard.tsx
│   │   │   └── CertificateModal.tsx
│   │   ├── ui/
│   │   │   ├── Card.tsx
│   │   │   ├── Chip.tsx
│   │   │   └── Section.tsx
│   │   └── ProfilePhoto.tsx
│   ├── data/
│   │   └── portfolio.ts
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
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

Aplikace je rozdělena do několika základních vrstev:

- `components/` obsahuje znovupoužitelné UI komponenty
- `sections/` obsahuje jednotlivé části portfolia
- `data/` obsahuje data zobrazovaná na stránce
- `types/` obsahuje sdílené TypeScript typy
- `assets/` obsahuje assety zpracovávané aplikací
- `public/` obsahuje veřejné statické soubory

---

## 💻 Lokální spuštění

Projekt vyžaduje nainstalovaný **Node.js** a **npm**.

```bash
git clone https://github.com/petrsafrata/portfolio.git
cd portfolio
npm install
npm run dev
```

Produkční build lze vytvořit pomocí:

```bash
npm run build
```

Výsledné soubory budou vytvořeny v adresáři `dist/`.

---

## 🚀 Deployment

Portfolio je automaticky buildováno a nasazováno na **GitHub Pages** pomocí GitHub Actions.

Workflow:

```text
.github/workflows/deploy-pages.yml
```

Při změně v hlavní větvi se vytvoří nový produkční build aplikace a po úspěšném dokončení se automaticky nasadí na GitHub Pages.

Aktuální stav deploymentu je zobrazen pomocí GitHub Actions badge v horní části README.

---

## ⚖️ Licence

Tento projekt je autorské dílo.

Zdrojový kód ani jeho části nesmí být bez předchozího souhlasu autora kopírovány, upravovány, šířeny nebo používány v jiných projektech.

© Petr Šafrata. Všechna práva vyhrazena.