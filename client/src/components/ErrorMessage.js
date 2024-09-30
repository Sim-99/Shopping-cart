import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message, type }) => {
  if (!message) return null;

  return (
    <div className={`alert ${type === 'error' ? 'alert-danger' : 'alert-success'}`} role="alert">
      {message}
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'success']).isRequired
};

export default ErrorMessage;
