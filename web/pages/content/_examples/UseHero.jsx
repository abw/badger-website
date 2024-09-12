import Hero  from '@/content/Hero.jsx'
/* START */
import React from 'react'
import Logo  from '@/svg/badger-website.svg?react'
// PRETEND: import { Hero } from '@abw/badger-website'

const MyPage = () =>
  <div>
    <Hero
      logo={<Logo className="brw-logo"/>}
      title="Hero Example"
      tagline="Built by Badgers"
      overview="This is the overview.  It's a general description."
      underview="This is the underview.  I couldn't think of a better name for it."
    />
  </div>

export default MyPage