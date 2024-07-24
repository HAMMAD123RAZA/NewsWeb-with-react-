import React from 'react'
import Navbar from './components/Navbar'
import Items from './components/Items'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Sports from './components/Sports'
import Tech from './components/Tech'
import Weather from './components/Weather'
import Politics from './components/Politics'
import Search from './components/Search'

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <Search/>

      <Routes  >
        <Route element={<Items/>} path='/' />
        <Route element={<Sports/>} path='/Sports' />
        <Route element={<Politics/>} path='/Politics' />
        <Route element={<Weather/>} path='/Weather' />
        <Route element={<Tech/>} path='/Tech' />

      </Routes>
    </Router>
    </>
  )
}

export default App