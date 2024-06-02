import React from 'react'
import Navbar from './components/navbar'
import AboutUs from './components/aboutUs'
import Banner1 from './components/banner1'



function App() {
  return (<>
    <section className='bg-hero-bg h-screen bg-center bg-cover'>
      <Navbar />
      <Banner1 />
      <AboutUs/>

    </section>


  </>
  )
}

export default App
