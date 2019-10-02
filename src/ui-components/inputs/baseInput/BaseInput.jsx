import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class BaseInput extends PureComponent {
  render() {
    const { onChange, value, type, onKeyDown } = this.props;
    return <input type={type} onChange={onChange} value={value} onKeyDown={onKeyDown} />;
  }
}

BaseInput.propTypes = {
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string
};

BaseInput.defaultProps = {
  onChange: () => {},
  onKeyDown: () => {},
  value: '',
  type: 'text'
};

export default BaseInput;
