import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Topic from '../components/Topic.jsx';
import './../styles/Topics.scss';
// import { addSubscription, toggleSubscription } from '../actions/subs.js';

const TopicsContainer = (props) => {
  console.log(props.topics);
  if (props.hasErrored) {
    return (
      <div className="topics-container">
        <p>Sorry! There was an error loading the topics.</p>
      </div>
    );
  }
  if (props.isLoading) {
    return (
      <div className="topics-container">
        <p>Loading…</p>;
      </div>
    );
  }

  const topics = props.topics;
  const topicsArr = [];

  for (let i = 0; i < topics.length; i += 1) {
    topicsArr.push(
      <Topic
        key={i}
        id={topics[i].id}
        name={topics[i].name}
        description={topics[i].description}
      />,
    );
  }
  return (
    <div className="topics-container">
      <div className="topics-list-container">
        <div className="topics-list">
          {topicsArr}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    subscriptions: state.subscriptions,
    topics: state.topics,
    hasErrored: state.topicFetchError,
    isLoading: state.topicFetchLoading,
  };
};

// const mapDispatchToProps = {
//   onClick: toggleSubscription,
// };

TopicsContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

// export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);
export default connect(mapStateToProps)(TopicsContainer);
