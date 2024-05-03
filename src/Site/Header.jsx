import React from 'react'
import Context from './Context.jsx'
import Link from '@/ui/Link.jsx'
import { Icon } from '@abw/badger-react-ui'
import { Toggle } from '@abw/react-night-and-day'

const Header = ({
  sidebarIconClick,
  site,
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
        { Boolean(site.repository) &&
          <a href={site.repository} target="_blank" rel="noreferrer">
            <Icon name={site.repoIcon || 'github'}/>
          </a>
        }
        <Toggle/>
      </div>
    </nav>
  </header>

export default Context.Consumer(Header)