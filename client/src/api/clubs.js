import axios from "axios";
import { serverURL } from "./index";

const url = `${serverURL}/club`;

export const fetchClubs = (page) => axios.get(`${url}?page=${page}`);
export const fetchClub = (id) => axios.get(`${url}/detail/${id}`);
export const fetchClubsBySearch = (searchQuery) =>
  axios.get(`${url}/name/search?searchQuery=${searchQuery.search || "none"}`);
export const createClubs = (newClub) => axios.post(url, newClub);
export const updateClub = (id, updatedClub) =>
  axios.patch(`${url}/${id}`, updatedClub);
export const deleteClub = (id) => axios.delete(`${url}/${id}`);
export const fetchClubTable = (user) => axios.get(`${url}/${user}`);
