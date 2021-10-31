import axios from "axios";

//point to backend url
const url = "http://localhost:5000/leisure";

export const fetchLeisures = () => axios.get(url);
export const createLeisures = (newLeisure) => axios.post(url, newLeisure);
export const updateLeisure = (id, updatedLeisure) =>
  axios.patch(`${url}/${id}`, updatedLeisure);
export const deleteLeisure = (id) => axios.delete(`${url}/${id}`);
