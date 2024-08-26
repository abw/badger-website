import React from 'react'
import { SiteConsumer } from './Context.jsx'

export const Release = SiteConsumer(
  ({ site }) =>
    <>
      <span className="version">v{site.version}</span>
      <span className="date">{site.date}</span>
    </>
)

export default Release

