import { SiteConsumer } from '@/src/index.jsx'
/* START */
import React from 'react'
// PRETEND: import { SiteConsumer } from '@abw/badger-website'

export const metadata = {
  message: 'Hello World!'
}

export const PageMetadataExample = SiteConsumer(
  ({ page }) =>
    <div>
      <p>
        The page message is <code>{page.message}</code>
      </p>
    </div>
)

export default PageMetadataExample