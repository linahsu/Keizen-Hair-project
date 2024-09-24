import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Staff from './pages/Staff'
import Services from './pages/Services'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/services' element={<Services />} />
          <Route path='' element={<Navigate to='/home' />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
