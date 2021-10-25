import axios from "axios";

//point to backend url
const url = "http://localhost:5000/club";

export const fetchClubs = () => axios.get(url);
export const createClubs = (newClub) => axios.post(url, newClub);
export const updateClub = (id, updatedClub) =>
  axios.patch(`${url}/${id}`, updatedClub);
export const deleteClub = (id) => axios.delete(`${url}/${id}`);
