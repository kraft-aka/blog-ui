import React from 'react'
import './BlogsList.scss'

export default function BlogsList() {
  return (
    <main className='blogs-list-container'>
      <header>
        <h3>Published Blogs</h3>
      </header>
      <section className='blogs-list-items'>

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
