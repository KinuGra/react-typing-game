import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './index.css'
import App from './App';

createRoot(
  document.getElementById('root')!)
.render(
  <React.StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <div>
          <App />
        </div>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )