import React from 'react'
import Section from './Section.jsx'
import Title from './Title.jsx'
import { SiteConsumer } from '@/site/Context.jsx'

export const SidebarSections = SiteConsumer(
  ({
    sections,
    SidebarSection=Section,
    SidebarTitle=Title,
  }) =>
    sections.map(
      (section, id) =>
        section.menu
          ? <SidebarSection key={id} {...section}/>
          : <SidebarTitle key={id} className="sidebar-title" {...section}/>
    )
)

export default SidebarSections