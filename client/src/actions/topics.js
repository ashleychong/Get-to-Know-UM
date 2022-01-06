import * as api from "../api/index.js";
import {
  START_LOADING,
  END_LOADING,
  FETCH_TOPICS,
  FETCH_TOPIC,
  CREATE_TOPIC,
  UPDATE_TOPIC,
  DELETE_TOPIC,
  FETCH_TOPICS_BY_SEARCH,
  FETCH_TOPIC_TAGS,
  UPDATE_TOPIC_TAGS,
} from "./../constants/actionTypes";

export const getTopics = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchTopics(page);

    dispatch({
      type: FETCH_TOPICS,
      payload: { data, currentPage, numberOfPages },
    });
    dispatch({ type: END_LOADING });
    
  } catch (error) {
    console.log(error);
  }
};

export const getTopicTags = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTopicTags();
    // console.log("get tags action");
    // console.log(data);
    dispatch({ type: FETCH_TOPIC_TAGS, payload: data });

  } catch (error) {
    console.log(error);
  }
};

export const getTopic = (id, router) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchTopic(id);
    dispatch({ type: FETCH_TOPIC, payload: { topic: data } });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
    router.push("/notFound");
  }
};

export const getTopicsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchTopicsBySearch(searchQuery);
    // console.log(data);

    dispatch({ type: FETCH_TOPICS_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createTopic = (topic, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createTopic(topic);
    dispatch({ type: CREATE_TOPIC, payload: data });
    dispatch({ type: UPDATE_TOPIC_TAGS, payload: data?.tags });

    dispatch({ type: END_LOADING });
    // history.push(`/forum/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateTopic = (id, topic) => async (dispatch) => {
  try {
    const { data: {updatedTopic, tagList} } = await api.updateTopic(id, topic);    
    dispatch({ type: UPDATE_TOPIC, payload: updatedTopic });
    dispatch({ type: FETCH_TOPIC_TAGS, payload: tagList });

  } catch (error) {
    console.log(error);
  }
};

export const deleteTopic = (id, router) => async (dispatch) => {
  try {
    const { data: { tags } } = await api.deleteTopic(id);
  
    dispatch({ type: DELETE_TOPIC, payload: id });
    dispatch({ type: FETCH_TOPIC_TAGS, payload: tags });
    
    router.push("/forum");

  } catch (error) {
    console.log(error);
  }
};
