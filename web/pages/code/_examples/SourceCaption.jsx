import Source from '@/code/Source.jsx'
const HTMLSrc = `<b>Hello World!</b>`
/* START */
import React from 'react'
// PRETEND: import { Source } from '@abw/badger-website'
// PRETEND: import HTMLSrc from './_examples/HelloWorld.html?raw'

export const SourceExample = () =>
  <Source
    code={HTMLSrc}
    language="html"
    caption="Hello World"
  />

export default SourceExample