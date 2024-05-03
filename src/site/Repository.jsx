import React from 'react'
import { Icon } from '@abw/badger-react-ui'
import { SiteConsumer } from './Context.jsx'

export const SiteRepository = SiteConsumer(
  ({ site }) =>
    Boolean(site.repository) &&
      <a href={site.repository} target="_blank" rel="noreferrer">
        <Icon name={site.repoIcon || 'github'}/>
      </a>
)

export default SiteRepository

