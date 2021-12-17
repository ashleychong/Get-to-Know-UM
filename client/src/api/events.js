//axios for making api requests
import axios from "axios";

//point to backend url
const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});
//make axios.get call to url
// url return all the posts we currently have
export const fetchEvents = (page) => API.get(`/event?page=${page}`);
export const fetchEvent = (id) => API.get(`/event/detail/${id}`);
export const fetchEventsBySearch = (searchQuery) =>
  API.get(`/event/info/search?searchQuery=${searchQuery.search || "none"}`);
export const createEvents = (newEvent) => API.post("/event", newEvent);
export const updateEvent = (id, updatedEvent) =>
  API.patch(`/event/${id}`, updatedEvent);
export const deleteEvent = (id) => API.delete(`/event/${id}`);
export const fetchEventTable = (user) => API.get(`/event/${user}`);
export const fetchFavEvents = (page) =>
  API.get(`/event/fav/events?page=${page}`);
export const addFav = (id) => API.patch(`/event/addFav/${id}`);
export const fetchEventsByTag = (tag) =>
  API.get(`/event/tag/search?tag=${tag.search || "none"}`);
