import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class BaseInput extends PureComponent {
  render() {
    const { onChange, value } = this.props;
    return <input type="text" onChange={onChange} value={value} />;
  }
}

BaseInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};

BaseInput.defaultProps = {
  onChange: () => {},
  value: ''
};

export default BaseInput;
