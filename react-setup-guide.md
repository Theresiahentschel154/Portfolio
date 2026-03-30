# Migration Guide for React & Shadcn UI

Your portfolio currently consists of standard HTML, CSS, and plain JavaScript files. However, to use the interactive `ScrollExpandMedia` component (which is written in React, Tailwind, and TypeScript), you need a proper build setup. 

Here are the instructions to prepare your codebase, install the necessary dependencies, and set up your component architecture correctly.

## 1. Setting Up the Project

Initialize a modern frontend builder like Vite. This will let us build and inject React components directly into your existing HTML files.

```bash
npm init -y
npm install vite react react-dom typescript @types/react @types/react-dom --save-dev
```

Initialize your TypeScript configuration:
```bash
npx tsc --init
```

Update your `tsconfig.json` to support JSX:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## 2. Installing Tailwind CSS

The new component relies heavily on Tailwind CSS for layout, colors, and animations.

```bash
npm install tailwindcss postcss autoprefixer --save-dev
npx tailwindcss init -p
```

Edit the generated `tailwind.config.js` to scan your HTML and `.tsx` files:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 3. Setting Up Shadcn UI

Initialize the Shadcn CLI.

```bash
npx shadcn-ui@latest init
```
When prompted, select the default options:
- **TypeScript:** yes
- **Style:** Default
- **Base color:** Slate or Zinc
- **Global CSS file:** `style.css` 
- **CSS variables for colors:** yes
- **Tailwind config:** `tailwind.config.js`
- **Components:** `@/components` 

### Why is the `/components/ui` folder important?

The default path for components in the shadcn-ui ecosystem is `/components/ui`. 
It is highly recommended to stick to this exact folder structure because:
1. **Separation of Concerns:** It neatly separates primitive, reusable UI components (like buttons, modals, and the hero expansion logic) from business logic or complex page layouts (like `/components/blocks/`).
2. **CLI Automation:** Shadcn's CLI tools automatically expect this path when using the `npx shadcn-ui add <component>` command to inject updates or new UI pieces seamlessly into your repository.

## 4. Install Component Dependencies

The hero component relies on Framer Motion for powerful scroll animations. (Lucide-react is already requested during the shadcn initialization but is listed here for completeness).

```bash
npm install framer-motion lucide-react
```

## Next Steps

I have prepared the React entry file at `src/main.tsx`. It takes the standard empty `<div>` which I created in `index.html` inside the `<section id="home">` block, and renders the expansion hero directly into it. 

Once your Vite server is running (`npx vite`), the hero section will smoothly activate!
