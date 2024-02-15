import axiosInstance from './axiosInstance';

async function getComments() {
  try {
    const res = await axiosInstance.get('comments');
    return res.data.comments;
  } catch (err) {
    return false
  }
}

export { getComments };