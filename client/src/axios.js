import axios from "axios";

const ApiClient = axios.create({
  baseURL:"http://localhost:3012/api"
});

ApiClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default ApiClient;
