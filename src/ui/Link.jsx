import React        from 'react'
import ExternalLink from './Link/External.jsx'
import InternalLink from './Link/Internal.jsx'
import { Themed }   from '@abw/badger-react-ui'

const Link = ({
  href,
  ...props
}) =>
  href
    ? <ExternalLink href={href} {...props}/>
    : <InternalLink {...props}/>

export default Themed(Link, 'Link')
