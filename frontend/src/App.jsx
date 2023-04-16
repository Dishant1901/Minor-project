import React from 'react'
import UploadAudio from './components/UploadAudio'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Add from './components/Add'

function App() {

  return (
   <>
      <div>
        <Navbar/>
        <Hero/>
        <Add/>

        <UploadAudio/>
      
      </div>

   </>

  )
}

export default App
