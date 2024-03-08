import axiosInstance from "./axiosInstance";

async function getUser() {
  try {
    const res = await axiosInstance.post('signin');
    return res.data;
  } catch (err) {
    return false
  }
}

async function addUserIcon(userImg) {
  try {
    const res = await axiosInstance.post('user/addIcon', userImg);
    return res.data
  } catch (err) {
    return false;
  }
}


export { getUser, addUserIcon };