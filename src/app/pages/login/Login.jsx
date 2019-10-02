import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../../../ui-components/inputs/baseInput';
import Button from '../../../ui-components/buttons/primaryButton';
import * as actions from '../../redux/login/actions';
import styles from './Login.scss';
import { selectError, selectLoading } from '../../redux/login/selectors';
import { selectIsAuthenticated } from '../../redux/auth/selectors';
import loader from '../../../assets/loader.gif';

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
    const buttonClass = classNames(styles.row, styles['button-row']);

    return (
      <React.Fragment>
        <div className={styles.form}>
          <div className={styles.row}>
            <span>Email:</span> <Input value={username} onChange={this.usernameOnChange} />
          </div>
          <div className={styles.row}>
            <span>Password:</span>{' '}
            <Input type="password" value={password} onChange={this.passwordOnChange} />
          </div>
          <div className={buttonClass}>
            <Button onAction={this.handleSubmit} name="Sign in" />
          </div>
        </div>
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
      <div className={styles.wrapper}>
        <h4 className={styles.title}>Katana.</h4>
        <p>Sharp starter kit for your app. Use ReactJS, Redux in minutes.</p>
        <p>With example app included.</p>
        <p className={styles.help}>
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
