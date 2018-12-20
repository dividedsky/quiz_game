import {
  FETCHING,
  FETCH_QUIZZES_SUCCESS,
  FETCH_QUIZZES_FAILURE,
} from '../actions';

const initialQuizState = {
  isFetching: false,
  quizzes: [],
  currentQuiz: null,
  fetchingComplete: false,
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
    default:
      return state;
  }
};
