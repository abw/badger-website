import React from 'react'
import Menu from './Menu.jsx'
import Title from './Title.jsx'
import Details from './Details.jsx'

export const SidebarSection = ({
  title,
  controls,
  className,
  openPath,
  revealable,
  menu,
  children,
  content=children,
  SidebarTitle=Title,
  SidebarDetails=Details,
  SidebarMenu=Menu
}) =>
  <section className={className}>
    { revealable
      ? <SidebarDetails
          title={title}
          menu={menu}
          content={content}
          openPath={openPath}
        />
      : <>
          { Boolean(title) &&
            <SidebarTitle
              title={title}
              controls={controls}
            />
          }
          { menu &&
            <SidebarMenu
              menu={menu}
            />
          }
        </>
    }
    { content }
  </section>

export default SidebarSection