import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { QrCode } from './assets/qrCode'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <App /> */}
    <QrCode/>
  </StrictMode>,
)
