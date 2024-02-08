import axiosInstance from "./axiosInstance";

async function getUser() {
  try {
    const res = await axiosInstance.post('signin');
    return res.data;
  } catch (err) {
    console.log(err)
    return false
  }
}


export { getUser };