import React    from 'react'
import ReleaseCode from './_examples/Release.jsx'
import ReleaseSrc  from './_examples/Release.jsx?raw'
import Example  from '@/code/Example.jsx'
import Link from '@/ui/Link.jsx'

const Release = () =>
  <div>
    <h1>Release</h1>
    <p>
      The <code>Release</code> component renders the web site version and
      release date, taken from the <code>site.version</code> and{' '}
      <code>site.date</code> properties of the{' '}
      <Link to="/configuration/site" text="site configuration"/>.
    </p>
    <Example
      Component={ReleaseCode}
      code={ReleaseSrc}
    />
  </div>

export default Release