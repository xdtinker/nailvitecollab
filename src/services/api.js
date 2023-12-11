import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5278/api/",
  // Other configuration if needed (headers, authentication tokens, etc.)
});

export default instance;
