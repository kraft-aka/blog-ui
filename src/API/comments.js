import axiosInstance from './axiosInstance';

async function getComments(blogId) {
  try {
    const res = await axiosInstance.get(`comments/${blogId}`);
    return res.data;
  } catch (err) {
    return false
  }
}

async function addComment(blogId, newComment) {
  try {
    const res = await axiosInstance.post(`blogs/comment/${blogId}`, newComment);
    return res.data;
  } catch (err) {
    return false
  }
}

export { getComments, addComment };