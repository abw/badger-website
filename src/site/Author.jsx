import React from 'react'
import Link from '@/ui/Link.jsx'
import { SiteConsumer } from './Context.jsx'

export const Author = SiteConsumer(
  ({ site }) =>
    site.author
      ? site.authorLink
        ? <Link
            href={site.authorLink}
            className="author"
            targetBlank
            text={site.author}
          />
        : <span className="author">
            {site.author}
          </span>
      : null
)

export default Author

