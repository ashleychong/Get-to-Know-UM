import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_EVENT,
  FETCH_BY_SEARCH,
} from "../constants/actionTypes";

//reducer carry out state transition depends on the actions
//takes in 2 parameters: previous state and action
export default (events = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_BY_SEARCH:
      return { events: action.payload.data };
    case FETCH_EVENT:
      return { event: action.payload.event };
    case CREATE:
      return [...events, action.payload];
    case UPDATE:
      return events.map((event) =>
        event._id === action.payload._id ? action.payload : event
      );
    case DELETE:
      return events.filter((event) => event._id !== action.payload);
    default:
      return events;
  }
};
