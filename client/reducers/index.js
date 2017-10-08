import { combineReducers } from 'redux';
import { articles, fetchLoading, fetchError } from './fetchReducer';

const rootReducer = combineReducers({
  articles,
  fetchLoading,
  fetchError,
});

export default rootReducer;
