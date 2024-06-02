import React from 'react'
import Navbar from './components/navbar'
import Gallery from './components/Gallery'



function App() {
  return (<>
    <section className='bg-hero-bg h-screen bg-center bg-cover'>
      <Navbar />
      <Gallery />
    </section>
  </>
  )
}

export default App
