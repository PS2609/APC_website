import React from 'react'
import Navbar from './components/navbar'
import AboutUs from './components/aboutUs'
import Banner1 from './components/banner1'
import Club from './components/club'


function App() {
  return (<>
    <section className='bg-hero-bg h-screen bg-center bg-cover'>
      <Navbar />
      <Banner1 />
      <AboutUs/>
      <Club/>

    </section>


  </>
  )
}

export default App
