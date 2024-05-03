import React from 'react'
import { SiteConsumer } from './Context.jsx'

export const SiteAuthor = SiteConsumer(
  ({ site }) =>
    site.author
      ? site.authorLink
        ? <a
            href={site.authorLink}
            className="author"
            target="_blank"
            rel="noreferrer"
          >
            {site.author}
          </a>
        : <span className="author">
            {site.author}
          </span>
      : null
)

export default SiteAuthor

