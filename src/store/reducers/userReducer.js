import {
  REGISTERING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGGING_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
} from '../actions';

const initialUserState = {
  user: {
    username: 'Towels',
    password: '',
    email: '',
    imageUrl: '',
    id: null,
  },
  token: null,
  isRegistering: false,
  isLoggingIn: false,
  isLoggedIn: true, // just so i don't have to keep logging in
  error: null,
};

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
    default:
      return state;
  }
};
