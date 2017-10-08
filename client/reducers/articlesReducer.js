export function articleFetchError(state = false, action) {
  switch (action.type) {
    case 'ARTICLE_FETCH_ERROR':
      return action.hasErrored;
    default:
      return state;
  }
}

export function articleFetchLoading(state = false, action) {
  switch (action.type) {
    case 'ARTICLE_FETCH_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function articles(state = [], action) {
  switch (action.type) {
    case 'ARTICLE_FETCH_SUCCESS':
      return action.articles;
    default:
      return state;
  }
}
