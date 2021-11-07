import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchExps = () => API.get("/leisure/exp");
export const createExp = (newExp) => API.post("/leisure/exp", newExp);
export const likeExp = (id) => API.patch(`/leisure/${id}/likeExp`);
