import React from 'react'
import './CSS/Blog.css'

const Blog = (props) => {
  return (
    <div className='blog-wrap'>
        <img src="https://picsum.photos/200/300" alt="" />
        <p>{props.tanggal}</p>
        <p><h3>{props.judul}</h3></p>
        <p>{props.desc}</p>
    </div>
  )
}

export default Blog
