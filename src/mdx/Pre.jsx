import React from 'react'
import Source from '@/code/Source.jsx'

const Pre = ({ children, ...props }) => {
  const { className='', children: code } = children.props
  const match = className.match(/language-(\w+)(?:\?(.*))?/)
  props.language ||= match?.[1]
  return (
    <Source
      code={code}
      {...props}
      expand
    />
  )
}

export default Pre