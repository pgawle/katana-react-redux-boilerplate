import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../../../ui-components/inputs/baseInput';
import Button from '../../../ui-components/buttons/primaryButton';
import * as actions from '../../redux/login/actions';
import { selectError, selectLoading } from '../../redux/login/selectors';
import { selectIsAuthenticated } from '../../redux/auth/selectors';
import loader from '../../../assets/ajax-loader.gif';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'user@user.com',
      password: 'pass'
    };
  }

  getForm(isLoading) {
    if (isLoading) {
      return <img alt={loader} src={loader} />;
    }

    const { username, password } = this.state;
    return (
      <React.Fragment>
        Email: <Input value={username} onChange={this.usernameOnChange} />
        <br />
        Password: <Input type="password" value={password} onChange={this.passwordOnChange} />
        <br />
        <Button onAction={this.handleSubmit} name="Sign in" />
      </React.Fragment>
    );
  }

  handleSubmit = () => {
    const { username, password } = this.state;
    const { login } = this.props;
    login(username, password);
  };

  passwordOnChange = event => {
    this.setState({ password: event.target.value });
  };

  usernameOnChange = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    const { errorMsg, isLoading, isAuthenticated } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h4>Katana.</h4>
        <p>ReactJS, Redux working boilerplate</p>
        <p>
          username: user@user.com
          <br /> password: pass
        </p>
        {errorMsg}
        <br />
        {this.getForm(isLoading)}
      </div>
    );
  }
}

Login.propTypes = {
  errorMsg: PropTypes.string,
  isLoading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired
};

Login.defaultProps = {
  errorMsg: '',
  isLoading: false,
  isAuthenticated: false
};

const mapStateToProps = state => ({
  errorMsg: selectError(state),
  isLoading: selectLoading(state),
  isAuthenticated: selectIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(actions.login, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
