import { combineReducers } from 'redux';
import { articles, articleFetchLoading, articleFetchError } from './articlesReducer';
import { topics, topicFetchLoading, topicFetchError } from './topicsReducer';
import subs from './subsReducer';

const rootReducer = combineReducers({
  articles,
  articleFetchLoading,
  articleFetchError,
  topics,
  topicFetchLoading,
  topicFetchError,
  subs,
});

export default rootReducer;
