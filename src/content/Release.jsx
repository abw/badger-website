import React from 'react'
import { SiteConsumer } from '@/site/Context.jsx'

export const Release = SiteConsumer(
  ({ site }) =>
    <div className="flex gap-2 middle">
      <span className="version">v{site.version}</span>
      <span className="date">{site.date}</span>
    </div>
)

export default Release

