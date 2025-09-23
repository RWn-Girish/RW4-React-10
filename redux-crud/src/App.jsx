import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Components/Header'
import AddStudent from './Components/AddStudent'

function App() {


  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<h2>Home Page</h2>} />
        <Route path='/add-student' element={<AddStudent />} />
        <Route path='/edit' element={<h2>Edit Page</h2>} />
      </Routes>
    </>
  )
}

export default App
