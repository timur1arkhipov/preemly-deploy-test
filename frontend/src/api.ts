import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-opal-sigma.vercel.app"
});

export default api;
