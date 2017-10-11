import { connect } from 'react-redux';
import TopicsContainer from '../components/TopicsContainer.jsx';
import { addSub, removeSub } from '../actions/subs';

const mapStateToProps = (state) => {
  return {
    subs: state.subs,
    topics: state.topics,
    hasErrored: state.topicFetchError,
    isLoading: state.topicFetchLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (id) => {
      dispatch(addSub(id));
    },
    onClickRemove: (id) => {
      dispatch(removeSub(id));
    },
  };
};

const TopicsFeed = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopicsContainer);

export default TopicsFeed;
