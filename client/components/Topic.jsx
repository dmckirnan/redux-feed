import React from 'react';
import PropTypes from 'prop-types';

import './../styles/Topics.scss';

const Topic = props =>
  (
    <div className="topic">
      <a href="#" className="topic-link">{props.name}</a>
      <button
        type="button"
        className={props.following ? 'following-button' : 'follow-button'}
        onClick={props.following ? props.addSub : props.removeSub}
      >
        {props.following ? 'Following' : 'Follow'}
      </button>
    </div>
  );

Topic.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  following: PropTypes.bool.isRequired,
  removeSub: PropTypes.func,
  addSub: PropTypes.func,
};

export default Topic;
