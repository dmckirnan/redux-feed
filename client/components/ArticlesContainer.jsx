import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article.jsx';
import MoreButton from './MoreButton.jsx';
import '../styles/Feed.scss';


const filterArticles = (topics, subs) => {
  let counter = 0;
  topics.forEach((topic) => {
    if (subs.indexOf(topic.id) !== -1) counter += 1;
  });
  return counter === 0;
};

const ArticlesContainer = (props) => {
  if (props.hasErrored) {
    return (
      <div className="scroll-container">
        <p>Sorry! There was an error loading the articles.</p>
      </div>
    );
  }
  if (props.isLoading) {
    return (
      <div className="scroll-container">
        <p>Loading…</p>;
      </div>
    );
  }

  const articles = props.articles;
  const articlesArr = [];

  for (let i = 0; i < articles.length; i += 1) {
    if (filterArticles(articles[i].topics, props.subs)) {
      articlesArr.push(
        <Article
          key={i}
          createdAt={articles[i].createdAt}
          title={articles[i].title}
          summary={articles[i].summary}
          url={articles[i].url}
          topics={articles[i].topics}
          likesCount={articles[i].likesCount}
          media={articles[i].media}
          attribution={articles[i].attribution}
        />,
      );
    }
  }

  return (
    <div className="scroll-container">
      {articlesArr}
      <MoreButton />
    </div>
  );
};

ArticlesContainer.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      topics: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          description: PropTypes.string,
        }).isRequired,
      ).isRequired,
      likesCount: PropTypes.number.isRequired,
      media: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          type: PropTypes.string,
          url: PropTypes.string.isRequired,
          thumbnailUrl: PropTypes.string,
          mimeType: PropTypes.string,
        }).isRequired,
      ).isRequired,
      attribution: PropTypes.shape({
        displayName: PropTypes.string.isRequired,
        type: PropTypes.string,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  subs: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ArticlesContainer;
