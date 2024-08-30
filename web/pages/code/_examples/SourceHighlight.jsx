import Source from '@/code/Source.jsx'
const HTMLSrc = `<div>
  <p>
    <b>Hello World!</b>
  </p>
  <p>
    This example has
    some lines highlighted
  </p>
</div>`
/* START */
import React from 'react'
// PRETEND: import { Source } from '@abw/badger-website'
// PRETEND: import HTMLSrc from './_examples/HelloWorld.html?raw'

export const SourceExample = () =>
  <Source
    code={HTMLSrc}
    language="html"
    highlightLines="3,6-7"
  />

export default SourceExample