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
export const updatePassword = (userId, formData) =>
  api.patch(`/user/updatePassword/${userId}`, formData);

export const fetchTopics = () => api.get("/topics");
export const fetchTopic = (id) => api.get(`/topics/${id}`);
export const createTopic = (newTopic) => api.post("/topics", newTopic);
export const updateTopic = (id, updatedTopic) =>
  api.patch(`/topics/${id}`, updatedTopic);
export const deleteTopic = (id) => api.delete(`/topics/${id}`);
export const fetchPosts = (topicId) => api.get(`/topics/topic/${topicId}`);
export const createPost = (topicId, newPost) =>
  api.post(`/topics/topic/${topicId}`, newPost);
export const updatePost = (topicId, postId, updatedPost) =>
  api.patch(`/topics/topic/${topicId}/post/${postId}`, updatedPost);
export const deletePost = (topicId, postId) =>
  api.delete(`/topics/topic/${topicId}/post/${postId}`);

export const fetchCourses = () => api.get("/courses");
export const fetchCourse = (id) => api.get(`/courses/${id}`);
export const createCourse = (newCourse) => api.post("/courses", newCourse);
export const updateCourse = (id, updatedCourse) =>
  api.patch(`/courses/${id}`, updatedCourse);
export const deleteCourse = (id) => api.delete(`/courses/${id}`);

export const fetchFoodNominations = () => api.get("/foodNominations");
export const fetchFoodNomination = (id) => api.get(`/foodNominations/${id}`);
export const createFoodNomination = (newFoodNomination) =>
  api.post("/foodNominations", newFoodNomination);
export const deleteFoodNomination = (id) =>
  api.delete(`/foodNominations/${id}`);

export const fetchAllFood = () => api.get("/food");
export const fetchFood = (id) => api.get(`/food/${id}`);
export const createFood = (newFood) => api.post("/food", newFood);
export const updateFood = (id, updatedFood) =>
  api.patch(`/food/${id}`, updatedFood);
export const deleteFood = (id) => api.delete(`/food/${id}`);
export const voteFood = (id) => api.patch(`/food/${id}/voteFood`);
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
export const updatePassword = (userId, formData) =>
  api.patch(`/user/updatePassword/${userId}`, formData);

export const fetchTopics = () => api.get("/topics");
export const fetchTopic = (id) => api.get(`/topics/${id}`);
export const createTopic = (newTopic) => api.post("/topics", newTopic);
export const updateTopic = (id, updatedTopic) =>
  api.patch(`/topics/${id}`, updatedTopic);
export const deleteTopic = (id) => api.delete(`/topics/${id}`);
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
export const fetchFoodNomination = (id) => api.get(`/foodNominations/${id}`);
export const createFoodNomination = (newFoodNomination) =>
  api.post("/foodNominations", newFoodNomination);
export const deleteFoodNomination = (id) =>
  api.delete(`/foodNominations/${id}`);
export const approveFoodNomimation = (id) =>
  api.patch(`/foodNomimation/${id}/approve`);
export const declineFoodNomimation = (id) =>
  api.patch(`/foodNomimation/${id}/decline`);

export const fetchAllFood = () => api.get("/food");
export const fetchFood = (id) => api.get(`/food/${id}`);
export const createFood = (newFood) => api.post("/food", newFood);
export const updateFood = (id, updatedFood) =>
  api.patch(`/food/${id}`, updatedFood);
export const deleteFood = (id) => api.delete(`/food/${id}`);

export const voteFood = (id) => api.patch(`/food/${id}/voteFood`);

export const fetchAllCafes = () => api.get("/cafe");
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

export default api;
export const fetchGpa = () => api.get("/gpa");
