import React from 'react';
import Item from './Item.jsx';
import MoreButton from './MoreButton.jsx';

import '../styles/Feed.scss';

const Feed = ({ items, followClick }) => {
  if (items === undefined) {
    return (
      <div className="scroll-container">
        <Item />
        <MoreButton />
      </div>
    );
  }
  return (
    <div className="scroll-container">
    {items.map(item =>
      <Item key={item.id}
        {...item}
        onClick={() => followClick(item.id)}
      />
    )}
  </div>
  )
};

export default Feed;
