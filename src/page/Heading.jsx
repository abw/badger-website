import React, { useEffect, useRef } from 'react'
import { usePage } from './Context.jsx'
import { idSafe } from '@/utils/Misc.jsx'
import { classes, Icon } from '@abw/badger-react-ui'
import { scrollToTop } from '@/utils/Scroll.jsx'
import { useSite } from '@/site/Context.jsx'

export const Heading = ({
  id,
  code,
  text=code,
  title=text,
  site=useSite(),
  upIcon=site.upIcon||'arrow-up',
  linkUp=site.linkUp,
}) => {
  const { addToc } = usePage()
  const ref = useRef()
  id ||= idSafe(code || title)

  useEffect(
    () => {
      addToc({ id, code, title, ref, heading: true })
    },
    [title]
  )

  return (
    <h2
      id={id}
      ref={ref}
      className={ classes('page-heading flex space middle', { 'font-mono': code }) }
    >
      {title}
      { Boolean(linkUp) &&
        <Icon
          className="page-heading-scroll-up"
          name={upIcon}
          size="medium"
          onClick={scrollToTop}
        />
      }
    </h2>
  )
}

export default Heading