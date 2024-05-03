import React from 'react'
import Context from './Context.jsx'

const Author = ({ site }) =>
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

export default Context.Consumer(Author)

