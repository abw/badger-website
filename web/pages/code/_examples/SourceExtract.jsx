import Source from '@/code/Source.jsx'
import React from 'react'

export const SourceExtract = () =>
  <div>
    {/* START */}
    <Source
      code="<b>Hello World!</b>"
      language="html"
    />
    {/* END */}
  </div>

export default SourceExtract