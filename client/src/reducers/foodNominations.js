import {
    START_LOADING, END_LOADING, FETCH_FOOD_NOMINATIONS, FETCH_FOOD_NOMINATION, CREATE_FOOD_NOMINATION, DELETE_FOOD_NOMINATION
} from "../constants/foodNominationActionTypes";
 

const foodNominationsReducer = (state = { isLoading: false, foodNominations: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_FOOD_NOMINATIONS:
      return { ...state, foodNominations: action.payload };
    case FETCH_FOOD_NOMINATION:
      return { ...state, foodNomination: action.payload };
    case CREATE_FOOD_NOMINATION:
      return {
        ...state,
        foodNominations: [...state.foodNominations, action.payload],
      };
    case DELETE_FOOD_NOMINATION:
      return {
        ...state,
        foodNominations: state.foodNominations.filter(
          (foodNomination) => foodNomination._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default foodNominationsReducer;