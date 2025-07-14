import React from 'react'
import Header from './web/Header'
import Nav from './web/Nav'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Main from './web/Main'
import Footer from './web/footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>

  )
}

export default App
