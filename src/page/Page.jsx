import React from 'react'
import Title from './Title.jsx'
import Intro from './Intro.jsx'
import PrevNext from './PrevNext.jsx'
import PrevNextArrows from './PrevNextArrows.jsx'
import { SiteConsumer } from '@/site/Context.jsx'
import { PageProvider } from './Context.jsx'

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
      <PageProvider page={page}>
        { (site.prevNextArrows && (page.prevNext ?? true)) &&
          <PrevNextArrows/>
        }
        <div id="page">
          <Title/>
          <Intro/>
          <Component/>
          { (page.prevNext ?? true) &&
            <PrevNext/>
          }
        </div>
      </PageProvider>
    )
  }
)

export default Page