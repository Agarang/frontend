import axios from "axios";

const API = axios.create({
  baseURL: "http://skflyaiproject.store",
  //   headers: {
  // "Access-Control-Allow-Origin": `http://localhost:3000/`,
  // "Access-Control-Allow-Credentials": "true",
  //   },
});

export default API;
