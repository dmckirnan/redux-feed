import React from 'react';
import PropTypes from 'prop-types';

import Topic from '../components/Topic.jsx';
import './../styles/Topics.scss';


const TopicsContainer = (props) => {
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
    const following = props.subs.indexOf(topics[i].id) === -1;
    topicsArr.push(
      <Topic
        key={i}
        id={topics[i].id}
        name={topics[i].name}
        description={topics[i].description}
        following={following}
        addSub={() => props.onClickAdd(topics[i].id)}
        removeSub={() => props.onClickRemove(topics[i].id)}
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
  subs: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
  onClickAdd: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

export default TopicsContainer;
