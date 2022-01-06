import api from "./index.js"

export const fetchCourses = () => api.get("/courses/admin");
export const fetchCoursesByPage = (page) => api.get(`/courses?page=${page}`);
export const fetchCoursesBySearch = (searchQuery) =>
  api.get(`/courses/search?searchQuery=${searchQuery.search || "none"}&faculty=${searchQuery.faculty || "none"}`);
export const fetchCourse = (id) => api.get(`/courses/${id}`);
export const createCourse = (newCourse) => api.post("/courses", newCourse);
export const updateCourse = (id, updatedCourse) =>
  api.patch(`/courses/${id}`, updatedCourse);
export const deleteCourse = (id) => api.delete(`/courses/${id}`);

export const fetchCourseReviews = (courseId) => api.get(`/courseReviews/${courseId}`);
export const createCourseReview = (courseId, newReview) =>
  api.post(`/courseReviews/${courseId}`, newReview);
export const updateCourseReview = (courseId, reviewId, updatedReview) =>
  api.patch(`/courseReviews/${courseId}/review/${reviewId}`, updatedReview);
export const deleteCourseReview = (courseId, reviewId) =>
  api.delete(`/courseReviews/${courseId}/review/${reviewId}`);
