import Source from '@/code/Source.jsx'
const HTMLSrc = `<div>
  Hello World!
</div>`
/* START */
import React from 'react'
// PRETEND: import { Source } from '@abw/badger-website'
// PRETEND: import HTMLSrc from './_examples/HelloWorld.html?raw'

export const SourceExample = () =>
  <div className="grid-1 gap-4">
    <Source
      code={HTMLSrc}
      language="html"
      caption="Line Numbers"
    />
    <Source
      code={HTMLSrc}
      language="html"
      caption="No Line Numbers"
      lineNumbers={false}
    />
  </div>

export default SourceExample