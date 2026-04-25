import './App.css'
import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import ViewCrewmates from './pages/ViewCrewmates'
import CreateCrewmate from './pages/CreateCrewmate'
import EditCrewmate from './pages/EditCrewmate'
import DetailView from './pages/DetailView'

const App = () => {

  let element = useRoutes([
    {
      path: "/",
      element: <ViewCrewmates />
    },
    {
      path: "/create",
      element: <CreateCrewmate />
    },
    {
      path: "/EditCrewmates/:id",
      element: <EditCrewmate />
    },
    {
      path: "/crewmate/:id",
      element: <DetailView />
    }
  ])

  return (
    <div className="App">

      <div className="header">
        <h1 className="header-title">🚀 Crewmate Command</h1>
        <p className="header-desc">
          Build your crew, track their stats, and prepare for the mission ahead —
          watch out for the impostor.
        </p>
        <div className="header-buttons">
          <Link to="/"><button className="headerBtn">View Crew 👥</button></Link>
          <Link to="/create"><button className="headerBtn">New Crewmate ➕</button></Link>
        </div>
      </div>

      {element}

    </div>
  )
}

export default App