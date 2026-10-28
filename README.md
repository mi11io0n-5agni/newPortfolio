# Milion Sagni — Developer Portfolio

Production-ready personal portfolio built with **React**, **Vite**, **Framer Motion**, and **Lucide** icons.

## Run locally

```bash
cd /home/milee/Desktop/portfolio
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. Import the repo in [Vercel](https://vercel.com).
3. Framework preset: **Vite** — build command `npm run build`, output directory `dist`.

## Customize content

| File | Purpose |
|------|---------|
| `src/data/site.js` | Name, bio, email, social links, certificate paths |
| `src/data/projects.js` | Project descriptions, stacks, GitHub & demo URLs, images |
| `src/data/skills.js` | Skill categories |
| `public/profile.jpg` | Your profile photo (shown in hero, navbar, about) |
| `public/projects/` | Project screenshots |
| `public/certificate/` | Certificate preview image & PDF (optional) |

### Certificate

Add files:

- `public/certificate/certificate-preview.png`
- `public/certificate/certificate.pdf`

Then in `src/data/site.js`:

```js
imageSrc: "/certificate/certificate-preview.png",
pdfHref: "/certificate/certificate.pdf",
```

## Author

**Milion Sagni** — [GitHub](https://github.com/mi11io0n-5agni) · [LinkedIn](https://www.linkedin.com/in/miliondev430/)
