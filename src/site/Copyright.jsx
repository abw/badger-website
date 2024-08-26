import React from 'react'
import { SiteConsumer } from './Context.jsx'

export const SiteCopyright = SiteConsumer(
  ({ site }) =>
    Boolean(site.copyright) &&
      <span className="copyright">
        &copy; {site.copyright}
      </span>
)

export default SiteCopyright

