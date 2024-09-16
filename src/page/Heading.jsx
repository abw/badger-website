import React, { useEffect } from 'react'
import { usePage } from './Context.jsx'
import { idSafe } from '@/utils/Misc.jsx'

export const Heading = ({
  id,
  code,
  text=code,
  title=text,
  heading=title
}) => {
  const { addToc } = usePage()
  id ||= idSafe(code || title)

  useEffect(
    () => {
      addToc({ id, heading })
    },
    [heading]
  )
  return (
    <h2 className={code ? 'font-mono page-heading' : 'page-heading'}>{heading}</h2>
  )
}

export default Heading