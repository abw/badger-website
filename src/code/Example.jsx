import React        from 'react'
import LoadExample  from './LoadExample.jsx'
import SourceOutput from './SourceOutput.jsx'

export const Example = ({
  file,
  ...props
}) =>
  file
    ? <LoadExample file={file} {...props}/>
    : <SourceOutput {...props}/>

export default Example
