import axios from "axios";

const API = axios.create({
  baseURL: "http://172.20.10.8:3000",
  //   headers: {
  // "Access-Control-Allow-Origin": `http://localhost:3000/`,
  // "Access-Control-Allow-Credentials": "true",
  //   },
});

export default API;
