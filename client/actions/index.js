import fetch from 'isomorphic-fetch';

export function fetchError(bool) {
  return {
    type: 'FETCH_ERROR',
    hasErrored: bool,
  };
}

export function fetchLoading(bool) {
  return {
    type: 'FETCH_LOADING',
    isLoading: bool,
  };
}

export function fetchSuccess(articles) {
  return {
    type: 'FETCH_SUCCESS',
    articles,
  };
}

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://medcircle-coding-project.s3.amazonaws.com/api/articles.json';

export function fetchArticles() {
  return (dispatch) => {
    dispatch(fetchLoading(true));
    fetch(proxyUrl + url, { method: 'GET', headers: { Accept: 'application/json', 'Content-Type': 'application/json' } })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(fetchLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((articles) => dispatch(fetchSuccess(articles.data)))
      .catch(() => dispatch(fetchError(true)));
  };
}
