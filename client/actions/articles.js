import fetch from 'isomorphic-fetch';

export function articleFetchError(bool) {
  return {
    type: 'ARTICLE_FETCH_ERROR',
    hasErrored: bool,
  };
}

export function articleFetchLoading(bool) {
  return {
    type: 'ARTICLE_FETCH_LOADING',
    isLoading: bool,
  };
}

export function articleFetchSuccess(articles) {
  return {
    type: 'ARTICLE_FETCH_SUCCESS',
    articles,
  };
}

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://medcircle-coding-project.s3.amazonaws.com/api/articles.json';

export function fetchArticles() {
  return (dispatch) => {
    dispatch(articleFetchLoading(true));
    fetch(proxyUrl + url, { method: 'GET', headers: { Accept: 'application/json', 'Content-Type': 'application/json' } })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(articleFetchLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(articles => dispatch(articleFetchSuccess(articles.data)))
      .catch(() => dispatch(articleFetchError(true)));
  };
}
