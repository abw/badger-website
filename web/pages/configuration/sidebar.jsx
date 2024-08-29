import React from 'react'
import PropsTable from '@/src/ui/PropsTable.jsx'
import Source from '@/code/Source.jsx'
import sidebar from '@/snippets/config/sidebar.jsx?raw'

const Sidebar = () =>
  <div>
    <h1 className="font-mono">sidebar</h1>
    <p>
      The <code>sidebar</code> option is passed to the{' '}
      <code>SiteProvider</code> component to define items to appear in
      the sidebar.
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
      can contain a <code>title</code>, a <code>menu</code> and/or some
      additional <code>content</code>.  The <code>revealable</code> property
      can be set <code>true</code> to make it a revealable details component.
      The <code>openPath</code> property can be used to specify a base URL
      path. The menu will be revealed by default for pages whose paths begin with that
      prefix.
    </p>
    <PropsTable
      items={[
        ['title',      '', 'A title for the section'],
        ['revealable', 'false', 'Boolean flag to indicate if the `menu` and/or `content` should be in a revealable details component'],
        ['openPath',  '', 'A URL prefix for pages for which the details should be revealed by default'],
        ['menu',  '', 'An array of menu items'],
      ]}
    />

    <h2>Menu Items</h2>
    <p>
      Each item in a <code>menu</code> should be an object containing a{' '}
      <code>to</code> property denoting the path to the page and a <code>text</code>{' '}
      property for the corresponding text to be displayed for the item.
      The <code>code</code> property can be specified as a an alternative to{' '}
      <code>text</code> to render the item in a monospaced font.
    </p>
    <p>
      An item in a <code>menu</code> can also have a nested <code>menu</code>{' '}
      array and an optional <code>title</code> for that sub-menu.  If a{' '}
      <code>menu</code> property is present then any other properties (except
      the optional <code>title</code> are ignored).
    </p>
    <PropsTable
      items={[
        ['to',   '', 'A URL for the page being linked'],
        ['text', '', 'Text for the menu item'],
        ['code', '', 'An alternative to `text` which is rendered in a monospaced font'],
        ['menu', '', 'A nested menu'],
        ['title', '', 'A title for the nested menu'],
      ]}
    />
  </div>

export default Sidebar