import React from 'react'
import SubHeading from '@/page/SubHeading.jsx'
import { expandCodeChildren } from './Utils.jsx'

export const H3 = ({ children }) =>
  <SubHeading { ...expandCodeChildren(children) }/>

export default H3