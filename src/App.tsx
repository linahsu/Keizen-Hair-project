import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Staff from './pages/staff'
import Services from './pages/services'

function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/staff' element={<Staff/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='' element={<Navigate to='/home'/>} />
      </Routes>
    </>
  )
}

export default App
