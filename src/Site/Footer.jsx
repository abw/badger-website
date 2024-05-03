import React from 'react'
import Context from './Context.jsx'
import DefaultAuthor from './Author.jsx'

const Footer = ({
  site,
  Author=DefaultAuthor
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

export default Context.Consumer(Footer)

