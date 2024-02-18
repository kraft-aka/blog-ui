import React, { useState, useEffect } from "react";
import "./BlogsList.scss";
import { getPaginatedBlogs } from "../../API/blogs";
import BlogPublishedCard from "./BlogPublishedCard";
import { deleteBlog } from "../../API/blogs";
import { useAuth } from "../../providers/authProvider";
import Pagination from "../pagination/Pagination";
import { toast } from "react-hot-toast";

export default function BlogsList({ handleEdit, setShowEdit }) {
  const [blogsPaginated, setBlogsPaginated] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBlogsLimit, setCurrentBlogsLimit] = useState(3);
  const [blogsNumber, setBlogsNumber] = useState(null)
  const { loggedUser } = useAuth();

  useEffect(() => {
    getPaginatedBlogs(loggedUser.id, currentPage, currentBlogsLimit).then(
      (userBlogs) => setBlogsPaginated(userBlogs.results)
    );
  }, [loggedUser.id, currentPage]);

  useEffect(() => {
    getPaginatedBlogs(loggedUser.id, currentPage, currentBlogsLimit).then(
      (userBlogs) => setBlogsNumber(userBlogs.blogsCount)
    );
  }, [loggedUser.id, currentPage]);


  function handleDeleteBlog(blogId) {
    deleteBlog(blogId)
      .then((response) => {
        if (response) {
          setBlogsPaginated(blogsPaginated.filter((b) => b._id != blogId));
          toast.success('Blog has been removed!')
        } else {
          toast.error("Can not remove this blog");
        }
      })
      .catch((err) => toast.error("Can not remove this blog"));
  }

  const userBlogs = blogsPaginated.map((userBlog) => {
    return (
      <BlogPublishedCard
        key={userBlog._id}
        blogs={userBlog}
        handleDeleteBlog={handleDeleteBlog}
        handleEdit={handleEdit}
        setShowEdit={setShowEdit}
      />
    );
  });

  return (
    <main className="blogs-list-container">
      <header className="blogs-list-header">
        <h3>Published Blogs</h3>
      </header>
      <section className="blogs-list-items">
        <>{userBlogs}</>
        <Pagination
          currentPage={currentPage}
          currentBlogsLimit={currentBlogsLimit}
          blogsNumber={blogsNumber}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </section>
      <section className="blogs-list-info">
        <h3>Infographics</h3>
        <div className="blogs-list-info-total-likes">
          <p>
            Total Likes: <span>2</span>
          </p>
        </div>
        <div className="blogs-list-info-total-blogs">
          <p>
            Total Blogs: <span> {blogsNumber} </span>
          </p>
        </div>
        <div className="blogs-list-info-total-comments">
          <p>
            Total Comments: <span>5 </span>
          </p>
        </div>
      </section>
    </main>
  );
}
