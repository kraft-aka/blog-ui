import React, { useState,useEffect } from 'react'
import './BlogsList.scss'
import { getAllBlogs } from '../../API/blogs'
import BlogPublishedCard from './BlogPublishedCard';

export default function BlogsList() {
  const [blogs, setBlogs] = useState([]);

  console.log(blogs)
  useEffect(()=> {
    getAllBlogs().then(userBlogs => setBlogs(userBlogs))
  },[])


  const userBlogs = blogs.map(userBlog => {
    return (<BlogPublishedCard blogs={userBlog} />)
  })
  return (
    <main className='blogs-list-container'>
      <header className='blogs-list-header'>
        <h3>Published Blogs</h3>
      </header>
      <section className='blogs-list-items'>
        <>{userBlogs}</>
      </section>
      <section className='blogs-list-info'>
        <h3>Infographics</h3>
        <div className="blogs-list-info-total-likes">
          <p>Total Likes</p>
          <p>15</p>
        </div>
        <div className="blogs-list-info-total-blogs">
          <p>Total Blogs</p>
          <p>3</p>
        </div>
      </section>
    </main>
  )
}
