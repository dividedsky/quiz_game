import axios from 'axios';

export const REGISTERING = 'REGISTERING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

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
