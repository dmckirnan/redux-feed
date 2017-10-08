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

export function fetchArticles(url) {
  return (dispatch) => {
    dispatch(fetchLoading(true));
    fetch(url)
      .then((response) => {
        console.log(response, 'res');
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(fetchLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((articles) => dispatch(fetchSuccess(articles)))
      .catch(() => dispatch(fetchError(true)));
  };
}
