import { useEffect, useState } from "react"
import './button.scss'
import PropTypes from 'prop-types';


const Button = (props) => {
  const [computedButtonType, setComputedButtonType] = useState('button__orange')
  const { disabled, buttonInfo = { type: "primary" } } = props
  const { type } = buttonInfo

  useEffect(() => {
    if (type === 'primary' || !type) {
      return setComputedButtonType('button__orange')
    } if (type === 'secondary') {
      return setComputedButtonType("button__gray")
    }
  }, [type])

  return (
    <button
      disabled={disabled}
      className={`button ${computedButtonType}`}
    >
      View document
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  buttonInfo: PropTypes.object
}

Button.defaultProps = {
  disabled: false
}

export default Button
