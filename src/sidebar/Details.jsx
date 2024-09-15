import React from 'react'
import Menu from './Menu.jsx'
import { Details } from '@abw/badger-react-ui'
import { useResolvedPath } from 'react-router'
import { useSite } from '@/site/Context.jsx'

export const SidebarDetails = ({
  title,
  summary=title,
  menu,
  children,
  content=children,
  openPath,
}) => {
  const { SidebarMenu=Menu } = useSite()
  const resolved = useResolvedPath()
  const open = isOpen(resolved.pathname, openPath)
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

const isOpen = (resolved, openPath) => {
  if (! openPath) {
    return false
  }
  if (resolved === openPath) {
    return true
  }
  // We have to be careful here because we might have two sections which are
  // /foo and /food.  When we're matching /foo the next character must be a
  // path separator or the end of string, otherwise we'll match /food
  const slice = resolved.slice(0, openPath.length + 1)
  if (slice === openPath || slice === openPath + '/') {
    return true
  }
  return false
}

export default SidebarDetails
