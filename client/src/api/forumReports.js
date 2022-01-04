import api from "./index.js";

export const fetchPendingForumReports = () => api.get("/forumReports/pending");
export const fetchReviewedForumReports = () => api.get("/forumReports/reviewed");
export const submitForumContentReport = (reportedContentId, newReport) =>
  api.post(`/forumReports/${reportedContentId}`, newReport);
export const removeReportedTopic = (id, report) =>
  api.patch(`/forumReports/${id}/removeTopic`, report);
export const removeReportedPost = (id, report) =>
  api.patch(`/forumReports/${id}/removePost`, report);
export const ignoreReportedContent = (id) => api.patch(`/forumReports/${id}/ignore`);
export const deleteForumReport = (id) => api.delete(`/forumReports/${id}`);
