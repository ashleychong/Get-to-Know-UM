import * as api from "../api/clubs";
import {
  FETCH_CLUBS,
  FETCH_BY_SEARCH_CLUB,
  CREATE_CLUB,
  UPDATE_CLUB,
  DELETE_CLUB,
  FETCH_CLUB,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

export const getClubs = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchClubs(page);
    console.log(data);
    dispatch({ type: FETCH_CLUBS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.response);
  }
};

export const getClub = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchClub(id);
    dispatch({ type: FETCH_CLUB, payload: { club: data } });
  } catch (error) {
    console.log(error.message);
  }
};

export const getClubsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchClubsBySearch(searchQuery);
    console.log(data);
    dispatch({ type: FETCH_BY_SEARCH_CLUB, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const createClub = (club) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createClubs(club);
    dispatch({ type: CREATE_CLUB, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateClub = (id, club) => async (dispatch) => {
  try {
    const { data } = await api.updateClub(id, club);
    dispatch({ type: UPDATE_CLUB, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteClub = (id) => async (dispatch) => {
  try {
    await api.deleteClub(id);
    dispatch({ type: DELETE_CLUB, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
