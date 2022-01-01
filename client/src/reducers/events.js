import {
  FETCH_EVENTS,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENT,
  FETCH_BY_SEARCH_EVENT,
  START_LOADING,
  END_LOADING,
  FETCH_EVENT_TABLE,
  FAV,
  FETCH_FAV_EVENTS,
  FETCH_BY_TAG_EVENT,
  FETCH_THIS_MONTH,
  FETCH_BY_DATE_RANGE,
} from "../constants/actionTypes";

//reducer carry out state transition depends on the actions
//takes in 2 parameters: previous state and action
export default (state = { isLoading: true, events: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_EVENTS:
      return {
        ...state,
        events: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_FAV_EVENTS:
      return {
        ...state,
        events: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH_EVENT:
      return { ...state, events: action.payload.data };
    case FETCH_BY_TAG_EVENT:
      return { ...state, events: action.payload.data };
    case FETCH_THIS_MONTH:
      return {
        ...state,
        events: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_DATE_RANGE:
      return {
        ...state,
        events: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_EVENT:
      return { ...state, event: action.payload.event };
    case CREATE_EVENT:
      return { ...state, events: [...state.events, action.payload] };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event._id === action.payload._id ? action.payload : event
        ),
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event._id !== action.payload),
      };
    case FETCH_EVENT_TABLE:
      return {
        ...state,
        events: action.payload,
      };
    case FAV:
      return {
        ...state,
        events: state.events.map((event) =>
          event._id === action.payload._id ? action.payload : event
        ),
      };
    default:
      return state;
  }
};
