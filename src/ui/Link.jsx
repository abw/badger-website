import React        from 'react'
import ExternalLink from './Link/External.jsx'
import InternalLink from './Link/Internal.jsx'
import { Themed }   from '@abw/badger-react-ui'

const LinkSwitch = ({
  href,
  ...props
}) =>
  href
    ? <ExternalLink href={href} {...props}/>
    : <InternalLink {...props}/>

export const Link = Themed(LinkSwitch, 'Link')
export default Link
