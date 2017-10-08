import fetch from 'isomorphic-fetch';

export function topicFetchError(bool) {
  return {
    type: 'TOPIC_FETCH_ERROR',
    hasErrored: bool,
  };
}

export function topicFetchLoading(bool) {
  return {
    type: 'TOPIC_FETCH_LOADING',
    isLoading: bool,
  };
}

export function topicFetchSuccess(topics) {
  return {
    type: 'TOPIC_FETCH_SUCCESS',
    topics,
  };
}

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://medcircle-coding-project.s3.amazonaws.com/api/topics.json';

export function fetchTopics() {
  return (dispatch) => {
    dispatch(topicFetchLoading(true));
    fetch(proxyUrl + url, { method: 'GET', headers: { Accept: 'application/json', 'Content-Type': 'application/json' } })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(topicFetchLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(topics => dispatch(topicFetchSuccess(topics.data)))
      .catch(() => dispatch(topicFetchError(true)));
  };
}
