import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import buttonStyles from './PrimaryButton.scss';

class PrimaryButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onAction } = this.props;

    if (onAction) {
      onAction();
    }
  }

  render() {
    const { name, disabled } = this.props;
    const mainClass = classNames(buttonStyles.button, { [buttonStyles.disabled]: disabled });

    return (
      <input
        type="button"
        className={mainClass}
        onClick={this.handleClick}
        value={name}
        disabled={disabled}
      />
    );
  }
}

PrimaryButton.propTypes = {
  onAction: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool
};

PrimaryButton.defaultProps = {
  onAction: () => {},
  name: 'Default Button Name',
  disabled: false
};

export default PrimaryButton;
