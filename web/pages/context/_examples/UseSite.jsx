import { useSite } from '@/src/index.jsx'
/* START */
import React from 'react'
// PRETEND: import { useSite } from '@abw/badger-website'

const UseSiteExample = () => {
  const { site, page } = useSite()
  return (
    <div>
      <p>
        The site author is <code>{site.author}</code>
      </p>
      <p>
        The page URI is <code>{page.uri}</code>
      </p>
    </div>
  )
}

export default UseSiteExample