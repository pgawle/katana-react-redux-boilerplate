import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class BaseInput extends PureComponent {
  render() {
    const { onChange, value, type } = this.props;
    return <input type={type} onChange={onChange} value={value} />;
  }
}

BaseInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string
};

BaseInput.defaultProps = {
  onChange: () => {},
  value: '',
  type: 'text'
};

export default BaseInput;
