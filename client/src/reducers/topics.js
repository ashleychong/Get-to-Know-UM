import { FETCH_TOPICS, FETCH_TOPIC, CREATE_TOPIC, UPDATE_TOPIC, DELETE_TOPIC, FETCH_POSTS , CREATE_POST, UPDATE_POST, DELETE_POST , START_LOADING, END_LOADING } from "./../constants/actionTypes";

const topicsReducer = (state = { isLoading: false, topics: [], posts:{} }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_TOPICS:
            return {
                ...state, topics: action.payload
            };
        case FETCH_TOPIC:
            return { ...state, topic: action.payload.topic }
        case CREATE_TOPIC:
            return { ...state, topics: [...state.topics, action.payload] };
        case UPDATE_TOPIC:
            return { ...state, topics: state.topics.map((topic) => (topic._id === action.payload._id ? action.payload : topic)) };
        case DELETE_TOPIC:
            return { ...state, topics: state.topics.filter((topic) => (topic._id !== action.payload)) };
        case FETCH_POSTS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload.topicId]: action.payload.data
                }
            };
        case CREATE_POST:
            return {
              ...state,
              posts: {
                ...state.posts,
                [action.payload.topicId]: [
                    ...state.posts[action.payload.topicId],
                    action.payload.data
                ],
              },
            };
        case UPDATE_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload.topicId]: state.posts[action.payload.topicId].map((post) => (post._id === action.payload.postId ? action.payload.data : post))
                }
            };
        case DELETE_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload.topicId]: state.posts[action.payload.topicId].filter((post) => (post._id !== action.payload.postId))
                }
            };
        default:
            return state;
    }
};

export default topicsReducer;