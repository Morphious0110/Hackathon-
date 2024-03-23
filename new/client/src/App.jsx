import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Signup from './pages/Signup.jsx'
import About from './pages/About.jsx'
import Signin from './pages/Signin.jsx'
import Header from './components/Header.jsx'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App