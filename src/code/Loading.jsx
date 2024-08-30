import React from 'react'
import { Spinner } from '@abw/badger-react-ui'

const Loading = ({
  file,
  type='code',
  loading=`Loading ${type}...`
}) =>
  <div className="source text-center pad-v-8">
    <Spinner size="x4" color="brand"/>
    <div className="text-center">
      <div className="larger">
        {loading}
      </div>
      <div className="smaller">
        {file}
      </div>
    </div>
  </div>

export default Loading