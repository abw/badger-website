import React from 'react'
import Title from '@/sidebar/Title.jsx'
import Menu from '@/sidebar/Menu.jsx'
import Sections from '@/sidebar/Sections.jsx'
import { SiteConsumer } from '@/site/Context.jsx'

export const SiteSidebar = SiteConsumer(
  ({
    sidebar={},
    SidebarTitle=Title,
    SidebarMenu=Menu,
    SidebarSections=Sections,
  }) =>
    <div>
      { Boolean(sidebar.title) &&
        <SidebarTitle title={sidebar.title}/>
      }
      { Boolean(sidebar.menu) &&
        <SidebarMenu items={sidebar.menu}/>
      }
      { Boolean(sidebar.sections) &&
        <SidebarSections sections={sidebar.sections}/>
      }
    </div>
)

export default SiteSidebar