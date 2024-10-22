

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'




function App() {

const [bookMarks,setBookMark]=useState([])
const [readTime,setReadTime]=useState(0)


const addToBookMark=(blog)=>{
 const newBookMark= [...bookMarks,blog]
 setBookMark(newBookMark)
}

const addReadingTime=(readintime,id)=>{
  setReadTime(readTime+readintime)

  const reaminingBookMark= bookMarks.filter(bookMark=>bookMark.id !== id)
  setBookMark(reaminingBookMark)
}
  return (
    <>
  <Header></Header>
  <div className='md:flex md:max-w-5xl mx-auto'>
  <Blogs 
  addToBookMark={addToBookMark} 
  addReadingTime={addReadingTime}
  ></Blogs>
  <Bookmark bookMarks={bookMarks} readTime={readTime} ></Bookmark>
  </div>
    </>
  )
}

export default App
