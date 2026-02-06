import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import BloqueView from './pages/BloqueView'
import ExamenOficial from './pages/ExamenOficial'
import ExamenPorTemas from './pages/ExamenPorTemas'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bloques/:bloqueId" element={<BloqueView />} />
        <Route path="/examenes/oficial" element={<ExamenOficial />} />
        <Route path="/examenes/portemas" element={<ExamenPorTemas />} />
      </Route>
    </Routes>
  )
}
