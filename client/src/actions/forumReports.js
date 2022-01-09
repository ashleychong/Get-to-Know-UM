import * as api from "../api/forumReports.js";
import {
  START_LOADING,
  END_LOADING,
  FETCH_PENDING_FORUM_REPORTS,
  FETCH_REVIEWED_FORUM_REPORTS,
  SUBMIT_FORUM_CONTENT_REPORT,
  REMOVE_REPORTED_CONTENT,
  IGNORE_REPORTED_CONTENT,
  DELETE_FORUM_REPORT,
} from "../constants/forumReportActionTypes";
import {
  UPDATE_POST,
  DELETE_POST,
  UPDATE_TOPIC,
  DELETE_TOPIC,
  UPDATE_TOPIC_REPORTER_LIST,
  UPDATE_POST_REPORTER_LIST,
} from "../constants/actionTypes.js";
import { ADMIN_END_LOADING } from "../constants/actionTypes";

export const getPendingForumReports = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPendingForumReports();

    dispatch({ type: FETCH_PENDING_FORUM_REPORTS, payload: data });

    dispatch({ type: END_LOADING });
    dispatch({ type: ADMIN_END_LOADING });

  } catch (error) {
    console.log(error);
  }
};

export const getReviewedForumReports = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchReviewedForumReports();

    dispatch({ type: FETCH_REVIEWED_FORUM_REPORTS, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const submitForumContentReport = (reportedContentId, newReport) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    // console.log(reportedContentId)
    // console.log(newReport);
    const {
      data: { newForumReport, updatedContent },
    } = await api.submitForumContentReport(reportedContentId, newReport);

    // console.log("submitForumContentReport actions");
    // console.log(newForumReport);
    // console.log(updatedContent);


    dispatch({ type: SUBMIT_FORUM_CONTENT_REPORT, payload: newForumReport });

    if (newReport?.contentType === "post") {
      // console.log(updatedContent);

      dispatch({
        type: UPDATE_POST_REPORTER_LIST,
        payload: {
          topicId: updatedContent?.topicId,
          postId: updatedContent?._id,
          data: updatedContent?.reporterList,
        },
      });
    }
    else if (newReport?.contentType === "topic") {
      dispatch({
        type: UPDATE_TOPIC_REPORTER_LIST,
        payload: {
          topicId: updatedContent?._id,
          data: updatedContent?.reporterList
        },
      });
    }

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const removeReportedPost = (id, postId, report) => async (dispatch) => {
  try {
    const {
      data: { reviewedForumReport, topicId },
    } = await api.removeReportedPost(id, report);

    // console.log("forum report");
    // console.log(reviewedForumReport);
    // console.log("topic Id");
    // console.log(topicId);


    dispatch({ type: REMOVE_REPORTED_CONTENT, payload: reviewedForumReport });
    // dispatch({ type: DELETE_POST, payload: { topicId, postId } });

  } catch (error) {
    console.log(error);
  }
};

export const removeReportedTopic = (id, topicId, updatedReport) => async (dispatch) => {
    try {
      const { data } = await api.removeReportedTopic(id, updatedReport);
      dispatch({ type: REMOVE_REPORTED_CONTENT, payload: data });
      // dispatch({ type: DELETE_TOPIC, payload: topicId });

    } catch (error) {
      console.log(error);
    }
  };

export const ignoreReportedContent = (id) => async (dispatch) => {
  try {
    const {
      data: { reviewedForumReport, updatedContent },
    } = await api.ignoreReportedContent(id);
    
    dispatch({ type: IGNORE_REPORTED_CONTENT, payload: reviewedForumReport });

  } catch (error) {
    console.log(error);
  }
};

export const deleteForumReport = (id) => async (dispatch) => {
  try {
    await api.deleteForumReport(id);
    dispatch({ type: DELETE_FORUM_REPORT, payload: id });
  } catch (error) {
    console.log(error);
  }
};