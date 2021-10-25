import * as api from "../api/clubs";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

//Action Creators are function that return an action
//action is an obj that hv type and payload
//redux thunk to deal with async
export const getClubs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchClubs();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createClub = (club) => async (dispatch) => {
  try {
    const { data } = await api.createClubs(club);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateClub = (id, club) => async (dispatch) => {
  try {
    const { data } = await api.updateClub(id, club);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteClub = (id) => async (dispatch) => {
  try {
    await api.deleteClub(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
