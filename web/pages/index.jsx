import React          from 'react'
import Badger         from '@/svg/badger-website.svg?react'
import BadgerCSS      from '@/svg/badger-css.svg?react'
import BadgerForm     from '@/svg/badger-form.svg?react'
import BadgerIcon     from '@/svg/badger-icon.svg?react'
import BadgerReactUI  from '@/svg/badger-react-ui.svg?react'
import Hero           from '@/content/Hero.jsx'
import PeopleWhoShare from '@/content/PeopleWhoShare.jsx'
import Link           from '@/ui/Link.jsx'
import { Tiles }      from '@abw/badger-react-ui'

export const metadata = {
  // noSidebar: true
}

export const Index = () =>
  <div>
    <Hero
      logo={<Badger className="brw-logo"/>}
      title="Badger Website Builder"
      tagline="Built by Badgers"
      overview="Badger Website is a framework / template which I use to generate the documentation websites for various other badger projects."
    />
    <h2>Features</h2>
    <ul>
      <li>
        Written by me, for me.  It has one happy customer and there&apos;s no-one else to please.
      </li>
      <li>
        It allows me to bootstrap a website for a project in no time at all
      </li>
      <li>
        It mostly Just Works&trade; for my definition of &quot;Works&quot;
      </li>
      <li>
        It has a page router (like Next.js et al) so I can just add pages to
        the <code>pages</code> directory and they&apos;re available
      </li>
      <li>
        Standard layout and styling for all my badger themed sites.
      </li>
      <li>
        Various content components that I use in most sites.
      </li>
      <li>
        Easy generation of menus
      </li>
    </ul>
    <h2>See it in action</h2>
    <p>
      These are some of the sites that have been built using this framework.
    </p>
    <Tiles gap="8" minWidth="10rem">
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
  <Link
    href={href}
    targetBlank
    // className="card surface hover border bdr-2 shadow-1 pad-a-4"
    className="card"
  >
    <Picture/>
  </Link>

export default Index