import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BSS from './components/BSS.jsx'
import Infocard from './components/Card.jsx'
import Lab10Task from './components/Lab10Task.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    {/* <BSS/> */}
    {/* <Infocard/> */}
    <Lab10Task/>
    <Footer/>
  </StrictMode>,
)
