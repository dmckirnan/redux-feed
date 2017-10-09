import React from 'react';
import PropTypes from 'prop-types';

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
  const imgUrl = media.length === 0 ? '' : media[0].url;

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

Article.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }).isRequired,
  ).isRequired,
  summary: PropTypes.string.isRequired,
  attribution: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  media: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      url: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      mimeType: PropTypes.string,
    }),
  ).isRequired,
};

export default Article;
