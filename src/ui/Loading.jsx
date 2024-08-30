import React from 'react'
import { Spinner } from '@abw/badger-react-ui'

export const Loading = ({
  message='Loading...',
  size='x2',
  spinnerSize='x6',
  className=''
}) =>
  <div className={`loading ${size} ${className}`}>
    <Spinner size={spinnerSize}/>
    <div className="message pad-t-4">
      {message}
    </div>
  </div>

export default Loading