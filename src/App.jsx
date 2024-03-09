import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Inicio } from './components/Inicio/Inicio'
import { Cursos } from './components/Cursos/Cursos'
import { Contacto } from './components/Contacto/Contacto'

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>



  )
}

export default App
