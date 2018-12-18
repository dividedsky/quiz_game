import {REGISTERING, REGISTER_SUCCESS, REGISTER_FAILURE} from '../actions';
const initialState = {
  user: {
    username: '',
    password: '',
    email: '',
    imageUrl: '',
    id: null,
  },
  token: null,
  isFetching: false,
  isRegistering: false,
  isLoggingIn: false,
  isLoggedIn: false,
};

export default (state = initialState, action) => {
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
        error: action.payload.data.message,
      };
    default:
      return state;
  }
};
