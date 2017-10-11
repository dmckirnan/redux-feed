import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link, Route, Switch } from 'react-router-dom';

import App from '../client/components/App.jsx';
import Navbar from '../client/components/Navbar.jsx';
import Main from '../client/components/Main.jsx';
import Home from '../client/components/views/Home.jsx';
import Topics from '../client/components/views/Topics.jsx';
import Article from '../client/components/Article.jsx';
import ArticleButtons from '../client/components/ArticleButtons.jsx';
import MoreButton from '../client/components/MoreButton.jsx';
import Topic from '../client/components/Topic.jsx';

import Feed from '../client/containers/Feed.jsx';
import TopicsFeed from '../client/containers/TopicsFeed.jsx';

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */

describe('<App />', () => {
  it('should be a <div> element', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.type()).to.eql('div');
  });
  it('renders a <Navbar /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Navbar)).to.have.length(1);
  });
  it('should render a ".spacer" <div>', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.spacer')).to.have.length(1);
  });
  it('renders a <Main /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Main)).to.have.length(1);
  });
});

describe('<Navbar />', () => {
  it('should be a <nav> element', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.type()).to.eql('nav');
  });
  it('should render 1 ".inner-nav" <div>', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.inner-nav')).to.have.length(1);
  });
  it('should render 2 <Link /> components', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Link)).to.have.length(2);
  });
});

describe('<Main />', () => {
  it('should be a <main> element', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.type()).to.eql('main');
  });
  it('should render a <Switch /> component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(Switch)).to.have.length(1);
  });
  it('should render 2 <Route /> components', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(Route)).to.have.length(2);
  });
});

describe('<Home />', () => {
  it('should be a <div> element', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.type()).to.eql('div');
  });
  it('should render a <Feed /> component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Feed)).to.have.length(1);
  });
});

describe('<Topics />', () => {
  it('should be a <div> element', () => {
    const wrapper = shallow(<Topics />);
    expect(wrapper.type()).to.eql('div');
  });
  it('should render a <TopicsFeed /> component', () => {
    const wrapper = shallow(<Topics />);
    expect(wrapper.find(TopicsFeed)).to.have.length(1);
  });
});

describe('<Article />', () => {
  const props = {
    title: 'hello',
    createdAt: '2017-04-06T01:00:01.446Z',
    topics: [{ id: 1, name: 'disease' }],
    summary: 'summary',
    attribution: { displayName: 'CBS' },
    media: [{ id: 1 }],
  };
  it('should be an <article> element', () => {
    const wrapper = shallow(<Article {...props} />);
    expect(wrapper.type()).to.eql('article');
  });
  it('should render an <ArticleButtons /> component', () => {
    const wrapper = shallow(<Article {...props} />);
    expect(wrapper.find(ArticleButtons)).to.have.length(1);
  });
  it('should render 2 <a>, 1 <h1>, 3 <div>, 3 <p>, and 1 <img> element', () => {
    const wrapper = shallow(<Article {...props} />);
    expect(wrapper.find('a')).to.have.length(3);
    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.find('div')).to.have.length(3);
    expect(wrapper.find('p')).to.have.length(3);
    expect(wrapper.find('img')).to.have.length(1);
  });
  it('should render 1 .article-topic-tag <a> when given topics.length === 1', () => {
    const wrapper = shallow(<Article {...props} />);
    expect(wrapper.find('.article-topic-tag')).to.have.length(1);
  });
  it('should render as many .article-topic-tag <a> as topics.length', () => {
    const wrapper = shallow(<Article {...props} />);
    const newTopics = [{ id: 1, name: 'disease' }, { id: 2, name: 'disease' }];
    wrapper.setProps({ topics: newTopics });
    wrapper.update();
    expect(wrapper.find('.article-topic-tag')).to.have.length(2);
  });
});

describe('<ArticleButtons />', () => {
  it('should be a <div> element', () => {
    const wrapper = shallow(<ArticleButtons />);
    expect(wrapper.type()).to.eql('div');
  });
  it('should render 7 <span> and 4 <button> elements', () => {
    const wrapper = shallow(<ArticleButtons />);
    expect(wrapper.find('span')).to.have.length(7);
    expect(wrapper.find('button')).to.have.length(4);
  });
});

describe('<MoreButton />', () => {
  it('should be a <div> element', () => {
    const wrapper = shallow(<MoreButton />);
    expect(wrapper.type()).to.eql('div');
  });
  it('should render a <button>', () => {
    const wrapper = shallow(<MoreButton />);
    expect(wrapper.find('.more-button')).to.have.length(1);
  });
});

describe('<Topic />', () => {
  const props = {
    id: 1,
    name: 'name',
    following: false,
  };
  it('should be a <div> element', () => {
    const wrapper = shallow(<Topic {...props} />);
    expect(wrapper.type()).to.eql('div');
  });
  it('should render 1 <a> and 1 <button> element', () => {
    const wrapper = shallow(<Topic {...props} />);
    expect(wrapper.find('a')).to.have.length(1);
    expect(wrapper.find('.follow-button')).to.have.length(1);
  });
  it('should render a .following button when passed props.following === true', () => {
    const wrapper = shallow(<Topic {...props} />);
    wrapper.find('.follow-button').simulate('click');
    wrapper.setProps({ following: true });
    wrapper.update();
    expect(wrapper.find('.following-button')).to.have.length(1);
    expect(wrapper.find('.follow-button')).to.have.length(0);
  });
});
