
import { useEffect, useState } from "react";
import Blog from "../Singleblog/Blog";


const Blogs = ({addToBookMark,addReadingTime}) => {

    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch(`blogs.json`)
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1>ALL BLOGS</h1>
          {
            blogs.map(blog=><Blog 
              key={blog.id}
             blog={blog}
             addToBookMark={addToBookMark}
             addReadingTime={addReadingTime}
             >
             
                
            </Blog>)
          }
        </div>
    );
};

export default Blogs;