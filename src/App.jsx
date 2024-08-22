import React from 'react'

import Rating from './components/Rating'
import Header from './components/Header'
import "./App.css"
function App() {

  return (
    <main className='outer-container'>
      <div className='inner-container'>
        <Header/>
        <Rating/>
      </div>
     
    </main>
  )
}

export default App
