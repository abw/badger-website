import React from 'react'
import { Error } from '@abw/badger-react-ui'
import { capitalize } from '@abw/badger-utils'
import { SNIPPET } from '@/constants/Code.jsx'

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

export const InvalidNameError = ({
  file,
  type=SNIPPET
}) =>
  <CodeError
    file={file}
    message={`Invalid ${type} file specified.`}
  />

export const UnknownExtensionError = ({
  file,
  ext,
  type=SNIPPET,
  component=capitalize(type)
}) =>
  <CodeError
    file={file}
  >
    Cannot determine language from {type} file extension{' '}
    <code>.{ext}</code>. Please specify the <code>language</code>{' '}
    as a property on the <code>{component}</code> component.
  </CodeError>

export const NoExtensionError = ({
  file,
  type=SNIPPET,
  component=capitalize(type)
}) =>
  <CodeError
    file={file}
  >
    No {type} file extension to determine language from.  Please add a file
    extension or specify the <code>language</code> as a property on the{' '}
    <code>{component}</code> component.
  </CodeError>

export default CodeError