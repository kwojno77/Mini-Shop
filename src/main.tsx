import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PiwikPro from '@piwikpro/react-piwik-pro';

PiwikPro.initialize('b35bead6-9dee-44e0-b83f-a9fc2cfaaf80', 'https://kacperwojno.piwik.pro');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
