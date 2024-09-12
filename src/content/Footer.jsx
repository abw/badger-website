import React            from 'react'
import SiteAuthor       from './Author.jsx'
import SiteCopyright    from './Copyright.jsx'
import SitePowered      from './BadgerPowered.jsx'
import SiteRelease      from './Release.jsx'
import { SiteConsumer } from '@/site/Context.jsx'

export const Footer = SiteConsumer(
  ({
    Copyright=SiteCopyright,
    Author=SiteAuthor,
    Powered=SitePowered,
    Release=SiteRelease
  }) =>
    <footer>
      <nav className="flex space middle gap-4 stack-tablet">
        <div>
          <Powered/>
        </div>
        <div className="flex gap-2 middle center">
          <Copyright/>
          <Author/>
        </div>
        <div className="flex gap-2 middle center">
          <Release/>
        </div>
      </nav>
    </footer>
)

export default Footer

