import React from 'react'
import Heading from './Heading.jsx'

export const Section = ({
  children,
  ...props
}) =>
  <section className="page-section">
    <Heading {...props}/>
    <div className="page-section-content">
      {children}
    </div>
  </section>

export default Section