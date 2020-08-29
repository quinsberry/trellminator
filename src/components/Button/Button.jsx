import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

export const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

export default Button
