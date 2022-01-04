import {
  FETCH_TOPICS,
  FETCH_TOPIC,
  FETCH_TOPIC_TAGS,
  UPDATE_TOPIC_TAGS,
  FETCH_TOPICS_BY_SEARCH,
  CREATE_TOPIC,
  UPDATE_TOPIC,
  UPDATE_TOPIC_REPORTER_LIST,
  DELETE_TOPIC,
  FETCH_POSTS,
  CREATE_POST,
  UPDATE_POST,
  UPDATE_POST_REPORTER_LIST,
  DELETE_POST,
  START_LOADING,
  END_LOADING,
} from "./../constants/actionTypes";

const topicsReducer = (
  state = { isLoading: false, topics: [], posts: {}, tags: [] },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_TOPICS:
      return {
        ...state,
        topics: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_TOPIC_TAGS:
      return { ...state, tags: action.payload };
    case UPDATE_TOPIC_TAGS:
      const tagsUnion = [...state.tags, ...action.payload];
      const filteredTags = tagsUnion.filter(
        (item, index) =>
          [...state.tags, ...action.payload].indexOf(item) === index
      ).sort();
      return {...state, tags: filteredTags};
    case FETCH_TOPICS_BY_SEARCH:
      return { ...state, topics: action.payload.data };
    case FETCH_TOPIC:
      return { ...state, topic: action.payload.topic };
    case CREATE_TOPIC:
      return { ...state, topics: [action.payload, ...state.topics] };
    case UPDATE_TOPIC:
      return {
        ...state,
        topics: state.topics.map((topic) =>
          topic._id === action.payload._id ? action.payload : topic
        ),
      };
    case UPDATE_TOPIC_REPORTER_LIST:
      return {
        ...state,
        topic: { ...state.topic, reporterList: action.payload.data },
      };
    case DELETE_TOPIC:
      return {
        ...state,
        topics: state.topics.filter((topic) => topic._id !== action.payload),
      };
    case FETCH_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.topicId]: action.payload.data,
        },
      };
    case CREATE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.topicId]: [
            ...state.posts[action.payload.topicId],
            action.payload.data,
          ],
        },
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.topicId]: state.posts[action.payload.topicId].map(
            (post) =>
              post._id === action.payload.postId ? { ...post, message: action.payload.data } : post
          ),
        },
      };
    case UPDATE_POST_REPORTER_LIST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.topicId]: state.posts[action.payload.topicId].map(
            (post) =>
              post._id === action.payload.postId
                ? { ...post, reporterList: action.payload.data }
                : post
          ),
        },
      };
    case DELETE_POST:
      console.log(state.posts);
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.topicId]: state.posts[action.payload.topicId].filter(
            (post) => post._id !== action.payload.postId
          ),
        },
      };
    default:
      return state;
  }
};

export default topicsReducer;
