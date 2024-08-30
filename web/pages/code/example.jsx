import React from 'react'
import Snippet from '@/code/Snippet.jsx'
import Example from '@/code/Example.jsx'
import Link from '@/ui/Link.jsx'
import Hello    from './_examples/Hello.jsx'
import HelloSrc from './_examples/Hello.jsx?raw'

const ExamplePage = () =>
  <div>
    <h1 className="font-mono">Example</h1>
    <p>
      Many of the examples shown in this documentation are generated using
      the <code>Example</code> component.
    </p>
    <p>
      The end goal is to show the source code for an example alongside the
      generated output from rendering the component. But this is where things
      get fun, inception style. How do we shown an example of using
      the <code>Example</code> component without actually using
      the <code>Example</code> component?  And if we did, would that cause the{' '}
      <code>Example</code> component to render the <code>Example</code> component,
      which would cause the{' '}
      <code>Example</code> component to render the <code>Example</code> component,
      and so on.
    </p>
    <p>
      Let&apos;s find out!
    </p>
    <p>
      There are two properties that must be passed to the <code>Example</code>{' '}
      component.  The first is the <code>Component</code> which should be a
      React component that can be imported in the usual way (on line 2 in this
      example).  The second is the <code>code</code> property which is the
      source code of the component.  Vite can import this as text from the
      component file by adding the <code>?raw</code> suffix (on line 3).
    </p>
    <p>
      Any other properties (e.g. <code>caption</code>, <code>language</code>,
      <code>highlightLines</code>, etc) are forwarded onto the{' '}
      <Link to="/code/source" code="Source"/> component.
    </p>
    <Snippet
      file="code/example.jsx"
      highlightLines="2-3,8-9"
      expand
    />
    <p>
      When this is rendered it displays the source code using the{' '}
      <Link to="/code/source" code="Source"/> component along with the
      output of the component alongside it (unless you&apos;re using a
      narrow screen in which case it appears below.)
    </p>
    <Example
      Component={Hello}
      code={HelloSrc}
      language="jsx"
      caption="Hello World!"
      highlightLines="5"
    />
  </div>

export default ExamplePage