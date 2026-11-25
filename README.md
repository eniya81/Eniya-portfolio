# Eniya K – Developer Portfolio

Premium dark / glassmorphism portfolio built with **React, Vite, Tailwind CSS, Framer Motion and Lucide React**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build: `npm run build` (output in `dist/`), preview it with `npm run preview`.

## Update content

All text, links, projects, skills and education live in **`src/data/portfolioData.js`**. Components only render that data.

| Asset | Location |
| --- | --- |
| Profile photo | `public/images/profile.jpg` (+ `profile.webp`) |
| Resume | `public/resume.pdf` |

## Contact form

No backend or email service is configured, so the form **does not pretend to send**: on submit it opens the visitor's mail app with the fields pre-filled (`mailto:`). The "Send an Email" button also uses `mailto:`.

To send straight from the site, use **EmailJS** (free tier):

1. Create an account at emailjs.com, add an email service and a template using the variables `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`.
2. `npm install @emailjs/browser`
3. In `src/components/Contact.jsx`, replace the body of `onSubmit` with:

```js
import emailjs from '@emailjs/browser'

const onSubmit = async (e) => {
  e.preventDefault()
  try {
    await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, { publicKey: 'YOUR_PUBLIC_KEY' })
    // show a success message and reset the form
  } catch {
    // show an error message
  }
}
```

Alternatives: Formspree, Web3Forms, or your own FastAPI endpoint.

## Deploy

Any static host works – build with `npm run build` and publish the `dist/` folder.

- **Vercel**: import the GitHub repo, framework preset *Vite*, deploy.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: set `base: '/<repo-name>/'` in `vite.config.js`, build, and publish `dist/` (e.g. with the `gh-pages` package).

After deploying, update the `og:image` / add a canonical URL in `index.html` if you want richer link previews.
