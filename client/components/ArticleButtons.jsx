import React from 'react';
import '../styles/ArticleButtons.scss';

const ArticleButtons = () => (
  <div>
    <span>
      <button type="button" className="icon-white button like-button"><span>Like</span></button>
    </span>
    <span>
      <button type="button" className="icon-white button comment-button"><span>Comment</span></button>
    </span>
    <button type="button" className="icon-white button share-button"><span>Share</span></button>
    <span>
      <button type="button" className="icon-white button save-button"><span>Save</span></button>
    </span>
  </div>
);

export default ArticleButtons;