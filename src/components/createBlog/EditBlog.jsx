import React, { useState } from 'react'
import './EditBlog.scss'

export default function EditBlog({ handleEditClose }) {


  function handleSubmitEditBlog(e) {
    e.preventDefault();
  }

  return (
    <main className="edit-blog-modal">
      <section className='edit-blog-container'>
        <header className='edit-blog-header'>
          <h3>Edit Your Blog</h3>
        </header>
        <form className='edit-blog-form' onSubmit={handleSubmitEditBlog}>
          <label htmlFor="edit-blog-title">Title</label>
          <input type="text" />
          <br />
          <label htmlFor="edit-blog-content">Content</label>
          <textarea />
          <br />
          <div className="edit-blog-cta">
            <input type='submit' className='edit-blog-btn' />
            <input type='reset' onClick={handleEditClose} className='edit-blog-btn cancel' />
          </div>
        </form>
      </section>
    </main>
  )
}
