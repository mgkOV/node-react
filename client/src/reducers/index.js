import { combineReducers } from 'redux';
import auth from './authReducers';
import { BrowserRouter, Route } from 'react-route-dom';

export default combineReducers({
  auth
});
