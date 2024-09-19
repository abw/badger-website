import React from 'react'
import Heading from '@/page/Heading.jsx'

export const H2 = ({ children, ...props }) => {
  console.log(`H2 children: `, children);

  return <Heading title={children}/>
}

export default H2