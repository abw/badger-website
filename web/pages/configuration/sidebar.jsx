import React from 'react'
import PropsTable from '@/src/ui/PropsTable.jsx'
import Source from '@/code/Source.jsx'
import sidebar from '@/snippets/config/sidebar.jsx?raw'

const Sidebar = () =>
  <div>
    <h1 className="font-mono">sidebar</h1>
    <p>
      The <code>sidebar</code> option is passed to the <code>SiteProvider</code> component
      to define items to appear in the sidebar.
    </p>
    <Source
      code={sidebar}
      language="jsx"
      expand
      highlightLines="16"
    />
    <h2>Properties</h2>
    <PropsTable
      items={[
        ['title',      '', 'An optional title for the top of the sidebar'],
        ['sections',   '', 'An array of sections in the sidebar'],
        ['menuClass',  'menu', 'A CSS class for the menus in the sidebar'],
        ['menuItemClass',  'item', 'A CSS class for the items in sidebar menus'],
      ]}
    />

    <h2>Sections</h2>
    <p>
      Each element in the <code>sections</code> array should be an object.  It
      can contain a <code>title</code> and a <code>menu</code>, or a
      revealable <code>details</code> component with a <code>summary</code>,
      an <code>openPath</code> and a <code>menu</code>.  The details
      component will be revealed for pages whose paths begin with the{' '}
      <code>openPath</code> prefix.
    </p>
    <p>
      Each item in a <code>menu</code> should be an object containing a{' '}
      <code>to</code> property denoting the path to the page and a <code>text</code>{' '}
      property for the corresponding text to be displayed for the item.
      The <code>code</code> property can be specified as a an alternative to{' '}
      <code>text</code> to render the item in a monospaced font.
    </p>
  </div>

export default Sidebar