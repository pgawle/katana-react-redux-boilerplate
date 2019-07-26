import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Games from './app/pages/games/Games';
import Details from './app/pages/details/Details';

import store from './app/redux/store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Games} />
      <Route exact path="/details" component={Details} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
