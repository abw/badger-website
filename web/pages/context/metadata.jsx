import React       from 'react'
import MetadataCode from './_examples/Metadata.jsx'
import MetadataSrc  from './_examples/Metadata.jsx?raw'
import Example     from '@/code/Example.jsx'
import Link        from '@/ui/Link.jsx'

export const metadata = {
  message: 'Hello World!'
}

const Metadata = () =>
  <div>
    <h1 className="font-mono">metadata</h1>
    <p>
      A page can export a <code>metadata</code> object.  This will be merged
      into the <code>page</code> context data which can be accessed via{' '}
      <Link to="/context/use-site" code="useSite()"/> or {' '}
      <Link to="/context/site-consumer" code="SiteConsumer()"/>.
    </p>
    <p>
      In this example it is perhaps a bit of a pointless exercise because
      the <code>metadata</code> is right there in the file.  The {' '}
      <code>page.message</code> could just as easily be written {' '}
      <code>metadata.message</code>.  However, the <code>page</code> data
      is also accessible in any other components that you might include from
      a page or are used in the site layout.
    </p>
    <Example
      Component={MetadataCode}
      code={MetadataSrc}
      highlightLines="4-6"
      expand
    />

    <h2>Properties</h2>
    <p>
      There are some special properties that can be added to the{' '}
      <code>metadata</code> which can be used to configure various layout
      components.
    </p>
    <p>
      ...but I haven&apos;t documented them yet.
    </p>
    <p>
      TODO: <code>prevNext: false</code> will prevent previous and next links.
      This is required when using a section <code>_layout.jsx</code> file, but
      I want to find a better way to control this.
    </p>

  </div>

export default Metadata