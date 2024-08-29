import React       from 'react'
import ConsumerCode from './_examples/Consumer.jsx'
import ConsumerSrc  from './_examples/Consumer.jsx?raw'
import Example     from '@/code/Example.jsx'
import Link        from '@/ui/Link.jsx'

const SiteConsumer = () =>
  <div>
    <h1 className="font-mono">SiteConsumer</h1>
    <p>
      The <code>SiteConsumer()</code> higher order function can be used
      to wrap a component as an alternative to calling{' '}
      <Link to="/context/use-site" code="useSite()"/>.
    </p>
    <p>
      The context properties will be added to the properties passed to the
      component.
    </p>
    <Example
      Component={ConsumerCode}
      code={ConsumerSrc}
      highlightLines="4"
      expand
    />

  </div>

export default SiteConsumer