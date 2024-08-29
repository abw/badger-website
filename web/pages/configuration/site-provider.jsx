import React from 'react'
import Source from '@/code/Source.jsx'
import example from '@/snippets/Provider.jsx?raw'
import PropsTable from '@/ui/PropsTable.jsx'
import Link from '@/ui/Link.jsx'

const Provider = () =>
  <div>
    <h1 className="font-mono">SiteProvider</h1>
    <p>
      The <code>SiteProvider</code> component is the main entry point for the
      web site.  This will usually be called from the main <code>App.jsx</code>{' '}
      file.  It takes a number of configuration options.
    </p>
    <Source
      code={example}
      language="jsx"
    />
    <h2>Properties</h2>
    <PropsTable
      items={[
        ['pages',   '{ }', <>Mapping of page paths to imported components - see <Link to="/configuration/pages" code="pages"/></>],
        ['site',    '{ }', <>Site configuration - see <Link to="/configuration/site" code="site"/></>],
        ['sidebar', '{ }', <>Sidebar configuration - see <Link to="/configuration/sidebar" code="sidebar"/></>],
        ['theme',   '{ }', <>Theme configuration for Badger React UI - see <Link to="/configuration/theme" code="theme"/></>],
        ['themeStorageKey', 'theme', 'Local storage key for dark/light theme'],
        ['Router', 'PageRouter', 'Site router for pages'],
        ['*', '', 'Any other properties you want to add to the site provider'],
      ]}
    />
  </div>

export default Provider