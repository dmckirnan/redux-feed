import { connect } from 'react-redux';
import ArticlesContainer from '../components/ArticlesContainer.jsx';

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    subs: state.subs,
    hasErrored: state.articleFetchError,
    isLoading: state.articleFetchLoading,
  };
};

const Feed = connect(
  mapStateToProps,
)(ArticlesContainer);

export default Feed;
