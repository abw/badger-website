import React       from 'react'
import UseSiteCode from './_examples/UseSite.jsx'
import UseSiteSrc  from './_examples/UseSite.jsx?raw'
import Example     from '@/code/Example.jsx'
import Link        from '@/ui/Link.jsx'

const UseSite = () =>
  <div>
    <h1 className="font-mono">useSite</h1>
    <p>
      The <code>useSite()</code> hook can be used to access the site context.
    </p>
    <p>
      The context contains the <code>site</code>, the current <code>page</code>,
      numerous state variable and functions, and any other properties that
      you pass to the <Link to="/configuration/site-provider" code="SiteProvider"/>.
    </p>
    <Example
      Component={UseSiteCode}
      code={UseSiteSrc}
      highlightLines="5"
      expand
    />

  </div>

export default UseSite