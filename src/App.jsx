import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './User/Pages/HomePage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
