import {
  CREATE_LEISURE,
  DELETE_LEISURE,
  FETCH_ALL_LEISURE,
  UPDATE_LEISURE,
} from "../constants/leisureActionTypes";

export default (leisures = [], action) => {
  switch (action.type) {
    case FETCH_ALL_LEISURE:
      return action.payload;
    case CREATE_LEISURE:
      return [...leisures, action.payload];
    case UPDATE_LEISURE:
      return leisures.map((leisure) =>
        leisure._id === action.payload._id ? action.payload : leisure
      );
    case DELETE_LEISURE:
      return leisures.filter((leisure) => leisure._id !== action.payload);
    default:
      return leisures;
  }
};
