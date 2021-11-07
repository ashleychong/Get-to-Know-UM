import { FETCH_ALL, CREATE, LIKE } from "../constants/actionTypes";

export default (exps = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...exps, action.payload];
    case LIKE:
      return exps.map((exp) =>
        exp._id === action.payload._id ? action.payload : exp
      );
    default:
      return exps;
  }
};
