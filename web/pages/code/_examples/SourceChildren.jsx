import Source from '@/code/Source.jsx'
/* START */
import React from 'react'
// PRETEND: import { Source } from '@abw/badger-website'

export const SourceExample = () =>
  <Source
    code="<b>Hello World!</b>"
    language="html"
  >
    <div className="surface-5 border pad-a-2">
      This is some HTML
    </div>
  </Source>

export default SourceExample