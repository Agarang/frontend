import axios from "axios";

const API = axios.create({
  baseURL: "http://skflyaiproject.store",
  // baseURL: "http://172.24.124.142:3000",
  //   headers: {
  // "Access-Control-Allow-Origin": `http://localhost:3000/`,
  // "Access-Control-Allow-Credentials": "true",
  //   },
});

export default API;
