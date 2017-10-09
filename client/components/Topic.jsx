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

/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */

Topic.propTypes = {
  id: PropTypes.number.isRequired, // Prop Is Used by Container Component
  name: PropTypes.string.isRequired,
  following: PropTypes.bool.isRequired,
  removeSub: PropTypes.func,
  addSub: PropTypes.func,
};

export default Topic;
