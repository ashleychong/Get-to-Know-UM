import * as api from "../api/index.js";
import { START_LOADING, END_LOADING, FETCH_POSTS, CREATE_POST, UPDATE_POST, DELETE_POST } from "../constants/actionTypes";

export const getPosts = (topicId) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchPosts(topicId);

        dispatch({ type: FETCH_POSTS, payload: { topicId, data } });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (topicId, post) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.createPost(topicId, post);
        dispatch({ type: CREATE_POST, payload: { topicId, data } });
        
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (topicId, postId, updatedPost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(topicId, postId, updatedPost);
        dispatch({
          type: UPDATE_POST,
            payload: {
                topicId,
                postId,
                data: data?.message,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = (topicId, postId) => async (dispatch) => {
    try {
        await api.deletePost(topicId, postId);
        dispatch({ type: DELETE_POST, payload: { topicId, postId } });
    } catch (error) {
      console.log(error);
    }
};