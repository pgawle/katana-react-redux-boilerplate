import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import TaskList from './app/pages/tasklist';
import Details from './app/pages/details/Details';
import Login from './app/pages/login';
import PrivateRoute from './app/components/route';

import store from './app/redux/rootStore';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PrivateRoute exact path="/" component={TaskList} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
