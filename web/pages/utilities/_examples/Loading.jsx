import Loading from '@/ui/Loading.jsx'
/* START */
import React from 'react'
// PRETEND: import { Loading } from '@abw/badger-website'

const LoadingExamples = () =>
  <div className="grid-1 center gap-4">
    <Loading/>
    <Loading
      size="small"
      spinnerSize="x2"
      message="Big wheels keep on turning..."
      className="surface-4 border bdr-2 pad-a-4"
    />
  </div>

export default LoadingExamples