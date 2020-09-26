import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ text, onClick, className }) => (
  <button
    onClick={onClick}
    className={`yellow-button ${className}`}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Button.defaultProps = {
  className: '',
  onClick: () => { },
};

export default Button;
