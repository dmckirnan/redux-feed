import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import App from '../client/components/App.jsx';
import Navbar from '../client/components/Navbar.jsx';
import Main from '../client/components/Main.jsx';
import Home from '../client/components/Home.jsx';
import Article from '../client/components/Article.jsx';
import ArticleButtons from '../client/components/ArticleButtons.jsx';
import MoreButton from '../client/components/MoreButton.jsx';
import Topic from '../client/components/Topic.jsx';

import Feed from '../client/containers/Feed.jsx';

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
  it('should render 1 <div> and 2 <Link /> Components', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Link)).to.have.length(2);
    expect(wrapper.find('div')).to.have.length(1);
  });
});

describe('<Main />', () => {
  it('should be a <main> element', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.type()).to.eql('main');
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

describe('<Article />', () => {
  it('should be an <article> element', () => {
    const wrapper = shallow(<Article />);

    const title = 'hello';
    const createdAt = '2017-04-06T01:00:01.446Z';
    const topics = [{ id: 1, name: 'disease' }];
    const summary = 'summary';
    const attribution = { displayName: 'CBS' };
    const media = [{ id: 1 }];

    wrapper.setProps({ title, createdAt, topics, summary, attribution, media });
    expect(wrapper.type()).to.eql('article');
  });
  it('should render an <ArticleButtons /> component', () => {
    const wrapper = shallow(<Article />);

    const title = 'hello';
    const createdAt = '2017-04-06T01:00:01.446Z';
    const topics = [{ id: 1, name: 'disease' }];
    const summary = 'summary';
    const attribution = { displayName: 'CBS' };
    const media = [{ id: 1 }];

    wrapper.setProps({ title, createdAt, topics, summary, attribution, media });
    expect(wrapper.find(ArticleButtons)).to.have.length(1);
  });
  it('should render 2 <a>, 1 <h1>, 3 <div>, 3 <p>, and 1 <img> element', () => {
    const wrapper = shallow(<Article />);

    const title = 'hello';
    const createdAt = '2017-04-06T01:00:01.446Z';
    const topics = [{ id: 1, name: 'disease' }];
    const summary = 'summary';
    const attribution = { displayName: 'CBS' };
    const media = [{ id: 1 }];

    wrapper.setProps({ title, createdAt, topics, summary, attribution, media });
    expect(wrapper.find('a')).to.have.length(3);
    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.find('div')).to.have.length(3);
    expect(wrapper.find('p')).to.have.length(3);
    expect(wrapper.find('img')).to.have.length(1);
  });
  it('should render as many .article-topic-tag <a> tags as topics.length', () => {
    const wrapper = shallow(<Article />);
    
    const title = 'hello';
    const createdAt = '2017-04-06T01:00:01.446Z';
    const topics = [{ id: 1, name: 'disease' }];
    const summary = 'summary';
    const attribution = { displayName: 'CBS' };
    const media = [{ id: 1 }];

    wrapper.setProps({ title, createdAt, topics, summary, attribution, media });
    expect(wrapper.find('.article-topic-tag')).to.have.length(1);
    const newTopics = [{ id: 1, name: 'disease' }, { id: 2, name: 'disease' }];
    wrapper.setProps({ title, createdAt, topics: newTopics, summary, attribution, media });
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
  it('should render a button', () => {
    const wrapper = shallow(<MoreButton />);
    expect(wrapper.find('.more-button')).to.have.length(1);
  });
});

describe('<Topic />', () => {
  it('should be a <div> element', () => {
    const wrapper = shallow(<Topic />);
    expect(wrapper.type()).to.eql('div');
  });
  it('should render 1 <a> and 1 <button> element', () => {
    const wrapper = shallow(<Topic />);
    expect(wrapper.find('a')).to.have.length(1);
    expect(wrapper.find('.follow-button')).to.have.length(1);
  });
  it('should render a .following button when passed props.following === true', () => {
    const wrapper = shallow(<Topic />);
    wrapper.find('.follow-button').simulate('click');
    wrapper.setProps({ following: true });
    wrapper.update();
    expect(wrapper.find('.following-button')).to.have.length(1);
    expect(wrapper.find('.follow-button')).to.have.length(0);
  });
});
