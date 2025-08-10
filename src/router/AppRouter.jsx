import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Events from '../pages/Events'
import Teams from '../pages/Teams'
import Home from '../pages/Home'
import Partners from '../pages/Partners'
import Donate from '../pages/Donate'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/teams' element={<Teams/>}/>
      <Route path='/partners' element={<Partners/>}/>
      <Route path='/donate' element={<Donate/>}/>
    </Routes>
  )
}

export default AppRouter
