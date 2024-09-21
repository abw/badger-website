import React from 'react'
import Heading from '@/page/Heading.jsx'
import { expandCodeChildren } from './Utils.jsx'

export const H2 = ({ children }) =>
  <Heading { ...expandCodeChildren(children) }/>

export default H2