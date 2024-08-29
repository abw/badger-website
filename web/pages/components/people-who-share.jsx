import React    from 'react'
import PeopleCode from './_examples/People.jsx'
import PeopleSrc  from './_examples/People.jsx?raw'
import People2Code from './_examples/People2.jsx'
import People2Src  from './_examples/People2.jsx?raw'
import PeopleShortCode from './_examples/PeopleShort.jsx'
import PeopleShortSrc  from './_examples/PeopleShort.jsx?raw'
import Example  from '@/code/Example.jsx'

const People = () =>
  <div>
    <h1>PeopleWhoShare</h1>
    <p>
      The <code>PeopleWhoShare</code> component renders a warning that
      you&apos;re on your own if you want to use this software.
    </p>
    <Example
      Component={PeopleCode}
      code={PeopleSrc}
    />
    <p>
      You can add child content if you want to add something extra.
    </p>
    <Example
      Component={People2Code}
      code={People2Src}
    />
    <p>
      If you think it&apos;s a bit too rambly then the <code>short</code> property
      will cull the second paragraph.  Set <code>freedom</code> to <code>false</code>{' '}
      if you don&apos;t want the last bit.  The <code>logo</code> property can
      also be set to <code>false</code> to get rid of that and you can set a
      custom <code>title</code>.  But at that point you might as well just
      create your own custom warning.
    </p>
    <Example
      Component={PeopleShortCode}
      code={PeopleShortSrc}
    />
  </div>

export default People