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

  renderArticles(article) {
    const title = article.title;
    const summary = article.summary;
    const url = article.url;
    const topics = article.topics;
    const likesCount = article.likesCount;
    const media = article.media;
    const attribution = article.attribution;

    return (
      <Article
        key={title}
        title={title}
        summary={summary}
        url={url}
        topics={topics}
        likesCount={likesCount}
        media={media}
        attribution={attribution}
      />
    );
  }

  render() {
    console.log(this.props);
    if (this.props.hasErrored) {
      return (
        <div className="scroll-container">
          <p>Sorry! There was an error loading the items</p>
        </div>
      )
    }

    if (this.props.isLoading) {
      return (
        <div className="scroll-container">
          <p>Loading…</p>;
        </div>
      )
    }

    return (
      <div className="scroll-container">
        {this.props.articles.map((item) => {
          this.renderArticles(item);
        })}
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


// const Feed = ({ articles }) => {
//   if (articles === undefined) {
//     return (
//       <div className="scroll-container">
//         <Article />
//         <MoreButton />
//       </div>
//     );
//   }
//   return (
//     <div className="scroll-container">
//       {articles.map((article, i) => (
//         <Article key={i}
//           title={article[i].title}
//           summary={article[i].summary}
//           url={article[i].url}
//           topics={article[i].topics}
//           likesCount={article[i].likesCount}
//           media={article[i].media}
//           attribution={article[i].attribution}
//         />
//       ))}
//       <MoreButton />
//     </div>
//   );
// };

// export default Feed;