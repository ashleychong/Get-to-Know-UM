import axios from "axios";

const url = "http://localhost:5000/leisure/exp";

export const fetchExps = () => axios.get(url);
export const createExp = (newExp) => axios.post(url, newExp);
