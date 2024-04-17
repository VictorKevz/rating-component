import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Rating from './components/Rating'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <main className='outer-container'>
      <div className='inner-container'>
        <Header/>
        <Rating/>
      </div>
      <Footer/>
    </main>
  )
}

export default App
