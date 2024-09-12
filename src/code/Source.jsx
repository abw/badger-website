import React from 'react'
import SourceCode from './SourceCode.jsx'
import Split from '@/content/Split.jsx'

export const Source = ({
  children,
  className,
  ...props
}) =>
  children
    ? <Split
        className={className}
        vgap={4}
        {...props}
      >
        <div>
          {children}
        </div>
        <SourceCode {...props}/>
      </Split>
    : <SourceCode
        className={className}
        {...props}
      />

export default Source
