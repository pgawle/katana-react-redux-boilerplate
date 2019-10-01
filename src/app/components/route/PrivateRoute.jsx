import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectIsAuthenticated } from '../../redux/auth/selectors';

const PrivateRoute = ({ component: Component, ...props }) => {
  const { isAuthenticated } = props;
  return (
    <Route
      {...props}
      render={innerProps =>
        isAuthenticated ? <Component {...innerProps} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: selectIsAuthenticated(state)
});

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.elementType.isRequired
};

export default connect(mapStateToProps)(PrivateRoute);
