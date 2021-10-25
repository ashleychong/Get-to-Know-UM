import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_FOOD,
  FETCH_FOOD,
  CREATE_FOOD,
  UPDATE_FOOD,
  DELETE_FOOD,
  VOTE_FOOD,
} from "../constants/foodActionTypes";

const foodReducer = (
  state = { isLoading: false, foodList: [] },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL_FOOD:
      return { ...state, foodList: action.payload };
    case FETCH_FOOD:
      return { ...state, food: action.payload };
    case CREATE_FOOD:
      return {
        ...state,
        foodList: [...state.foodList, action.payload],
          };
      case UPDATE_FOOD:
          return {
              ...state,
              foodList: state.foodList.map((food) => food._id === action.payload._id ? action.payload : food),
          };
    case DELETE_FOOD:
      return {
        ...state,
        foodList: state.foodList.filter(
          (food) => food._id !== action.payload
        ),
      };
    case VOTE_FOOD:
      return {
        ...state,
        foodList: state.foodList.map((food) =>
          food._id === action.payload._id ? action.payload : food
        ),
      };
    default:
      return state;
  }
};

export default foodReducer;
