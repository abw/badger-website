import React from 'react'
import Link from '@/ui/Link.jsx'
import { SiteConsumer } from '@/site/Context.jsx'
import { capitalise } from '@abw/badger-utils'

export const PrevNextArrows = SiteConsumer(
  ({
    prevNextPage,
    prevNextArrowsClass='prev-next-arrows flex space gap-2 middle',
    className=prevNextArrowsClass,
    prevNextArrowsText
  }) => {
    const [prev, next] = prevNextPage()

    return (
      <div className={className}>
        { prev
          ? <Link {...linkAttrs(prev, 'left', prevNextArrowsText)}/>
          : <div>&nbsp;</div>
        }
        { next
          ? <Link {...linkAttrs(next, 'right', prevNextArrowsText)}/>
          : <div>&nbsp;</div>
        }
      </div>
    )
  }
)

const linkAttrs = (link, dir, prevNextArrowsText) =>
  prevNextArrowsText
    ? {
        to: link.to,
        text: link.code ?? link.text,
        className: link.code ? 'font-mono' : '',
        [`icon${capitalise(dir)}`]: `arrow-${dir}`
      }
    : {
        to: link.to,
        icon: `arrow-${dir}`
      }

export default PrevNextArrows