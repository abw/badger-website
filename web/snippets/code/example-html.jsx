import React       from 'react'
import Hello       from './_examples/Hello.html?raw'
import { Example } from '@abw/badger-website'

export const ExampleHTML = () =>
  <Example
    html={Hello}
    caption="Hello World!"
  />

export default ExampleHTML