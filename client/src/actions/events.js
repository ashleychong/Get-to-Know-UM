import * as api from "../api/events";
import {
  FETCH_EVENTS,
  FETCH_BY_SEARCH_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENT,
  FETCH_EVENT_TABLE,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

//Action Creators are function that return an action
//action is an obj that hv type and payload
//redux thunk to deal with async
export const getEvents = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchEvents(page);
    console.log(data);
    dispatch({ type: FETCH_EVENTS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.response);
  }
};

export const getEventTable = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEventTable();
    console.log(data);
    dispatch({ type: FETCH_EVENT_TABLE, payload: data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchEvent(id);
    dispatch({ type: FETCH_EVENT, payload: { event: data } });
  } catch (error) {
    console.log(error.message);
  }
};

export const getEventsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchEventsBySearch(searchQuery);
    console.log(data);
    dispatch({ type: FETCH_BY_SEARCH_EVENT, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const createEvent = (event) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createEvents(event);
    dispatch({ type: CREATE_EVENT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateEvent = (id, event) => async (dispatch) => {
  try {
    const { data } = await api.updateEvent(id, event);
    dispatch({ type: UPDATE_EVENT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    await api.deleteEvent(id);
    dispatch({ type: DELETE_EVENT, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
