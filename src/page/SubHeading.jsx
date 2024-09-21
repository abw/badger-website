import React from 'react'
import useToc from '@/toc/useToc.jsx'
import { classes } from '@abw/badger-react-ui'

export const SubHeading = props => {
  const { id, ref, code, title, children } = useToc({ ...props })

  return (
    <h3
      id={id}
      ref={ref}
      className={ classes('page-sub-heading', { 'font-mono': code }) }
    >
      { children
        ? <span>{children}</span>
        : title
      }
    </h3>
  )
}

export default SubHeading