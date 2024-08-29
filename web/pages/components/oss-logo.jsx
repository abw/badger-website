import React    from 'react'
import OSSCode from './_examples/OSS.jsx'
import OSSSrc  from './_examples/OSS.jsx?raw'
import Example  from '@/code/Example.jsx'

const OSS = () =>
  <div>
    <h1>OSSLogo</h1>
    <p>
      The <code>OSSLogo</code> component renders the &quot;Open Source Software
      / Opinionated Selfish Software&quot; SVG logo.  You can add a CSS class
      using the <code>className</code> property.  It also has the <code>oss-logo</code>{' '}
      CSS class added to it if you want to target it in CSS.
    </p>
    <Example
      Component={OSSCode}
      code={OSSSrc}
    />
  </div>

export default OSS