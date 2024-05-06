import React from 'react'
import Markup from './_examples/markup.html?raw'
import Hello from './_examples/Hello.jsx'
import HelloSrc from './_examples/Hello.jsx?raw'
import Source from '@/code/Source.jsx'
import Example from '@/code/Example.jsx'

const Code = () =>
  <div className="flow">
    <h1>Code Examples</h1>
    <h2 className="font-mono">Source</h2>
    <p>
      Use the <code>Source</code> component to display code with syntax
      highlighting.
    </p>
    <h3>HTML</h3>
    <Source
      code={Markup}
      language="html"
    />
    <h3>JSX</h3>
    <Source
      code={HelloSrc}
      language="jsx"
    />

    <h2 className="font-mono">Example</h2>
    <p>
      Use the <code>Example</code> component to display the source code
      of a React component alongside (or above on smaller screens) the
      output of the component.
    </p>
    <h2>JSX</h2>
    <Example
      Component={Hello}
      code={HelloSrc}
    />

    <h2 className="font-mono">highlightLines</h2>
    <p>
      Use the <code>highlightLines</code> property to highlight one or more
      lines.  For example: <code>11</code>, <code>11,13,17</code>, <code>11-13,17-21</code>.
    </p>
    <h2>JSX</h2>
    <Example
      Component={Hello}
      code={HelloSrc}
      highlightLines="3-6"
    />

  </div>

export default Code