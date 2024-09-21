import React from 'react'
import useToc from '@/toc/useToc.jsx'
import { classes } from '@abw/badger-react-ui'

export const SubHeading = props => {
  const { id, ref, code, title } = useToc({ ...props })

  return (
    <h3
      id={id}
      ref={ref}
      className={ classes('page-sub-heading', { 'font-mono': code }) }
    >
      {title}
    </h3>
  )
}

export default SubHeading