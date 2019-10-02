import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import historyService from './app/utils/historyService';
import TaskList from './app/pages/tasklist';
import Details from './app/pages/details/Details';
import Login from './app/pages/login';
import PrivateRoute from './app/components/route';
import store from './app/redux/rootStore';

import './app.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={historyService.getHistory()}>
      <Switch>
        <PrivateRoute exact path="/" component={TaskList} />
        <PrivateRoute exact path="/details" component={Details} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
