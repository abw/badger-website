import React from 'react'
import Source from '@/code/Source.jsx'
import install from '@/snippets/install?raw'

const Installation = () =>
  <div>
    <h1>Installation</h1>
    <p>
      Add <code>@abw/badger-website</code> to your project as a development
      dependency.  You&apos;ll probably also want to add <code>sass</code> if
      you&apos;re not already using it.
    </p>
    <Source
      code={install}
      language="shell"
    />
  </div>

export default Installation