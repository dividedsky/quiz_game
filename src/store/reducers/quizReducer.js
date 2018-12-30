import {
  FETCHING_QUIZZES,
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
  CLEAR_QUIZ_FILTER,
  ADDING_QUIZ,
  ADD_QUIZ_SUCCESS,
  ADD_QUIZ_FAILURE,
  EDIT_MODE_ON,
  EDIT_MODE_OFF,
  EDITING_QUIZ,
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
  filteredQuizzes: [],
  filterActive: false,
  addingQuiz: false,
  editMode: false,
  isEditing: false,
};

export const quizReducer = (state = initialQuizState, action) => {
  switch (action.type) {
    case FETCHING_QUIZZES:
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
    case FETCHING_QUIZ:
      return {
        ...state,
        isFetching: true,
        fetchingComplete: false,
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
    case FETCHING_QUESTIONS:
      return {
        ...state,
        isFetching: true,
        fetchingComplete: false,
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
    case FETCHING_TOPICS:
      return {
        ...state,
        isFetching: true,
        fetchingComplete: false,
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
        filterActive: true,
      };
    }
    case CLEAR_QUIZ_FILTER: {
      return {
        ...state,
        filteredQuizzes: [], //not necessary with flag?
        filterActive: false,
      };
    }
    case ADDING_QUIZ: {
      return {
        ...state,
        addingQuiz: true,
      };
    }
    case ADD_QUIZ_SUCCESS: {
      return {
        ...state,
        addingQuiz: false,
      };
    }
    case ADD_QUIZ_FAILURE: {
      return {
        ...state,
        addingQuiz: false,
        error: action.payload,
      };
    }
    case EDIT_MODE_ON: {
      return {
        ...state,
        editMode: true,
      };
    }
    case EDIT_MODE_OFF: {
      return {
        ...state,
        editMode: false,
      };
    }
    case EDITING_QUIZ: {
      return {
        ...state,
        isEditing: true,
      };
    }
    default:
      return state;
  }
};
