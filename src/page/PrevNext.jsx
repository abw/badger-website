import React from 'react'
import Link from './PrevNextLink'
import { SiteConsumer } from '@/site/Context.jsx'

export const PrevNext = SiteConsumer(
  ({
    page,
    sidebar={},
    PrevNextLink=Link,
    prevNextClass='prev-next flex space gap-2 middle mar-t-8',
    className=prevNextClass
  }) => {
    const sections = sidebar.sections || [ ]
    const menuItems = sections.flatMap(
      section => section.menu || section.details?.menu || [ ]
    )
    const index = menuItems.findIndex(
      item => item.to === page.uri
    )
    const prev = index > 0
      ? menuItems[index - 1]
      : null
    const next = (index > -1 && index < menuItems.length - 1)
      ? menuItems[index + 1]
      : null

    // console.log(`index: ${index}`);

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