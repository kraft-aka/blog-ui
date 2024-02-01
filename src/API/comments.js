import axiosInstance from './axiosInstance';

async function getComments() {
  try {
    const res = await axiosInstance.get('comments');
    return res.data.comments;
  } catch (err) {
    console.log(err)
    return false
  }
}

export { getComments };