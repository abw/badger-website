import React from 'react'
import SiteAuthor from './Author.jsx'
import { SiteConsumer } from './Context.jsx'

export const SiteFooter = SiteConsumer(
  ({
    site,
    Author=SiteAuthor
  }) =>
    <footer>
      <div className="flex space middle">
        <div className="large">
          {site.title}
        </div>
        <div className="text-center small">
          <Author/>
        </div>
        <div className="flex wrap gap-4">
          <div className="version">v{site.version}</div>
          <div className="date">{site.date}</div>
        </div>
      </div>
    </footer>
)

export default SiteFooter

