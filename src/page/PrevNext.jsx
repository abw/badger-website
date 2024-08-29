import React from 'react'
import Link from './PrevNextLink'
import { SiteConsumer } from '@/site/Context.jsx'

export const PrevNext = SiteConsumer(
  ({
    prevNextPage,
    PrevNextLink=Link,
    prevNextClass='prev-next flex space gap-2 middle mar-t-8',
    className=prevNextClass
  }) => {
    const [prev, next] = prevNextPage()
    if (! prev && ! next) {
      return null
    }

    return (
      <div className={className}>
        { prev
          ? <PrevNextLink prev {...prev}/>
          : <div>&nbsp;</div>
        }
        { next
          ? <PrevNextLink {...next}/>
          : <div>&nbsp;</div>
        }
      </div>
    )
  }
)

export default PrevNext