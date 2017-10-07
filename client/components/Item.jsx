import React from 'react';
import Info from './Info.jsx';

import '../styles/Feed.scss';

const Item = ({ followClick }) => (
  <article className="article">
    <a href="#" className="title-link">
      <h1 className="article-title">
        Test Title
      </h1>
    </a>
    <div className="source-container">
      <div>
        <p className="article-source-name">Test Name</p>
        <p className="article-source-data">9/12/17</p>
      </div>
    </div>
    <a href="#" className="article-link">
      <img
        src="https://d112vpovu2xa8r.cloudfront.net/portal_medcircle_curatasite_com/media/vazFSPTqqQxh35E.jpeg"
        alt="article"
      />
    </a>
    <p className="article-summary">
      The study suggests that the liver deals with fat differently on a high-sugar diet than it does on a low-sugar diet.
    </p>
    <div className="article-topics">
      <a href="#" className="article-topic-tag">General Health</a>
    </div>
    <Info />
  </article>
);

export default Item;
