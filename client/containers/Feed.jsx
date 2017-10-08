import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Article from '../components/Article.jsx';
import MoreButton from '../components/MoreButton.jsx';
import '../styles/Feed.scss';

const Feed = (props) => {
  if (props.hasErrored) {
    return (
      <div className="scroll-container">
        <p>Sorry! There was an error loading the items</p>
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

  return (
    <div className="scroll-container">
      {articlesArr}
      <MoreButton />
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    hasErrored: state.articleFetchError,
    isLoading: state.articleFetchLoading,
  };
};

Feed.propTypes = {
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
          type: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          thumbnailUrl: PropTypes.string,
          mimeType: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      attribution: PropTypes.shape({
        displayName: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Feed);
