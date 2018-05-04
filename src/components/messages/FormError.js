import React from 'react'
import PropTypes from 'prop-types'

const FormError = ({ message }) => <span style={{ color: '#ff0000' }}>{message}</span>

FormError.propTypes = {
  message: PropTypes.string.isRequired
}

export default FormError
