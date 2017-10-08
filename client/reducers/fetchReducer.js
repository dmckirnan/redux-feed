export function fetchError(state = false, action) {
  switch (action.type) {
    case 'FETCH_ERROR':
      return action.hasErrored;
    default:
      return state;
  }
}

export function fetchLoading(state = false, action) {
  switch (action.type) {
    case 'FETCH_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function articles(state = [], action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.articles;
    default:
      return state;
  }
}
