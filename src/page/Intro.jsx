import React from 'react'
import { SiteConsumer } from '@/site/Context.jsx'
import { hasValue } from '@abw/badger-utils'
import { toArray } from '@/utils/Coerce.jsx'

export const Intro = SiteConsumer(
  ({
    page={},
    introClass='intro'
  }) => {
    const { intro } = page
    return (hasValue(intro))
      ? <div className={introClass}>
          { toArray(intro).map(
            (p, n) => <p key={n}>{p}</p>
          )}
        </div>
      : null
  }
)

export default Intro