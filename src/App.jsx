
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import { useEffect } from 'react'



function App() {
  return (
    <>
  <Header></Header>
  <Blogs></Blogs>
    </>
  )
}

export default App
