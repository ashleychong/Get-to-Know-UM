import axios from "axios";

const url = "http://localhost:5000/club";

export const fetchClubs = (page) => axios.get(`${url}?page=${page}`);
export const fetchClub = (id) => axios.get(`${url}/detail/${id}`);
export const fetchClubsBySearch = (searchQuery) =>
  axios.get(
    `${url}/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags || "none"
    }`
  );
export const createClubs = (newClub) => axios.post(url, newClub);
export const updateClub = (id, updatedClub) =>
  axios.patch(`${url}/${id}`, updatedClub);
export const deleteClub = (id) => axios.delete(`${url}/${id}`);
export const AddFav = (id) => axios.patch(`/club/${id}/AddFav`);
export const fetchClubTable = (user) => axios.get(`${url}/${user}`);
