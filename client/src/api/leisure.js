import axios from "axios";
import { serverURL } from "./index";

//point to backend url
const url = `${serverURL}/leisure`;

export const fetchLeisures = () => axios.get(url);
export const createLeisures = (newLeisure) => axios.post(url, newLeisure);
export const updateLeisure = (id, updatedLeisure) =>
  axios.patch(`${url}/${id}`, updatedLeisure);
export const deleteLeisure = (id) => axios.delete(`${url}/${id}`);
export const fetchLeisureTable = (user) => axios.get(`${url}/${user}`);
