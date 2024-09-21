import React from 'react'
import useToc from '@/toc/useToc.jsx'
import { classes, Icon } from '@abw/badger-react-ui'
import { scrollToTop } from '@/utils/Scroll.jsx'
import { useSite } from '@/site/Context.jsx'

export const Heading = ({
  site=useSite(),
  linkUpIcon=site.linkUpIcon||'arrow-up',
  linkUp=site.linkUp,
  ...props
}) => {
  const { id, ref, code, title, children } = useToc({ ...props, heading: true })

  return (
    <h2
      id={id}
      ref={ref}
      className={ classes('page-heading flex space middle', { 'font-mono': code }) }
    >
      { children
        ? <span>{children}</span>
        : title
      }
      { Boolean(linkUp) &&
        <Icon
          className="page-heading-scroll-up"
          name={linkUpIcon}
          size="medium"
          onClick={scrollToTop}
        />
      }
    </h2>
  )
}

export default Heading