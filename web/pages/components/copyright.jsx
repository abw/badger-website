import React from 'react'
import Link  from '@/ui/Link.jsx'
import Example from '@/code/Example.jsx'
import CopyrightCode from './_examples/Copyright.jsx'
import CopyrightSrc  from './_examples/Copyright.jsx?raw'

const Copyright = () =>
  <div>
    <h1>Copyright</h1>
    <p>
      The <code>Copyright</code> component renders a copyright message
      using the <code>site.copyright</code> property of the{' '}
      <Link to="/configuration/site" code="site"/> configuration.  If this
      isn&apos;t defined then it renders nothing.
    </p>
    <Example
      Component={CopyrightCode}
      code={CopyrightSrc}
    />
  </div>

export default Copyright