import React from 'react'
import Source from '@/code/Source.jsx'
import create from '@/snippets/create?raw'
import install from '@/snippets/install?raw'

const Installation = () =>
  <div>
    <h1>Installation</h1>
    <p>
      Badger Website provides a basic framework for building documentation
      sites for React component libraries.  It is intended to be added to
      sites created using{' '}
      <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>.
      So the first step is to create a new web site using Vite.
    </p>
    <Source
      code={create}
      language="shell"
    />
    <p>
      Then add <code>@abw/badger-website</code> to your project as a development
      dependency.  You&apos;ll probably also want to add <code>sass</code> if
      you&apos;re not already using it.
    </p>
    <Source
      code={install}
      language="shell"
    />
  </div>

export default Installation