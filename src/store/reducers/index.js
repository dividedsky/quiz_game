import {REGISTERING, REGISTER_SUCCESS, REGISTER_FAILURE} from '../actions';
const initialState = {
  user: {
    username: '',
    password: '',
    email: '',
    imageUrl: '',
  },
  isFetching: false,
  isRegistering: false,
  isLoggingIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTERING:
      console.log('registering');
      break;
    case REGISTER_SUCCESS:
      console.log('register success', action.payload);
      break;
    case REGISTER_FAILURE:
      console.log('reg failure', action.payload);
      break;
    default:
      return state;
  }
};
