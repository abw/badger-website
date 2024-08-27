import React       from 'react'
import { NavLink } from 'react-router-dom'
import { WithIcons, classes } from '@abw/badger-react-ui'

const InternalLink = ({
  to,
  exact,     // old name
  end=exact, // new name
  onClick,
  label,
  style,
  linkRef,
  size,
  color,
  button,
  outline,
  bare,
  className,
  activeClass='active',
  codeClass='code',
  disabled,
  code,
  text=code,
  ...props
}) =>
  <NavLink
    to={to}
    onClick={onClick}
    end={end}
    className={
      ({ isActive }) => classes(
        className, size, color,
        {
          button, outline, bare, disabled,
          [activeClass]: isActive,
          [codeClass]: code,
        }
      )
    }
    aria-label={label}
    style={style}
    ref={linkRef}
    disabled={disabled}
  >
    <WithIcons text={text} {...props}/>
  </NavLink>

export default InternalLink
