import React       from 'react'
import Hello       from './_examples/Hello.jsx'
import HelloCode   from './_examples/Hello.jsx?raw'
import { Example } from '@abw/badger-website'

export const ExampleExample = () =>
  <Example
    Component={Hello}
    code={HelloCode}
    language="jsx"
    caption="Hello World!"
    highlightLines="5"
  />

export default ExampleExample