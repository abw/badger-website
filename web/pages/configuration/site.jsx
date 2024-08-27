import React from 'react'
import PropsTable from '@/src/ui/PropsTable.jsx'
import Source from '@/code/Source.jsx'
import site from '@/snippets/config/site.jsx?raw'

const Site = () =>
  <div>
    <h1>Site configuration</h1>
    <p>
      The <code>site</code> option is passed to the <code>Provider</code> component
      to define site configuration options.
    </p>
    <Source
      code={site}
      language="jsx"
      expand
      highlightLines="16"
    />
    <h2>Properties</h2>
    <PropsTable
      items={[
        ['title',      '', 'The title for your site or project'],
        ['author',     '', 'The name of the author of the site or project'],
        ['authorLink', '', "A link to the author's home page, github repository, etc."],
        ['repository', '', 'A link to the repository for the site or project'],
        ['version',    '', 'The version number of the site or project'],
        ['date',       '', 'The release date for the site or project'],
        ['copyright',  '', 'The copyright year or range of years as a text string'],
        ['badgerpower', 'false', 'Flag to add links to https://badgerpower.com in the header and footer'],
        ['basename',    'import.meta.env.BASE_URL', 'Base URL for the site']
      ]}
    />
  </div>

export default Site