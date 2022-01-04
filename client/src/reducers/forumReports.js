import {
  START_LOADING,
  END_LOADING,
  FETCH_PENDING_FORUM_REPORTS,
  FETCH_REVIEWED_FORUM_REPORTS,
  SUBMIT_FORUM_CONTENT_REPORT,
  REMOVE_REPORTED_CONTENT,
  IGNORE_REPORTED_CONTENT,
  DELETE_FORUM_REPORT,
  ADD_REVIEWED_FORUM_REPORT,
} from "../constants/forumReportActionTypes";

const forumReportsReducer = (
  state = { isLoading: false, pendingReports: [], reviewedReports: [] },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_PENDING_FORUM_REPORTS:
      return { ...state, pendingReports: action.payload };
    case FETCH_REVIEWED_FORUM_REPORTS:
      return { ...state, reviewedReports: action.payload };
    case SUBMIT_FORUM_CONTENT_REPORT:
      return {
        ...state,
        pendingReports: [...state.pendingReports, action.payload],
      };
    case REMOVE_REPORTED_CONTENT:
    case IGNORE_REPORTED_CONTENT:
      return {
        ...state,
        pendingReports: state.pendingReports.filter(
          (report) => report._id !== action.payload._id
        ),
      };
    case ADD_REVIEWED_FORUM_REPORT:
      return {
        ...state,
        reviewedReports: [...state.reviewedReports, action.payload]
      };
    case DELETE_FORUM_REPORT:
      return {
        ...state,
        reviewedReports: state.reviewedReports.filter(
          (report) => report._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default forumReportsReducer;