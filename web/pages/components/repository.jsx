import React    from 'react'
import RepositoryCode from './_examples/Repository.jsx'
import RepositorySrc  from './_examples/Repository.jsx?raw'
import Example  from '@/code/Example.jsx'
import Link from '@/ui/Link.jsx'

const Repository = () =>
  <div>
    <h1>Repository</h1>
    <p>
      The <code>Repository</code> component renders a link to the project
      repository taken from the <code>site.repository</code> property of the{' '}
      <Link to="/configuration/site" text="site configuration"/>.  The default
      icon displayed is <code>github</code>.  This can be changed by setting
      the <code>site.repoIcon</code> property.  The icon has the{' '}
      <code>repository</code> CSS class added to it.  You can pass a{' '}
      <code>className</code> property to add another CSS class.
    </p>
    <Example
      Component={RepositoryCode}
      code={RepositorySrc}
    />
  </div>

export default Repository