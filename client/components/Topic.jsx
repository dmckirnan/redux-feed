import React from 'react';
import PropTypes from 'prop-types';

import './../styles/Topics.scss';

const Topic = (props) => {
  return (
    <div className="topic">
      <a href="#" className="topic-link">{props.name}</a>
      <button type="button" className="follow-button">Follow</button>
    </div>
  );
};

Topic.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Topic;
