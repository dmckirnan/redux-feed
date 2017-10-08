import React from 'react';
import ArticleButtons from './ArticleButtons.jsx';
import dateConverter from '../../utils/dateConverter.js';

import '../styles/Feed.scss';

const Article = (props) => {
  const topics = props.topics;
  const topicsArr = [];
  for (let i = 0; i < topics.length; i += 1) {
    topicsArr.push(<a href="#" className="article-topic-tag">{topics[i].name}</a>);
  }

  const media = props.media;
  let imgUrl = '';
  for (let i = 0; i < media.length; i += 1) {
    imgUrl = media[i].url;
  }

  return (
    <article className="article">
      <a href="#" className="title-link">
        <h1 className="article-title">
          {props.title}
        </h1>
      </a>
      <div className="source-container">
        <div>
          <p className="article-source-name">{props.attribution.displayName}</p>
          <p className="article-source-data">{dateConverter(props.createdAt)}</p>
        </div>
      </div>
      <a href="#" className="article-link">
        <img
          src={imgUrl}
          alt="article"
        />
      </a>
      <p className="article-summary">
        {props.summary}
      </p>
      <div className="article-topics">
        {topicsArr}
      </div>
      <ArticleButtons />
    </article>
  );
};

export default Article;
