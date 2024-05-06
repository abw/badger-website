import React from 'react'
import Menu from './Menu.jsx'
import Title from './Title.jsx'
import Details from './Details.jsx'

export const SidebarSection = ({
  title,
  controls,
  className,
  menu,
  details,
  children,
  content=children,
  SidebarTitle=Title,
  SidebarDetails=Details,
  SidebarMenu=Menu
}) =>
  <section className={className}>
    { Boolean(title) &&
      <SidebarTitle
        title={title}
        controls={controls}
      />
    }
    { menu &&
      <SidebarMenu
        items={menu}
      />
    }
    { details &&
      <SidebarDetails {...details}/>
    }
    { content }
  </section>

export default SidebarSection