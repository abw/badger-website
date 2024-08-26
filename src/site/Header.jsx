import React from 'react'
import Link from '@/ui/Link.jsx'
import BadgerPower from './BadgerPower.jsx'
import SiteRepository from './Repository.jsx'
import { SiteConsumer } from './Context.jsx'
import { Icon } from '@abw/badger-react-ui'
import { Toggle } from '@abw/react-night-and-day'

export const SiteHeader = SiteConsumer(
  ({
    sidebarIconClick,
    site,
    Repository=SiteRepository
  }) =>
    <header>
      <nav>
        <div className="flex baseline gap-2">
          <Icon
            name="bars"
            className="toggle-sidebar action"
            onClick={sidebarIconClick}
          />
          <Link to="/" className="home" text={site.title}/>
          <span className="small">v{site.version}</span>
        </div>
        <div className="flex gap-4 middle">
          <BadgerPower/>
          <Repository/>
          <Toggle/>
        </div>
      </nav>
    </header>
)

export default SiteHeader