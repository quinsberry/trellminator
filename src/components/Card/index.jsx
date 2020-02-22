import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

export const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

export default Card;