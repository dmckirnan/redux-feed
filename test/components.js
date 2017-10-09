import React from 'react';
import { render } from 'enzyme';

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import App from '../client/components/App.jsx';
import Navbar from '../client/components/Navbar.jsx';
import Main from '../client/components/Main.jsx';
import Home from '../client/components/Home.jsx';
import Article from '../client/components/Article.jsx';
import ArticleButtons from '../client/components/ArticleButtons.jsx';
import MoreButton from '../client/components/MoreButton.jsx';
import Topic from '../client/components/Topic.jsx';

import Feed from '../client/containers/Feed.jsx';

/* eslint-disable no-undef */
describe('<App />', () => {
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
  it('should render 4 <div>, 2 <img>, 4 <a>, 1 <button>', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('a')).to.have.length(4);
    expect(wrapper.find('img')).to.have.length(2);
    expect(wrapper.find('button')).to.have.length(1);
    expect(wrapper.find('div')).to.have.length(4);
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
    expect(wrapper.type()).to.eql('article');
  });
  it('should render an <ArticleButtons /> component', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper.find(ArticleButtons)).to.have.length(1);
  });
  it('should render 2 <a>, 1 <h1>, 3 <div>, 3 <p>, and 1 <img> element', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper.find('a')).to.have.length(2);
    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.find('div')).to.have.length(3);
    expect(wrapper.find('p')).to.have.length(3);
    expect(wrapper.find('img')).to.have.length(1);
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
    const wrapper = shallow(<Home />);
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
    expect(wrapper.find('button')).to.have.length(1);
  })
})