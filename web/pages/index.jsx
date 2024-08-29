import React          from 'react'
import Badger         from '@/svg/badger-website.svg?react'
import BadgerCSS      from '@/svg/badger-css.svg?react'
import BadgerForm     from '@/svg/badger-form.svg?react'
import BadgerIcon     from '@/svg/badger-icon.svg?react'
import BadgerReactUI  from '@/svg/badger-react-ui.svg?react'
import Hero           from '@/content/Hero.jsx'
import PeopleWhoShare from '@/content/PeopleWhoShare.jsx'
import { Tiles }      from '@abw/badger-react-ui'

export const metadata = {
  // noSidebar: true
}

export const Index = () =>
  <div>
    <Hero
      logo={<Badger className="brw-logo"/>}
      title="Badger Website Builder"
      tagline="Powered by Badgers"
      overview="Badger Website is a framework / template which I use to generate the documentation websites for various other badger projects."
    />
    <h2>See it in action</h2>
    <p>
      These are some of the site that have been built using this framework.
    </p>
    <Tiles gap="4" minWidth="10rem">
      <CardLink href="https://badgerpower.com/badger-react-ui/" Picture={BadgerReactUI}/>
      <CardLink href="https://badgerpower.com/badger-form/" Picture={BadgerForm}/>
      <CardLink href="https://badgerpower.com/badger-css/" Picture={BadgerCSS}/>
      <CardLink href="https://badgerpower.com/badger-icon/" Picture={BadgerIcon}/>
      {/* <CardLink href="https://abw.github.io/badger-color/" Picture={BadgerColor}/> */}
    </Tiles>
    <PeopleWhoShare className="mar-t-8">
      <p className="bold">
        This is a work in progress.  It is not complete, not well documented
        and subject to change without notice.
      </p>
    </PeopleWhoShare>
  </div>

const CardLink = ({ href, Picture }) =>
  <a href={href} className="card surface hover border bdr-2 shadow-1 pad-a-4" target="_blank" rel="noreferrer">
    <Picture/>
  </a>

export default Index