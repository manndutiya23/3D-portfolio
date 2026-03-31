# 3D Portfolio

Interactive developer portfolio built with React, Vite, Tailwind CSS, and React Three Fiber.

## Features

- Interactive 3D hero section with island rotation and staged text prompts
- Animated 3D models (bird, plane, fox, sky)
- Multi-page navigation (Home, About, Projects, Contact)
- Project showcase cards with external links
- Contact form integrated with EmailJS
- Timeline-style experience section
- Background music toggle on Home

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Tailwind CSS 3 + PostCSS + Autoprefixer
- @react-three/fiber + @react-three/drei
- @react-spring/three
- EmailJS Browser SDK
- ESLint 9

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env.local` file in the project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3) Run development server

```bash
npm run dev
```

### 4) Build for production

```bash
npm run build
```

### 5) Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Starts local dev server
- `npm run build` - Builds optimized production bundle
- `npm run lint` - Runs ESLint
- `npm run preview` - Serves the production build locally

## Project Structure

```text
3d_portfolio/
|-- .env.local
|-- .gitignore
|-- eslint.config.js
|-- index.html
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- README.md
|-- tailwind.config.js
|-- vite.config.js
|-- public/
|   |-- vite.svg
|-- src/
|   |-- App.jsx
|   |-- index.css
|   |-- main.jsx
|   |-- assets/
|   |   |-- favicon.ico
|   |   |-- react.svg
|   |   |-- sakura.mp3
|   |   |-- 3d/
|   |   |   |-- bird.glb
|   |   |   |-- fox.glb
|   |   |   |-- island.glb
|   |   |   |-- plane.glb
|   |   |   |-- sky.glb
|   |   |-- icons/
|   |   |   |-- arrow.svg
|   |   |   |-- car.svg
|   |   |   |-- contact.svg
|   |   |   |-- css.svg
|   |   |   |-- dog.svg
|   |   |   |-- estate.svg
|   |   |   |-- express.svg
|   |   |   |-- git.svg
|   |   |   |-- github.svg
|   |   |   |-- html.svg
|   |   |   |-- index.js
|   |   |   |-- javascript.svg
|   |   |   |-- linkedin.svg
|   |   |   |-- mongodb.svg
|   |   |   |-- motion.svg
|   |   |   |-- mui.svg
|   |   |   |-- nextjs.svg
|   |   |   |-- nodejs.svg
|   |   |   |-- pricewise.svg
|   |   |   |-- react.svg
|   |   |   |-- redux.svg
|   |   |   |-- s.png
|   |   |   |-- sass.svg
|   |   |   |-- snapgram.svg
|   |   |   |-- sofa.svg
|   |   |   |-- soundoff.png
|   |   |   |-- soundon.png
|   |   |   |-- summiz.svg
|   |   |   |-- tailwindcss.svg
|   |   |   |-- threads.svg
|   |   |   |-- twitter.svg
|   |   |   |-- typescript.svg
|   |   |-- images/
|   |   |   |-- hero.jpg
|   |   |   |-- index.js
|   |   |   |-- logo.svg
|   |   |   |-- meta.png
|   |   |   |-- push.jpg
|   |   |   |-- shopify.png
|   |   |   |-- skream.jpg
|   |   |   |-- ssrp.jpg
|   |   |   |-- starbucks.png
|   |   |   |-- tesla.png
|   |-- components/
|   |   |-- Alert.jsx
|   |   |-- CTA.jsx
|   |   |-- HomeInfo.jsx
|   |   |-- Loader.jsx
|   |   |-- Navbar.jsx
|   |-- costants/
|   |   |-- index.js
|   |-- hooks/
|   |   |-- useAlert.js
|   |-- models/
|   |   |-- Bird.jsx
|   |   |-- Fox.jsx
|   |   |-- island.jsx
|   |   |-- Plane.jsx
|   |   |-- Sky.jsx
|   |-- pages/
|   |   |-- About.jsx
|   |   |-- Contact.jsx
|   |   |-- Home.jsx
|   |   |-- index.js
|   |   |-- Projects.jsx
```

## File Overview (Every File)

### Root files

- `.env.local`: Local environment values (EmailJS IDs/keys). Should not be committed.
- `.gitignore`: Ignore rules for dependencies, build artifacts, logs, and local secrets.
- `eslint.config.js`: Flat ESLint configuration for JS/JSX and React rules.
- `index.html`: App host page and mount point for React.
- `package-lock.json`: NPM lockfile for reproducible installs.
- `package.json`: Project metadata, scripts, dependencies, and devDependencies.
- `postcss.config.js`: PostCSS pipeline (Tailwind CSS + Autoprefixer).
- `README.md`: Project documentation.
- `tailwind.config.js`: Tailwind scanning paths and theme customizations.
- `vite.config.js`: Vite config and support for .glb assets.

### Public

- `public/vite.svg`: Static Vite icon asset.

### App entry and global styling

- `src/main.jsx`: React root render entry.
- `src/App.jsx`: Router and top-level route wiring.
- `src/index.css`: Tailwind directives and shared utility/component classes.

### Components

- `src/components/Alert.jsx`: Shared alert/banner UI.
- `src/components/CTA.jsx`: Reusable call-to-action block.
- `src/components/HomeInfo.jsx`: Stage-based messaging content shown on Home.
- `src/components/Loader.jsx`: Loading indicator for async 3D assets.
- `src/components/Navbar.jsx`: Top navigation links.

### Hooks

- `src/hooks/useAlert.js`: Small helper hook for alert state/actions.

### Data/constants

- `src/costants/index.js`: Central content data (skills, experiences, projects, social links).

### Pages

- `src/pages/About.jsx`: About page with intro, skills, and timeline experience.
- `src/pages/Contact.jsx`: Contact form page with EmailJS send behavior and fox animation state.
- `src/pages/Home.jsx`: 3D hero scene page and island-driven stage transitions.
- `src/pages/index.js`: Barrel exports for page components.
- `src/pages/Projects.jsx`: Projects listing cards and outbound links.

### 3D model components

- `src/models/Bird.jsx`: Bird model loader and animation behavior.
- `src/models/Fox.jsx`: Fox model loader and animation/state switching.
- `src/models/island.jsx`: Island model, drag/rotation handling, and current stage calculation.
- `src/models/Plane.jsx`: Plane model and movement/animation handling.
- `src/models/Sky.jsx`: Sky model placement and motion.

### 3D binary assets

- `src/assets/3d/bird.glb`: Bird mesh + animation clips.
- `src/assets/3d/fox.glb`: Fox mesh + animation clips.
- `src/assets/3d/island.glb`: Island scene mesh.
- `src/assets/3d/plane.glb`: Plane mesh.
- `src/assets/3d/sky.glb`: Sky dome mesh.

### Generic assets

- `src/assets/favicon.ico`: Browser favicon.
- `src/assets/react.svg`: React logo image.
- `src/assets/sakura.mp3`: Background music file.

### Icons

- `src/assets/icons/index.js`: Named exports for all icon assets.
- `src/assets/icons/arrow.svg`: Arrow icon.
- `src/assets/icons/car.svg`: Car icon.
- `src/assets/icons/contact.svg`: Contact icon.
- `src/assets/icons/css.svg`: CSS icon.
- `src/assets/icons/dog.svg`: Dog icon.
- `src/assets/icons/estate.svg`: Estate/project icon.
- `src/assets/icons/express.svg`: Express.js icon.
- `src/assets/icons/git.svg`: Git icon.
- `src/assets/icons/github.svg`: GitHub icon.
- `src/assets/icons/html.svg`: HTML icon.
- `src/assets/icons/javascript.svg`: JavaScript icon.
- `src/assets/icons/linkedin.svg`: LinkedIn icon.
- `src/assets/icons/mongodb.svg`: MongoDB icon.
- `src/assets/icons/motion.svg`: Framer Motion icon.
- `src/assets/icons/mui.svg`: Material UI icon.
- `src/assets/icons/nextjs.svg`: Next.js icon.
- `src/assets/icons/nodejs.svg`: Node.js icon.
- `src/assets/icons/pricewise.svg`: Pricewise project icon.
- `src/assets/icons/react.svg`: React icon.
- `src/assets/icons/redux.svg`: Redux icon.
- `src/assets/icons/s.png`: Additional icon image.
- `src/assets/icons/sass.svg`: Sass icon.
- `src/assets/icons/snapgram.svg`: Snapgram project icon.
- `src/assets/icons/sofa.svg`: Sofa/project icon.
- `src/assets/icons/soundoff.png`: Mute/sound-off icon.
- `src/assets/icons/soundon.png`: Sound-on icon.
- `src/assets/icons/summiz.svg`: Summiz project icon.
- `src/assets/icons/tailwindcss.svg`: Tailwind CSS icon.
- `src/assets/icons/threads.svg`: Threads icon.
- `src/assets/icons/twitter.svg`: Twitter/X icon.
- `src/assets/icons/typescript.svg`: TypeScript icon.

### Images

- `src/assets/images/index.js`: Named exports for image assets.
- `src/assets/images/hero.jpg`: Hero/banner image.
- `src/assets/images/logo.svg`: Site logo.
- `src/assets/images/meta.png`: Meta/company image.
- `src/assets/images/push.jpg`: Project/company image.
- `src/assets/images/shopify.png`: Shopify/company image.
- `src/assets/images/skream.jpg`: Project image.
- `src/assets/images/ssrp.jpg`: Project image.
- `src/assets/images/starbucks.png`: Starbucks/company image.
- `src/assets/images/tesla.png`: Tesla/company image.

## Notes

- The folder name `src/costants` is intentionally spelled that way in current imports. Renaming it requires updating import paths.
- This repository currently includes a local `.env.local` file in the workspace; ensure secrets are not committed.

## Deployment

This app can be deployed to Netlify, Vercel, or GitHub Pages after a successful `npm run build`.

## License

No license file is included yet. Add a LICENSE file before public open-source distribution.
