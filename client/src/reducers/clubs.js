import {
  FETCH_CLUBS,
  CREATE_CLUB,
  UPDATE_CLUB,
  DELETE_CLUB,
  FETCH_CLUB,
  FETCH_BY_SEARCH_CLUB,
  START_LOADING,
  END_LOADING,
  FETCH_CLUB_TABLE,
} from "../constants/actionTypes";

export default (state = { isLoading: true, clubs: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_CLUBS:
      return {
        ...state,
        clubs: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH_CLUB:
      return { ...state, clubs: action.payload };
    case FETCH_CLUB:
      return { ...state, club: action.payload.club };
    case CREATE_CLUB:
      return { ...state, clubs: [...state.clubs, action.payload] };
    case UPDATE_CLUB:
      return {
        ...state,
        clubs: state.clubs.map((club) =>
          club._id === action.payload._id ? action.payload : club
        ),
      };
    case DELETE_CLUB:
      return {
        ...state,
        clubs: state.clubs.filter((club) => club._id !== action.payload),
      };
    case FETCH_CLUB_TABLE:
      return {
        ...state,
        clubs: action.payload,
      };
    default:
      return state;
  }
};
