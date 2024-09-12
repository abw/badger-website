import React from 'react'
import { Icon } from '@abw/badger-react-ui'
import { SiteConsumer } from '@/site/Context.jsx'

export const BadgerPower = SiteConsumer(
  ({ site }) =>
    Boolean(site.badgerpower) &&
      <a href="https://badgerpower.com/" target="_blank" rel="noreferrer">
        <Icon name="badger-white"/>
      </a>
)

export default BadgerPower

