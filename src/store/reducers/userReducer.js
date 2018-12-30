import {
  REGISTERING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGGING_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOGGING_OUT,
} from '../actions';

const initialUserState = {
  user: {
    username: '',
    password: '',
    email: '',
    imageUrl: '',
    id: null,
  },
  token: null,
  isRegistering: false,
  isLoggingIn: false,
  isLoggedIn: false, // just so i don't have to keep logging in
  error: null,
};

// check localStorage for user data

if (localStorage.getItem('quiz_token')) {
  initialUserState.token = localStorage.getItem('quiz_token');
}

if (localStorage.getItem('id')) {
  initialUserState.user.id = JSON.parse(localStorage.getItem('id'));
}

if (localStorage.getItem('isLoggedIn')) {
  initialUserState.isLoggedIn = true;
}

if (localStorage.getItem('username')) {
  initialUserState.user.username = localStorage.getItem('username');
}

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case REGISTERING:
      return {...state, isRegistering: true};
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        isLoggedIn: true,
        token: action.payload.data.token, // I don't think we need this anymore since token is in localstorage
        user: {
          ...state.user,
          id: action.payload.data.user.id,
          username: action.payload.data.user.username,
        },
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.payload,
      };
    case LOGGING_IN:
      return {
        ...state,
        isLoggingIn: true,
      };
    case LOG_IN_SUCCESS:
      // set the token in local storage for auth use
      localStorage.setItem('quiz_token', action.payload.data.token);
      // also set the username, email, and logged in status
      localStorage.setItem('username', action.payload.data.user.username);
      localStorage.setItem('id', action.payload.data.user.id);
      localStorage.setItem('isLoggedIn', true);

      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        token: action.payload.data.token,
        user: {
          ...state.user,
          id: action.payload.data.user.id,
          username: action.payload.data.user.username,
          img_url: action.payload.data.user.img_url,
        },
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload,
      };
    case LOGGING_OUT:
      localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        user: {
          ...state.user,
          username: '',
          id: '',
          password: '',
          imageUrl: '',
          email: '',
        },
      };
    default:
      return state;
  }
};
