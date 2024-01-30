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

async function getBlog(blogId) {
  try {

    const res = await axiosInstance.get(`blogs/${blogId}`);
    return res.data
  } catch (err) {
    console.log(err)
    return false
  }
}

export { getAllBlogs, getBlog };
