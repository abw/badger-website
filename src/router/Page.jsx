import React from 'react'
import { SiteConsumer } from '@/site/Context.jsx'

export const Page = SiteConsumer(
  ({ isLayout, setPage, page={}, Component }) => {
    React.useEffect(
      () => {
        if (! isLayout) {
          // console.log(`setting ${path} page: `, page)
          setPage(page)
        }
      },
      [page]
    )
    return (
      <div id="page">
        <Component/>
      </div>
    )
  }
)

export default Page