import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Topic from '../components/Topic.jsx';
import './../styles/Topics.scss';

const TopicsContainer = (props) => {
  if (props.hasErrored) {
    return (
      <div className="topics-list-container">
        <p>Sorry! There was an error loading the items</p>
      </div>
    );
  }
  if (props.isLoading) {
    return (
      <div className="topics-list-container">
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
    topics: state.topics,
    hasErrored: state.topicFetchError,
    isLoading: state.topicFetchLoading,
  };
};

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

export default connect(mapStateToProps)(TopicsContainer);
