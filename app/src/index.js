import React from 'react';
import { createRoot } from 'react-dom/client';
import 'mapbox-gl/dist/mapbox-gl.css';

import App from './components/App';

import * as serviceWorker from './serviceWorker';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: registration => {
    alert('Nueva version disponible!  Listo para actualizar?');
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    window.location.reload();
  }
});
