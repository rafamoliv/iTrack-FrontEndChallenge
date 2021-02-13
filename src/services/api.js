import axios from "axios";

const api = axios.create({
  baseURL: "http://www15.itrack.com.br",
});

export default api;
