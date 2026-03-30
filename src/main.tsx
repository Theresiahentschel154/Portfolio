import React from 'react';
import ReactDOM from 'react-dom/client';
import Demo from '../components/blocks/demo';
// If using tailwind via Vite, import the global css:
// import '../style.css';

const rootElement = document.getElementById('hero-react-root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Demo />
    </React.StrictMode>
  );
}
