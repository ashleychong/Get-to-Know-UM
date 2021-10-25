import { START_LOADING, END_LOADING, FETCH_COURSES, FETCH_COURSE, CREATE_COURSE, UPDATE_COURSE, DELETE_COURSE } from "../constants/courseActionTypes";

const coursesReducer = (state = { isLoading: false, courses: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_COURSES:
            return { ...state, courses: action.payload };
        case FETCH_COURSE:
            // to be reviewed
            return { ...state, course: action.payload };
        case CREATE_COURSE:
            return { ...state, courses: [...state.courses, action.payload] };
        case UPDATE_COURSE:
            return { ...state, courses: state.courses.map((course) => (course._id === action.payload._id ? action.payload : course)) };
        case DELETE_COURSE:
            return { ...state, courses: state.courses.filter((course) => course._id !== action.payload)};
        default:
            return state;
    }
};

export default coursesReducer;