import React from 'react'
import Section from './Section.jsx'

export const SidebarSections = ({
  sections,
  SidebarSection=Section,
}) =>
  sections.map(
    (section, id) =>
      <SidebarSection key={id} {...section}/>
  )

export default SidebarSections