import React from 'react'
import Link from '@/ui/Link.jsx'
import { SiteConsumer } from './Context.jsx'

export const Repository = SiteConsumer(
  ({ site, className='' }) =>
    Boolean(site.repository) &&
      <Link
        href={site.repository}
        targetBlank
        className={`repository ${className}`}
        icon={site.repoIcon || 'github'}
      />
)

export default Repository

