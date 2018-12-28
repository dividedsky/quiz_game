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

if (localStorage.getItem('username')) {
  initialUserState.user.username = localStorage.getItem('username');
  initialUserState.isLoggedIn = true;
}

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case REGISTERING:
      //console.log('registering');
      return {...state, isRegistering: true};
    case REGISTER_SUCCESS:
      console.log('register success', action.payload);
      return {
        ...state,
        isRegistering: false,
        isLoggedIn: true,
        token: action.payload.data.token,
        user: {
          ...state.user,
          id: action.payload.data.user.id,
          username: action.payload.data.user.username,
        },
      };
    case REGISTER_FAILURE:
      console.log('reg failure', action.payload);
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
