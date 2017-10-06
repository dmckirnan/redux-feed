import { combineReducers } from 'redux';
import items from './items';

const feedApp = combineReducers({
  items,
});

export default feedApp;
