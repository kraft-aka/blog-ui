import React, { useState } from 'react'
import './EditBlog.scss'
import { editBlog } from '../../API/blogs';

export default function EditBlog({ handleEditClose, blogs }) {
  const [editTitle, setEditTitle] = useState(blogs.title);
  const [editContent, setEditContent] = useState(blogs.blogContent)

  function handleTitleChange(e) {
    setEditTitle(e.target.value)
  }

  function handleContentChange(e) {
    setEditContent(e.target.value)
  }

  const editedBlog = {
    title: editTitle,
    blogContent: editContent,
  }

  function handleSubmitEditBlog(e) {
    e.preventDefault();
    editBlog(blogs._id, editedBlog).then(response => {
      alert(JSON.stringify(response))
    })
  }

  return (
    <main className="edit-blog-modal">
      <section className='edit-blog-container'>
        <header className='edit-blog-header'>
          <h3>Edit Your Blog</h3>
        </header>
        <form className='edit-blog-form' onSubmit={handleSubmitEditBlog}>
          <label htmlFor="edit-blog-title">Title</label>
          <input type="text" value={editTitle} onChange={handleTitleChange} />
          <br />
          <label htmlFor="edit-blog-content">Content</label>
          <textarea value={editContent} onChange={handleContentChange} />
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
