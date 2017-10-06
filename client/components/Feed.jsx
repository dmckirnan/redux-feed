import React from 'react';
import Item from './Item.jsx';

const Feed = ({ items, followClick }) => {
  if (items === undefined) {
    return (
      <div>
        <Item />
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
