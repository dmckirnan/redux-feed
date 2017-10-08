import { combineReducers } from 'redux';
import { articles, articleFetchLoading, articleFetchError } from './articlesReducer';
import { topics, topicFetchLoading, topicFetchError } from './topicsReducer';

const rootReducer = combineReducers({
  articles,
  articleFetchLoading,
  articleFetchError,
  topics,
  topicFetchLoading,
  topicFetchError,
});

export default rootReducer;
