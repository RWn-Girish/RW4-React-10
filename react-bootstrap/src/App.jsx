import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FAQ from './Components/FAQ'
import CardComp from './Components/CardComp'
import { Route, Routes } from 'react-router'
import Header from './Components/Header'
import HomePage from './Pages/HomePage'

function App() {
  

  return (
    <>
    <Header />
     <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about/:id' element={<FAQ />} />
        <Route path='/contact' element={<CardComp />} />
        <Route path='/*' element={<h1>404 Page Not Found</h1>} />
     </Routes>

    </>
  )
}

export default App
