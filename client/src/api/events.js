//axios for making api requests
import axios from "axios";

//point to backend url
const url = "http://localhost:5000/event";

//make axios.get call to url
// url return all the posts we currently have
export const fetchEvents = () => axios.get(url);
export const fetchEvent = (id) => axios.get(`${url}/${id}`);
export const fetchEventsBySearch = (searchQuery) =>
  axios.get(`${url}/search?searchQuery=${searchQuery.search || "none"}`);
export const createEvents = (newEvent) => axios.post(url, newEvent);
export const updateEvent = (id, updatedEvent) =>
  axios.patch(`${url}/${id}`, updatedEvent);
export const deleteEvent = (id) => axios.delete(`${url}/${id}`);
