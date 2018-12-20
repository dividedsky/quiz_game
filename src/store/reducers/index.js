import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {quizReducer} from './quizReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  quiz: quizReducer,
});
