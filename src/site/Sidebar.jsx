import React from 'react'
import { SiteConsumer } from './Context.jsx'

export const SiteSidebar = SiteConsumer(
  ({ site }) =>
    <div>
      {site.title}
    </div>
)

export default SiteSidebar