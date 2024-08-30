import React from 'react'
import { Error } from '@abw/badger-react-ui'

export const CodeError = ({
  file,
  message,
  children,
  title='Failed to load source code'
}) =>
  <Error border icon="exclamation" title={title}>
    <p className="mar-t-none">
      {message || children}
    </p>
    { file &&
      <div className="small">
        <b>File path:</b> <code>{file}</code>
      </div>
    }
  </Error>

export default CodeError