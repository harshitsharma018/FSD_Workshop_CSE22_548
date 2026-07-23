import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Dashboard from './components/Dashboard.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />   
   <Home/>
   <Dashboard/>
   <Footer/>
  </StrictMode>,
)
