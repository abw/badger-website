import { Snippet } from '@/code/Snippet.jsx'
/* START */
import React from 'react'
// PRETEND: import { Snippet } from '@abw/badger-website'

const SnippetExample = () =>
  <Snippet
    file="code/snippet.html"
    caption="Snippet Example"
    highlightLines="3-5"
  >
    <div className="surface-5 border pad-a-4">
      This is some content to go with a snippet.
    </div>
  </Snippet>

export default SnippetExample