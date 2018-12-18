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
    default:
      return state;
  }
};
