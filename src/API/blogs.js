import axiosInstance from './axiosInstance';



async function getAllBlogs() {
  try {
    const res = await axiosInstance.get('blogs/');
    return res.data.blogs;
  } catch (err) {
    console.log(err)
    return false
  }
}

async function getUserBlogs(userId) {
  try {
    const res = await axiosInstance.get(`blogs/?user=${userId}`);
    return res.data.blogs;
  } catch (err) {
    console.log(err)
    return false
  }
}

async function getBlog(blogId) {
  try {

    const res = await axiosInstance.get(`blogs/?user=${blogId}`);
    return res.data.blogs
  } catch (err) {
    console.log(err)
    return false
  }
}

async function createBlog(blog) {
  try {
    const newBlog = await axiosInstance.post('newblog', blog);
    return newBlog.data;
  } catch (err) {
    return false;
  }
}

async function deleteBlog(blogId) {
  try {
    const blog = await axiosInstance.delete(`blogs/deleteblog/${blogId}`, blogId)
    console.log(blog)
    return blog.data.blogs
  } catch (err) {
    return false
  }
}

export { getAllBlogs, getBlog, createBlog, deleteBlog, getUserBlogs };
