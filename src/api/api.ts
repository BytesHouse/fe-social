import axios from "axios";

const base_url = "http://localhost:5005/api"; // development
const base_url_prod = "https://be-social-cxau.onrender.com/api";

//
export const $api = axios.create({ baseURL: base_url_prod || base_url_prod });

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // ???
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
