import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/hero/Hero'
import About from './Component/About/About'
import Service from './Component/Service/Service'
import Work from './Component/Work/Work'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

const App = () => {

 

  return (
    <>

      <Navbar />
      <Hero />
      <About/>
      <Service/>
      <Work/>
      <Contact/>
      <Footer/>
    </>

  )
}

export default App