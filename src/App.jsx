import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateCrewmate from './pages/CreateCrewmate'
import ViewCrewmates from './pages/ViewCrewmates'
import EditCrewmate from './pages/EditCrewmate'
import DetailView from './pages/DetailView'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/crew" element={<ViewCrewmates />} />
      <Route path="/create" element={<CreateCrewmate />} />
      <Route path="/EditCrewmates/:id" element={<EditCrewmate />} />
      <Route path="/crewmate/:id" element={<DetailView />} />
    </Routes>
  )
}

export default App