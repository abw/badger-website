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
  // const tocText = code
  //   ? `code:${code}`
  //   : title

  useEffect(
    () => {
      addToc({ code, title, id, ref })
    },
    [id, code, title]
  )
  return (
    <section id={id} ref={ref}>
      <h3 className={classes({ 'font-mono': code })}>{title}</h3>
      <div>
        {children}
      </div>
    </section>
  )
}

export default Section