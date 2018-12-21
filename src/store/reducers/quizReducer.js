import {
  FETCHING,
  FETCH_QUIZZES_SUCCESS,
  FETCH_QUIZZES_FAILURE,
  FETCHING_QUIZ,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
  FETCHING_QUESTIONS,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  FETCHING_TOPICS,
  FETCHING_TOPICS_SUCCESS,
  FILTER_QUIZZES,
} from '../actions';

const initialQuizState = {
  isFetching: false,
  quizzes: [],
  currentQuiz: null,
  currentQuestions: null,
  fetchingComplete: false,
  error: null,
  topics: null,
  currentTopic: null,
  filteredQuizzes: null,
};

export const quizReducer = (state = initialQuizState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true,
        fetchingComplete: false,
      };
    case FETCH_QUIZZES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchingComplete: true,
        quizzes: action.payload,
      };
    case FETCH_QUIZZES_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchingComplete: true,
        error: action.payload,
      };
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchingComplete: true,
        currentQuiz: action.payload,
      };
    case FETCH_QUIZ_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchingComplete: true,
        error: action.payload,
      };
    case FETCH_QUESTIONS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        fetchingComplete: true,
        currentQuestions: action.payload,
      };
    }
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchingComplete: true,
        error: action.payload,
      };
    case FETCHING_TOPICS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        fetchingComplete: true,
        topics: action.payload,
      };
    }
    case FILTER_QUIZZES: {
      const topic = action.payload;
      return {
        ...state,
        currentTopic: topic,
        filteredQuizzes: state.quizzes.filter(q => q.topic === topic),
      };
    }
    default:
      return state;
  }
};
