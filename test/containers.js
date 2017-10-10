import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from './shallowWithStore.jsx';

import Feed from '../client/containers/Feed.jsx';

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

/* eslint-disable no-undef */

describe('Test shallowWithStore method', () => {
  it('should render correctly when mocked', () => {
    const testState = {
      articles: [],
      subs: [],
      hasErrored: false,
      isLoading: false,
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<Feed />, store);
    expect(component).to.be.a('object');
  });
});

// describe('<Feed />', () => {
//   it('should be a <div> element', () => {
//     const wrapper = shallow(<Feed />);
//     expect(wrapper.type()).to.eql('div');
//   });
// });
