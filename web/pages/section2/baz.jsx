import React from 'react'
import Example from '@/code/Example.jsx'

export const metadata = {
  prevNext: false,
}

const Baz = () =>
  <div>
    <h1>The Baz Page</h1>
    <Example
      file="lorem.jsx"
    />
  </div>

export default Baz