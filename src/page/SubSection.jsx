import React from 'react'
import SubHeading from './SubHeading.jsx'

export const SubSection = ({
  children,
  ...props
}) =>
  <section className="page-sub-section">
    <SubHeading {...props}/>
    <div className="page-sub-section-content">
      {children}
    </div>
  </section>

export default SubSection