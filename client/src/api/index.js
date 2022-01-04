import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

api.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => api.post("/user/signin", formData);
export const signUp = (formData) => api.post("/user/signup", formData);
export const updateProfile = (userId, formData) =>
  api.patch(`/user/updateProfile/${userId}`, formData);
export const updateProfileImage = (userId, formData) =>
  api.patch(`/user/updateProfileImage/${userId}`, formData);
export const updatePassword = (userId, formData) =>
  api.patch(`/user/updatePassword/${userId}`, formData);
export const requestResetPassword = (formData) =>
  api.post("/user/requestResetPassword", formData);
export const verifyResetPasswordToken = (formData) =>
  api.post("/user/verifyResetPasswordToken", formData);
export const resetPassword = (formData) => api.patch("/user/resetPassword", formData);

export const fetchTopics = (page) => api.get(`/topics?page=${page}`);
export const fetchTopic = (id) => api.get(`/topics/${id}`);
export const fetchTopicsBySearch = (searchQuery) =>
  api.get(`/topics/search?searchQuery=${searchQuery.search || "none"}&tags=${searchQuery.tags}`);
export const createTopic = (newTopic) => api.post("/topics", newTopic);
export const updateTopic = (id, updatedTopic) =>
  api.patch(`/topics/${id}`, updatedTopic);
export const deleteTopic = (id) => api.delete(`/topics/${id}`);
export const fetchTopicTags = () => api.get("/topics/tags");

export const fetchPosts = (topicId) => api.get(`/topics/topic/${topicId}`);
export const createPost = (topicId, newPost) =>
  api.post(`/topics/topic/${topicId}`, newPost);
export const updatePost = (topicId, postId, updatedPost) =>
  api.patch(`/topics/topic/${topicId}/post/${postId}`, updatedPost);
export const deletePost = (topicId, postId) =>
  api.delete(`/topics/topic/${topicId}/post/${postId}`);

// export const fetchCourses = () => api.get("/courses");
// export const fetchCourse = (id) => api.get(`/courses/${id}`);
// export const createCourse = (newCourse) => api.post("/courses", newCourse);
// export const updateCourse = (id, updatedCourse) => api.patch(`/courses/${id}`, updatedCourse);
// export const deleteCourse = (id) => api.delete(`/courses/${id}`);

export const fetchFoodNominations = () => api.get("/foodNominations");
export const fetchApprovedFoodNominations = (page) =>
  api.get(`/foodNominations/approved?page=${page}`);
export const fetchFoodNomination = (id) => api.get(`/foodNominations/${id}`);
export const createFoodNomination = (newFoodNomination) =>
  api.post("/foodNominations", newFoodNomination);
export const updateFoodNomination = (id, updatedFoodNomination) =>
  api.patch(`/foodNominations/${id}`, updatedFoodNomination);
export const deleteFoodNomination = (id) =>
  api.delete(`/foodNominations/${id}`);
export const approveFoodNomimation = (id) =>
  api.patch(`/foodNominations/${id}/approve`);
export const declineFoodNomimation = (id) =>
  api.patch(`/foodNominations/${id}/decline`);
export const voteFoodNomimation = (id) => api.patch(`/foodNominations/${id}/voteFood`);

export const fetchAllFood = () => api.get("/food");
export const fetchFood = (id) => api.get(`/food/${id}`);
export const createFood = (newFood) => api.post("/food", newFood);
export const updateFood = (id, updatedFood) =>
  api.patch(`/food/${id}`, updatedFood);
export const deleteFood = (id) => api.delete(`/food/${id}`);
export const voteFood = (id) => api.patch(`/food/${id}/voteFood`);


export const fetchAllCafes = () => api.get("/cafe/admin");
export const fetchAllCafesByPages = (page) => api.get(`/cafe?page=${page}`);
export const fetchCafe = (id) => api.get(`/cafe/${id}`);
export const createCafe = (newCafe) => api.post("/cafe", newCafe);
export const updateCafe = (id, updatedCafe) =>
  api.patch(`/cafe/${id}`, updatedCafe);
export const deleteCafe = (id) => api.delete(`/cafe/${id}`);

export const fetchCafeReviews = (cafeId) => api.get(`/cafeReviews/${cafeId}`);
export const createCafeReview = (cafeId, newReview) =>
  api.post(`/cafeReviews/${cafeId}`, newReview);
export const updateCafeReview = (cafeId, reviewId, updatedReview) =>
  api.patch(`/cafeReviews/${cafeId}/review/${reviewId}`, updatedReview);
export const deleteCafeReview = (cafeId, reviewId) =>
  api.delete(`/cafeReviews/${cafeId}/review/${reviewId}`);

export const fetchClubReviews = (clubId) => api.get(`/clubReviews/${clubId}`);
export const createClubReview = (clubId, newReview) =>
  api.post(`/clubReviews/${clubId}`, newReview);
export const updateClubReview = (clubId, reviewId, updatedReview) =>
  api.patch(`/clubReviews/${clubId}/review/${reviewId}`, updatedReview);
export const deleteClubReview = (clubId, reviewId) =>
  api.delete(`/clubReviews/${clubId}/review/${reviewId}`);

export const fetchGpa = () => api.get("/gpa");

export default api;
