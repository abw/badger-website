import React from 'react'
import PrevNext from './PrevNext.jsx'
import PrevNextArrows from './PrevNextArrows.jsx'
import { SiteConsumer } from '@/site/Context.jsx'

export const Page = SiteConsumer(
  ({ site, isLayout, setPage, page={}, Component }) => {
    React.useEffect(
      () => {
        if (! isLayout) {
          // console.log(`setting ${page.uri} page: `, page)
          setPage(page)
        }
      },
      [page]
    )
    return (
      <>
        { (site.prevNextArrows && (page.prevNext ?? true)) &&
          <PrevNextArrows/>
        }
        <div id="page">
          <Component/>
          { (page.prevNext ?? true) &&
            <PrevNext/>
          }
        </div>
      </>
    )
  }
)

export default Page