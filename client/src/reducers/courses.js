import {
  START_LOADING,
  END_LOADING,
  FETCH_COURSES,
  FETCH_COURSES_BY_PAGE,
  FETCH_COURSES_BY_SEARCH,
  FETCH_COURSE,
  CREATE_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
  FETCH_COURSE_REVIEWS,
  CREATE_COURSE_REVIEW,
  UPDATE_COURSE_REVIEW,
  DELETE_COURSE_REVIEW,
} from "../constants/courseActionTypes";

const coursesReducer = (
  state = { isLoading: false, courses: [], reviews: {} },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_COURSES:
      return { ...state, courses: action.payload };
    case FETCH_COURSES_BY_PAGE:
      return {
        ...state,
        courses: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_COURSES_BY_SEARCH:
      return { ...state, courses: action.payload.data };
    case FETCH_COURSE:
      // to be reviewed
      return { ...state, course: action.payload };
    case CREATE_COURSE:
      return { ...state, courses: [...state.courses, action.payload] };
    case UPDATE_COURSE:
      return {
        ...state,
        courses: state.courses.map((course) =>
          course._id === action.payload._id ? action.payload : course
        ),
      };
    case DELETE_COURSE:
      return {
        ...state,
        courses: state.courses.filter(
          (course) => course._id !== action.payload
        ),
      };
    case FETCH_COURSE_REVIEWS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [action.payload.courseId]: action.payload.data,
        },
      };
    case CREATE_COURSE_REVIEW:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [action.payload.courseId]: [
            ...state.reviews[action.payload.courseId],
            action.payload.data,
          ],
        },
      };
    case UPDATE_COURSE_REVIEW:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [action.payload.courseId]: state.reviews[action.payload.courseId].map(
            (review) =>
              review._id === action.payload.reviewId
                ? action.payload.data
                : review
          ),
        },
      };
    case DELETE_COURSE_REVIEW:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [action.payload.courseId]: state.reviews[
            action.payload.courseId
          ].filter((review) => review._id !== action.payload.reviewId),
        },
      };
    default:
      return state;
  }
};

export default coursesReducer;
