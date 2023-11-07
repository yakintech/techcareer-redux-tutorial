import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'

function App() {
  return (<>
    <ul style={{display:'flex', justifyContent:'space-evenly'}}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/about'>About</Link></li>

    </ul>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/blog' element={<Blog />}></Route>
      <Route path='/about' element={<About />}></Route>

    </Routes>
  </>
  )
}

export default App