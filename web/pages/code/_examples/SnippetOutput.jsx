import { Snippet } from '@/code/Snippet.jsx'
/* START */
import React from 'react'
// PRETEND: import { Snippet } from '@abw/badger-website'

const SnippetExample = () =>
  <Snippet
    file="code/snippet.html"
    caption="Snippet Example"
    highlightLines="3-5"
    output
  />

export default SnippetExample