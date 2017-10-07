import React from 'react';
import Article from './Article.jsx';
import MoreButton from './MoreButton.jsx';

import '../styles/Feed.scss';

const Feed = ({ items, followClick }) => {
  if (items === undefined) {
    return (
      <div className="scroll-container">
        <Article />
        <MoreButton />
      </div>
    );
  }
  return (
    <div className="scroll-container">
    {items.map(item =>
      <Article key={item.id}
        {...item}
        onClick={() => followClick(item.id)}
      />
    )}
  </div>
  )
};

export default Feed;
