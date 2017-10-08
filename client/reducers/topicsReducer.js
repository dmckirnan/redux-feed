export function topicFetchError(state = false, action) {
  switch (action.type) {
    case 'TOPIC_FETCH_ERROR':
      return action.hasErrored;
    default:
      return state;
  }
}

export function topicFetchLoading(state = false, action) {
  switch (action.type) {
    case 'TOPIC_FETCH_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function topics(state = [], action) {
  switch (action.type) {
    case 'TOPIC_FETCH_SUCCESS':
      return action.topics;
    default:
      return state;
  }
}
