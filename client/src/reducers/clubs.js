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
  FETCH_CLUB_REVIEWS,
  CREATE_CLUB_REVIEW,
  UPDATE_CLUB_REVIEW,
  DELETE_CLUB_REVIEW,
} from "../constants/actionTypes";

export default (
  state = { isLoading: false, clubs: [], reviews: {} },
  action
) => {
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
      return { ...state, clubs: action.payload.data };
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
    case FETCH_CLUB_REVIEWS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [action.payload.clubId]: action.payload.data,
        },
      };
    case CREATE_CLUB_REVIEW:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [action.payload.clubId]: [
            ...state.reviews[action.payload.clubId],
            action.payload.data,
          ],
        },
      };
    case UPDATE_CLUB_REVIEW:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [action.payload.clubId]: state.reviews[action.payload.clubId].map(
            (review) =>
              review._id === action.payload.reviewId
                ? action.payload.data
                : review
          ),
        },
      };
    case DELETE_CLUB_REVIEW:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [action.payload.clubId]: state.reviews[action.payload.clubId].filter(
            (review) => review._id !== action.payload.reviewId
          ),
        },
      };
    default:
      return state;
  }
};
