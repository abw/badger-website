import React from 'react'
import { WithIcons, classes } from '@abw/badger-react-ui'

const ExternalLink = ({
  href,
  label,
  style,
  linkRef,
  size,
  color,
  dark,
  button,
  outline,
  className,
  code,
  codeClass='code',
  text=code,
  todo,
  disabled=todo,
  targetBlank,
  target=targetBlank ? '_blank' : null,
  rel=targetBlank ? 'noreferrer' : null,
  ...props
}) =>
  <a
    href={href}
    className={
      classes(
        className, size, color,
        {
          dark, button, outline, disabled,
          [codeClass]: code,
        }
      )
    }
    aria-label={label}
    style={style}
    ref={linkRef}
    disabled={disabled}
    target={target}
    rel={rel}
  >
    <WithIcons text={text} {...props}/>
  </a>

export default ExternalLink
