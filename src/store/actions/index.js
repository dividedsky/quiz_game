import axios from 'axios';

export const REGISTERING = 'REGISTERING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGGING_IN = 'LOGGING_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

// change axios config to make things simpler

const ax = axios.create({
  baseURL: 'https://lambda-study-app.herokuapp.com/api/',
});

export const registerUser = user => dispatch => {
  dispatch({type: REGISTERING});
  ax.post('auth/register', user)
    .then(res => {
      console.log('response:', res);
      dispatch({type: REGISTER_SUCCESS, payload: res});
    })
    .catch(err => {
      console.log('error:', err);
      dispatch({type: REGISTER_FAILURE, payload: err});
    });
};

export const logInUser = user => dispatch => {
  dispatch({type: LOGGING_IN});
  ax.post('auth/login', user)
    .then(res => {
      console.log('login res:', res);
      dispatch({type: LOG_IN_SUCCESS, payload: res});
    })
    .catch(err => {
      console.log('login err:', err);
      dispatch({type: LOG_IN_FAILURE, payload: err});
    });
};
