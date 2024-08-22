import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from '../components/nav'
import './App.css';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
  </StrictMode>,
)
