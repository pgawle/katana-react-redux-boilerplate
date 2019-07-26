import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  render() {
    const { onChange, value } = this.props;
    return <input type="text" onChange={onChange} value={value} />;
  }
}

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};

Input.defaultProps = {
  onChange: () => {},
  value: ''
};

export default Input;
