import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Recover the intended path after the GitHub Pages 404.html redirect.
const redirectPath = sessionStorage.getItem('idev-redirect-path');
if (redirectPath) {
  sessionStorage.removeItem('idev-redirect-path');
  const base = '/idev.inc';
  const cleaned = redirectPath.startsWith(base) ? redirectPath.slice(base.length) : redirectPath;
  window.history.replaceState(null, '', base + (cleaned || '/'));
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
