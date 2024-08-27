import React from 'react'
import Source from '@/code/Source.jsx'
import example from '@/snippets/Provider.jsx?raw'

const Provider = () =>
  <div>
    <h1>Provider</h1>
    <p>
      The <code>Provider</code> component is the main entry point for the
      web site.  This will usually be called from the main <code>App.jsx</code>{' '}
      file.  It takes a number of configuration options.
    </p>
    <Source
      code={example}
      language="jsx"
    />
    <p>
      TODO: introduction to configuration options
    </p>
  </div>

export default Provider