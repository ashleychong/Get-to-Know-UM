import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (clubs = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...clubs, action.payload];
    case UPDATE:
      return clubs.map((club) =>
        club._id === action.payload._id ? action.payload : club
      );
    case DELETE:
      return clubs.filter((club) => club._id !== action.payload);
    default:
      return clubs;
  }
};
