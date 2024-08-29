import { SiteConsumer } from '@/src/index.jsx'
/* START */
import React from 'react'
// PRETEND: import { SiteConsumer } from '@abw/badger-website'

export const SiteConsumerExample = SiteConsumer(
  ({ site, page }) =>
    <div>
      <p>
        The site author is <code>{site.author}</code>
      </p>
      <p>
        The page URI is <code>{page.uri}</code>
      </p>
    </div>
)

export default SiteConsumerExample