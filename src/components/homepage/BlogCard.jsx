import React from 'react'

export default function BlogCard({ blog }) {
  const {title, id} = blog;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
