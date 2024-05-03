import React from 'react'
import Menu from './Menu.jsx'
import Title from './Title.jsx'

export const SidebarSection = ({
  title,
  controls,
  className,
  menu,
  children,
  SidebarTitle=Title,
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
    { children }
  </section>

export default SidebarSection