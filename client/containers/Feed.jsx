import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/index';

import Article from '../components/Article.jsx';
import MoreButton from '../components/MoreButton.jsx';
import '../styles/Feed.scss';

class Feed extends Component {
  componentDidMount() {
    this.props.fetchData('https://medcircle-coding-project.s3.amazonaws.com/api/articles.json');
  }

  render() {
    if (this.props.hasErrored) {
      return (
        <div className="scroll-container">
          <p>Sorry! There was an error loading the items</p>
        </div>
      );
    }
    if (this.props.isLoading) {
      return (
        <div className="scroll-container">
          <p>Loading…</p>;
        </div>
      );
    }

    const articles = this.props.articles;
    const articlesArr = [];
    
    for (let i = 0; i < articles.length; i += 1) {
      console.log(articles[i], 'articles');
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
  }
}

// Feed.propTypes = {
//   fetchData: PropTypes.func.isRequired,
//   articles: PropTypes.array.isRequired,
//   hasErrored: PropTypes.bool.isRequired,
//   isLoading: PropTypes.bool.isRequired,
// };

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    hasErrored: state.fetchError,
    isLoading: state.fetchLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchArticles(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);


// {this.props.articles.map((article, i) => {
//   <Article key={i}
//     title={article.title}
//     summary={article.summary}
//     url={article.url}
//     topics={article.topics}
//     likesCount={article.likesCount}
//     media={article.media}
//     attribution={article.attribution}
//   />
// })}