import {
  START_LOADING,
  END_LOADING,
  FETCH_CAFES,
  FETCH_CAFES_BY_PAGES,
  FETCH_CAFE,
  CREATE_CAFE,
  UPDATE_CAFE,
  DELETE_CAFE,
  FETCH_CAFE_REVIEWS,
  CREATE_CAFE_REVIEW,
  UPDATE_CAFE_REVIEW,
  DELETE_CAFE_REVIEW,
} from "../constants/cafeActionTypes";

const cafeReducer = (state = { isLoading: false, cafes: [], reviews: {} }, action) => {
    switch (action.type) {
      case START_LOADING:
        return { ...state, isLoading: true };
      case END_LOADING:
        return { ...state, isLoading: false };
      case FETCH_CAFES:
        return {
          ...state,
          cafes: action.payload,
        };
      case FETCH_CAFES_BY_PAGES:
        return {
          ...state,
          cafes: action.payload.data,
          currentPage: action.payload.currentPage,
          numberOfPages: action.payload.numberOfPages,
        };
      case FETCH_CAFE:
        return { ...state, cafe: action.payload.cafe };
      case CREATE_CAFE:
        return { ...state, cafes: [...state.cafes, action.payload] };
      case UPDATE_CAFE:
        return {
          ...state,
          cafes: state.cafes.map((cafe) =>
            cafe._id === action.payload._id ? action.payload : cafe
          ),
        };
      case DELETE_CAFE:
        return {
          ...state,
          cafes: state.cafes.filter((cafe) => cafe._id !== action.payload),
        };
      case FETCH_CAFE_REVIEWS:
        return {
          ...state,
          reviews: {
            ...state.reviews,
            [action.payload.cafeId]: action.payload.data,
          },
        };
      case CREATE_CAFE_REVIEW:
        return {
          ...state,
          reviews: {
            ...state.reviews,
            [action.payload.cafeId]: [
              ...state.reviews[action.payload.cafeId],
              action.payload.data,
            ],
          },
        };
      case UPDATE_CAFE_REVIEW:
        return {
          ...state,
          reviews: {
            ...state.reviews,
            [action.payload.cafeId]: state.reviews[action.payload.cafeId].map(
              (review) =>
                review._id === action.payload.reviewId ? action.payload.data : review
            ),
          },
        };
      case DELETE_CAFE_REVIEW:
        return {
          ...state,
          reviews: {
            ...state.reviews,
            [action.payload.cafeId]: state.reviews[
              action.payload.cafeId
            ].filter((review) => review._id !== action.payload.reviewId),
          },
        };
      default:
        return state;
    }
};

export default cafeReducer;