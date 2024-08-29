import React    from 'react'
import AuthorCode from './_examples/Author.jsx'
import AuthorSrc  from './_examples/Author.jsx?raw'
import Example  from '@/code/Example.jsx'
import Link from '@/ui/Link.jsx'

const Author = () =>
  <div>
    <h1>Author</h1>
    <p>
      The <code>Author</code> component renders the author name defined in
      the <code>site.author</code> property of the{' '}
      <Link to="/configuration/site" text="site configuration"/>.
      If the{' '} <code>site.authorLink</code> is defined then this will be
      a link.
    </p>
    <Example
      Component={AuthorCode}
      code={AuthorSrc}
    />
  </div>

export default Author