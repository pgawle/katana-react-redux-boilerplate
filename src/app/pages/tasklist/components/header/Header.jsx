import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import styles from './Header.scss';
import LikeIcon from '../../../../../assets/like.svg';

import { deauthenticate } from '../../../../redux/auth/actions';

export class Header extends React.Component {
  handleKeyDown = event => {
    const { logout } = this.props;
    if (event.key === 'Enter') {
      logout();
    }
  };

  render() {
    const { logout } = this.props;

    return (
      <div className={styles.wrapper}>
        <h1>To do List</h1>
        <LikeIcon className={styles.icon} />
        <div
          role="button"
          tabIndex={0}
          className={styles.logout}
          onClick={logout}
          onKeyDown={this.handleKeyDown}
        >
          Logout
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(deauthenticate, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Header);
