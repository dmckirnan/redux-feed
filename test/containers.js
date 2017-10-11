import React from 'react';
import { expect } from 'chai';
import { createMockStore } from 'redux-test-utils';

import shallowWithStore from './shallowWithStore.jsx';
import Feed from '../client/containers/Feed.jsx';
import TopicsContainer from '../client/containers/TopicsContainer.jsx';

import MoreButton from '../client/components/MoreButton.jsx';
import Article from '../client/components/Article.jsx';
import Topic from '../client/components/Topic.jsx';

import articles from '../utils/testArticles';
import topics from '../utils/testTopics';

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */

describe('Test shallowWithStore method', () => {
  it('should render correctly when mocked', () => {
    const testState = {
      articles: [],
      subs: [],
      articleFetchError: false,
      articleFetchLoading: false,
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<Feed />, store);
    expect(component).to.be.a('object');
  });
});

describe('<Feed />', () => {
  it('should be a <div> component', () => {
    const testState = {
      articles: [],
      subs: [],
      articleFetchError: false,
      articleFetchLoading: false,
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<Feed />, store);
    expect(component.dive().type()).to.eql('div');
  });
  it('should render a <MoreButton /> component', () => {
    const testState = {
      articles: [],
      subs: [],
      articleFetchError: false,
      articleFetchLoading: false,
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<Feed />, store);
    expect(component.dive().find(MoreButton)).to.have.length(1);
  });
  it('should render no <Article /> or <MoreButton /> when passed hasErrored === true', () => {
    const testState = {
      articles,
      subs: [],
      articleFetchError: true,
      articleFetchLoading: false,
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<Feed />, store);
    expect(component.dive().find(Article)).to.have.length(0);
    expect(component.dive().find(MoreButton)).to.have.length(0);
  });
  it('should render no <Article /> or <MoreButton /> when passed isLoading === true', () => {
    const testState = {
      articles,
      subs: [],
      articleFetchError: false,
      articleFetchLoading: true,
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<Feed />, store);
    expect(component.dive().find(Article)).to.have.length(0);
    expect(component.dive().find(MoreButton)).to.have.length(0);
  });
  it('should render 1 <Article /> components with props.articles.length === 1', () => {
    const testState = {
      articles: [
        {
          id: 1,
          updatedAt: '2017-04-06T01:00:01.446Z',
          createdAt: '2017-04-06T01:00:01.446Z',
          title: 'Test1',
          slug: 'TestSlug',
          summary: 'Test Summary',
          url: 'www.google.com',
          topics: [{ id: 1, name: 'disease' }],
          likesCount: 0,
          media: [{ id: 1, url: 'test.com/url' }],
          attribution: { displayName: 'CBS' },
        },
      ],
      subs: [],
      articleFetchError: false,
      articleFetchLoading: false,
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<Feed />, store);
    expect(component.dive().find(Article)).to.have.length(1);
  });
  it('should render <Article /> components matching length of test articles structure', () => {
    const testState = {
      articles,
      subs: [],
      articleFetchError: false,
      articleFetchLoading: false,
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<Feed />, store);
    expect(component.dive().find(Article)).to.have.length(3);
  });
  it('should render 2 <Article /> components since id: 1 is in subs', () => {
    const testState = {
      articles,
      subs: [1],
      articleFetchError: false,
      articleFetchLoading: false,
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<Feed />, store);
    expect(component.dive().find(Article)).to.have.length(2);
  });
  it('should render 0 <Article /> components since all ids are in subs', () => {
    const testState = {
      articles,
      subs: [1, 3, 7],
      articleFetchError: false,
      articleFetchLoading: false,
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<Feed />, store);
    expect(component.dive().find(Article)).to.have.length(0);
  });
  it('should render all <Article /> components since no ids match', () => {
    const testState = {
      articles,
      subs: [90, 4, 20],
      articleFetchError: false,
      articleFetchLoading: false,
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<Feed />, store);
    expect(component.dive().find(Article)).to.have.length(3);
  });
});


describe('<TopicsContainer />', () => {
  it('should be a <div> component', () => {
    const testState = {
      topics: [],
      subs: [],
      topicFetchError: false,
      topicFetchLoading: false,
      onClickAdd: () => console.log('hi'),
      onClickRemove: () => console.log('bye'),
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<TopicsContainer />, store);
    expect(component.dive().type()).to.eql('div');
  });
  it('should render no <Topic /> components when passed hasErrored === true', () => {
    const testState = {
      topics: [],
      subs: [],
      topicFetchError: true,
      topicFetchLoading: false,
      onClickAdd: () => console.log('hi'),
      onClickRemove: () => console.log('bye'),
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<TopicsContainer />, store);
    expect(component.dive().find(Topic)).to.have.length(0);
  });
  it('should render no <Topic /> components when passed isLoading === true', () => {
    const testState = {
      topics: [],
      subs: [],
      topicFetchError: false,
      topicFetchLoading: true,
      onClickAdd: () => console.log('hi'),
      onClickRemove: () => console.log('bye'),
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<TopicsContainer />, store);
    expect(component.dive().find(Topic)).to.have.length(0);
  });
  it('should render 1 <Topic /> component when props.topics.length === 1', () => {
    const testState = {
      topics: [{ id: 1, name: 'hi', following: true }],
      subs: [],
      topicFetchError: false,
      topicFetchLoading: false,
      onClickAdd: () => console.log('hi'),
      onClickRemove: () => console.log('bye'),
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<TopicsContainer />, store);
    expect(component.dive().find(Topic)).to.have.length(1);
  });
  it('should render as many <Topic /> components as testTopics data structure length', () => {
    const testState = {
      topics,
      subs: [],
      topicFetchError: false,
      topicFetchLoading: false,
      onClickAdd: () => console.log('hi'),
      onClickRemove: () => console.log('bye'),
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<TopicsContainer />, store);
    expect(component.dive().find(Topic)).to.have.length(3);
  });
  it('should render 1 <Topic /> with a button with a ".following-button className when topic id is not found in subs', () => {
    const testState = {
      topics: [{ id: 1, name: 'hi', following: true }],
      subs: [],
      topicFetchError: false,
      topicFetchLoading: false,
      onClickAdd: () => console.log('hi'),
      onClickRemove: () => console.log('bye'),
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<TopicsContainer />, store);
    expect(component.dive().find(Topic).dive().find('.following-button')).to.have.length(1);
  });
  it('should render 1 <Topic /> with a button with a ".follow-button className when topic id is found in subs', () => {
    const testState = {
      topics: [{ id: 1, name: 'hi', following: true }],
      subs: [1],
      topicFetchError: false,
      topicFetchLoading: false,
      onClickAdd: () => console.log('hi'),
      onClickRemove: () => console.log('bye'),
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<TopicsContainer />, store);
    expect(component.dive().find(Topic).dive().find('.following-button')).to.have.length(0);
    expect(component.dive().find(Topic).dive().find('.follow-button')).to.have.length(1);
  });
});
