import { FETCH_ALL, CREATE } from "../constants/actionTypes";

export default (exps = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...exps, action.payload];
    default:
      return exps;
  }
};
