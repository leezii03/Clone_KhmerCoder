import React from 'react'
import Navbar from './layout/Navbar'
import AppRouter from './router/AppRouter'
import Footer from './layout/Footer'

const App = () => {
  return (
    <div className='bg-black h-full w-screen pb-10'>
      	<Navbar/>
        <AppRouter/>
        <Footer/>
    </div>
  )
}

export default App
