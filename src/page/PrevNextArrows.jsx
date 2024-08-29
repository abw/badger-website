import React from 'react'
import Link from '@/ui/Link.jsx'
import { SiteConsumer } from '@/site/Context.jsx'

export const PrevNextArrows = SiteConsumer(
  ({
    prevNextPage,
    prevNextArrowsClass='prev-next-arrows flex space gap-2 middle',
    className=prevNextArrowsClass
  }) => {
    const [prev, next] = prevNextPage()

    return (
      <div className={className}>
        { prev
          ? <Link to={prev.to} icon="arrow-left"/>
          : <div>&nbsp;</div>
        }
        { next
          ? <Link to={next.to} icon="arrow-right"/>
          : <div>&nbsp;</div>
        }
      </div>
    )
  }
)

export default PrevNextArrows