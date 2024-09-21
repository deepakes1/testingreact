import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Result from './Result.jsx'
function App() {
  return (
    <div>
    

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/:slug" element={<Result />}/>

    </Routes>
    </div>
  )
}

export default App
