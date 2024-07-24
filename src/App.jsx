import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Items from './components/Items'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Sports from './components/Sports'
import Tech from './components/Tech'
import Weather from './components/Weather'
import Search from './components/Search'
import Politics from './components/Politics'
import Education from './components/Education'


const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <Search/>

      <Routes  >
        <Route element={<Items/>} path='/' />
        <Route element={<Sports/>} path='/sports' />
        <Route element={<Politics/>} path='/politics' />
        <Route element={<Weather/>} path='/weather' />
        <Route element={<Tech/>} path='/tech' />
        <Route element={<Education/>} path='/education' />

      </Routes>
    </Router>
    </>
  )
}

export default App