import axios from "axios";

const __dirname = window.location.origin;
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || __dirname,
});

export default api;
