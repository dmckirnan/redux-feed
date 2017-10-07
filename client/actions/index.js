export const LOAD_DATA = 'LOAD_DATA';

const loadData = () => {
  return dispatch => fetch('https://medcircle-coding-project.s3.amazonaws.com/api/articles.json')
    .then(res => res.json)
    .then(
      data => dispatch({ type: 'LOAD_DATA_SUCCESS', data }),
      err => dispatch({ type: 'LOAD_DATA_FAILURE', err }),
    );
};
