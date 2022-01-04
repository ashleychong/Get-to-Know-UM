import {
  CREATE_LEISURE,
  DELETE_LEISURE,
  FETCH_ALL_LEISURE,
  UPDATE_LEISURE,
  FETCH_LEISURE_TABLE,
  START_LOADING,
  END_LOADING,
} from "../constants/leisureActionTypes";

export default (state = { isLoading: true, leisures: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL_LEISURE:
      return { ...state, leisures: action.payload };
    case CREATE_LEISURE:
      return { ...state, leisures: [...state.leisures, action.payload] };
    case UPDATE_LEISURE:
      return {
        ...state,
        leisures: state.leisures.map((leisure) =>
          leisure._id === action.payload._id ? action.payload : leisure
        ),
      };
    case DELETE_LEISURE:
      return {
        ...state,
        leisures: state.leisures.filter(
          (leisure) => leisure._id !== action.payload
        ),
      };
    case FETCH_LEISURE_TABLE:
      return {
        ...state,
        leisures: action.payload,
      };

    default:
      return state;
  }
};
