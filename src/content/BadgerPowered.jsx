import React from 'react'
import { Icon } from '@abw/badger-react-ui'
import { SiteConsumer } from '@/site/Context.jsx'

export const BadgerPowered = SiteConsumer(
  ({ site }) =>
    Boolean(site.badgerpower) &&
      <a
        href="https://badgerpower.com/"
        target="_blank"
        rel="noreferrer"
        className="flex gap-2 middle center"
      >
        <Icon name="badger-white" size="larger"/>
        Badger Powered
      </a>
)

export default BadgerPowered

