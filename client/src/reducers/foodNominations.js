import {
  START_LOADING,
  END_LOADING,
  FETCH_FOOD_NOMINATIONS,
  FETCH_APPROVED_FOOD_NOMINATIONS,
  FETCH_FOOD_NOMINATION,
  CREATE_FOOD_NOMINATION,
  UPDATE_FOOD_NOMINATION,
  DELETE_FOOD_NOMINATION,
  APPROVE_FOOD_NOMINATION,
  DECLINE_FOOD_NOMINATION,
  VOTE_FOOD_NOMINATION,
} from "../constants/foodNominationActionTypes";

const foodNominationsReducer = (
  state = { isLoading: false, foodNominations: [] },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_FOOD_NOMINATIONS:
      return { ...state, foodNominations: action.payload };
    case FETCH_APPROVED_FOOD_NOMINATIONS:
      return {
        ...state,
        foodNominations: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_FOOD_NOMINATION:
      return { ...state, foodNomination: action.payload };
    case CREATE_FOOD_NOMINATION:
      return {
        ...state,
        foodNominations: [...state.foodNominations, action.payload],
      };
    case VOTE_FOOD_NOMINATION:
    case UPDATE_FOOD_NOMINATION:
      return {
        ...state,
        foodNominations: state.foodNominations.map((foodNomination) =>
          foodNomination._id === action.payload._id ? action.payload : foodNomination
        ),
      };
    case DELETE_FOOD_NOMINATION:
      return {
        ...state,
        foodNominations: state.foodNominations.filter(
          (foodNomination) => foodNomination._id !== action.payload
        ),
      };
    case APPROVE_FOOD_NOMINATION:
      return {
        ...state,
        foodNominations: state.foodNominations.map((foodNomination) =>
          foodNomination._id === action.payload._id
            ? action.payload
            : foodNomination
        ),
      };
    case DECLINE_FOOD_NOMINATION:
      return {
        ...state,
        foodNominations: state.foodNominations.map((foodNomination) =>
          foodNomination._id === action.payload._id
            ? action.payload
            : foodNomination
        ),
      };
    default:
      return state;
  }
};

export default foodNominationsReducer;
