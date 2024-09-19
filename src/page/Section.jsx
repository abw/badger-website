import React, { useEffect, useRef } from 'react'
import { idSafe } from '@/utils/Misc.jsx'
import { usePage } from './Context.jsx'
import { classes } from '@abw/badger-react-ui'

export const Section = ({
  id,
  code,
  title=code,
  children,
}) => {
  const { addToc } = usePage()
  const ref = useRef()
  id ||= idSafe(code || title)

  useEffect(
    () => {
      addToc({ code, title, id, ref })
    },
    [id, code, title]
  )
  return (
    <section id={id} ref={ref} className="page-section">
      <h3
        className={ classes({ 'font-mono flex space': code }) }
      >
        {title}
      </h3>
      <div className="page-section-content">
        {children}
      </div>
    </section>
  )
}

export default Section