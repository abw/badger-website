import React from 'react'
import { classes, WithIcons } from '@abw/badger-react-ui'
import { NavLink } from 'react-router-dom'

const Link = ({
  to,
  className='',
  exact,
  onClick,
  label,
  style,
  code,
  text=code,
  ...props
}) =>
  <NavLink
    to={to}
    onClick={onClick}
    end={exact && 'end'}
    className={
      ({ isActive }) => classes(className, { active: isActive, 'font-mono': code })
    }
    aria-label={label}
    style={style}
  >
    <WithIcons text={text} {...props}/>
  </NavLink>

export default Link
