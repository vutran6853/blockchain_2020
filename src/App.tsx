import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import routes from './routes/routes'
import BlockExplorer from './components/blockExplorer/BlockExplorer'

function App() {
  return (
    <div className="">
      <Navbar />
      {routes}
    </div>
  )
}

export default App
