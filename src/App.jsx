import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Home from './pages/Home'
import Especialidades from './pages/Especialidades'
import Medicos from './pages/Medicos'
import FechaHora from './pages/FechaHora'
import Confirmacion from './pages/Confirmacion'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-200 flex items-center justify-center py-8">
          <div className="relative w-[320px] bg-[#faf9f6] overflow-hidden rounded-[44px] shadow-2xl" style={{ minHeight: '640px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/especialidades" element={<Especialidades />} />
              <Route path="/medicos/:specialty" element={<Medicos />} />
              <Route path="/fecha-hora" element={<FechaHora />} />
              <Route path="/confirmacion" element={<Confirmacion />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
