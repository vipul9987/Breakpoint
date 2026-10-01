// Ensure window.fetch has both getter and setter for third-party scripts and environment wrappers
try {
  let _currentFetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    get() {
      return _currentFetch;
    },
    set(newFetch) {
      _currentFetch = newFetch;
    },
    configurable: true,
    enumerable: true,
  });
} catch (_) {
  // Ignore if already defined
}

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
