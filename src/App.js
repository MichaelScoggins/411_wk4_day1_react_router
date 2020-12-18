import React from 'react'
import Navigation from './components/Navigation'
import './App.css'
import { Router, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  )
}

export default App
