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
} from '../actions';

const initialQuizState = {
  isFetching: false,
  quizzes: [],
  currentQuiz: null,
  currentQuestions: null,
  fetchingComplete: false,
  error: null,
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
    default:
      return state;
  }
};
