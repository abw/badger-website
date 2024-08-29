import React from 'react'
import Menu from './Menu.jsx'
import { Details } from '@abw/badger-react-ui'
import { useResolvedPath } from 'react-router'

export const SidebarDetails = ({
  title,
  summary=title,
  menu,
  children,
  content=children,
  SidebarMenu=Menu,
  openPath,
}) => {
  const resolved = useResolvedPath()
  const open = openPath && resolved.pathname.slice(0, openPath.length) === openPath
  if (openPath) {
    // console.log(`openPath: ${openPath} vs [${resolved.pathname.slice(0, openPath.length)}]`)
  }

  return (
    <Details summary={summary} open={open}>
      { menu &&
        <SidebarMenu
          menu={menu}
        />
      }
      { content }
    </Details>
  )
}

export default SidebarDetails
// export default SiteConsumer(SidebarDetails)