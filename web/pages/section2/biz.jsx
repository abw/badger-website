import { Button } from '@abw/badger-react-ui'
import React from 'react'

export const metadata = {
  prevNext: false,
}

const Biz = () =>
  <div>
    <h1>The Biz Page</h1>
    <div className="flex gap-2 mar-b-2">
      <Button color="brand" text="Brand Button"/>
      <a href="/" className="button">Link Button</a>
      <a href="/" className="brand button">Brand Link Button</a>
    </div>
  </div>

export default Biz