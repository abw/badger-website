import React from 'react'
import Source from '@/code/Source.jsx'
import create from '@/snippets/create?raw'
import install from '@/snippets/install?raw'
import jsconfig from '@/snippets/jsconfig.json?raw'
import vite from '@/snippets/vite.config.js?raw'

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
      expand
    />
    <p>
      Then add <code>@abw/badger-website</code> to your project as a development
      dependency.  You&apos;ll probably also want to add <code>sass</code> if
      you&apos;re not already using it.  If you plan to use SVG images then
      you&apos;ll also want to add <code>vite-plugin-svgr</code>.  While
      you&apos;re at it, do yourself a favour and add <code>vite-jsconfig-paths</code> too.
    </p>
    <Source
      code={install}
      language="shell"
      expand
    />
    <p>
      Here&apos;s an example of the <code>jsconfig.json</code> configuration
      file you&apos;ll need for <code>vite-jsconfig-paths</code>.  Of course
      you may need to adjust or add lines based on what you&apos;ve got going
      on in your web site.
    </p>
    <Source
      code={jsconfig}
      language="json"
      caption="jsconfig.json"
      expand
    />
    <p>
      You&apos;ll need to add those extra plugins to your <code>vite.config.js</code> file.
      Something like this.
    </p>
    <Source
      code={vite}
      language="javascript"
      caption="vite.config.js"
      expand
    />
  </div>

export default Installation