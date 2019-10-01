import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import TaskList from './app/pages/tasklist';
import Details from './app/pages/details/Details';

import store from './app/redux/rootStore';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={TaskList} />
      <Route exact path="/details" component={Details} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
