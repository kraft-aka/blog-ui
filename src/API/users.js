import axiosInstance from "./axiosInstance";

async function getUser() {
  try {
    const res = await axiosInstance.post('signin');
    return res.data;
  } catch (err) {
    return false
  }
}

async function signUpUser(user) {
  try {
    const res = await axiosInstance.post('signUp', user);
    return res.data.newUser;
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

async function editUserPassword(user) {
  try {
    const res = await axiosInstance.patch('user', user)
    return res.data.user;
  } catch (err) {
    return false;
  }
}


export { getUser, signUpUser, editUserPassword, addUserIcon };