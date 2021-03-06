import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import TaskList from '.';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    const initialState = {};
    const store = mockStore(initialState);
    shallow(<TaskList store={store} />);
  });
});
