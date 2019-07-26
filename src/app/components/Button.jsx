import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
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
    const { name } = this.props;

    return <input type="button" onClick={this.handleClick} value={name} />;
  }
}

Button.propTypes = {
  onAction: PropTypes.func,
  name: PropTypes.string
};

Button.defaultProps = {
  onAction: () => {},
  name: 'Button Name'
};

export default Button;
