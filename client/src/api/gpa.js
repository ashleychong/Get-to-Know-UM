import axios from "axios";
import { serverURL } from "./index";

const api = axios.create({ baseURL: serverURL });

export const fetchCourse = () => api.get("/gpa");
