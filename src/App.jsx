// States are used to build a dynamic events that changes over time or after any event e.g; (Counter event in Navbar)

// React Router Dom are used to route from one page to another without refreshing the overall page. We use different libraries like BrowserRouter, Routes, Route  and Link tag to route it. It is similar to anchor tag

import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Foreveryone from './pages/Foreveryone'
import Electronics from './pages/Electronics'
import About from './pages/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/foreveryone' element={<Foreveryone />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/about' element={<About />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  
  )
}

export default App