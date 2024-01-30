import axios from 'axios';

const basePath = 'http://localhost:7000/';
const axiosInstance = axios.create({ baseURL: basePath });


export default axiosInstance;
export {basePath};