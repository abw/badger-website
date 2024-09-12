import React from 'react'
import SourceCode from './SourceCode.jsx'
import Split from '@/content/Split.jsx'

export const Source = ({
  children,
  ...props
}) =>
  children
    ? <Split vgap={4} {...props}>
        <div>
          {children}
        </div>
        <SourceCode {...props}/>
      </Split>
    : <SourceCode {...props}/>

export default Source
