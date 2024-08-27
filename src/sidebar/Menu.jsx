import React from 'react'
import UILink from '@/ui/Link.jsx'
import { classes } from '@abw/badger-react-ui'
import { SiteConsumer } from '@/site/Context.jsx'


export const SidebarMenu = SiteConsumer(
  ({
    sidebar={},
    sidebarClick,
    items,
    menuClass=sidebar.menuClass ?? 'menu border bdr-1',
    Link=UILink
  }) =>
    <div className={menuClass} onClick={sidebarClick}>
      { items.map(
        ({ className, ...item }) =>
          <Link
            key={item.to}
            className={classes(className, 'item')}
            {...item}
          >
            {item.display}
          </Link>
      )}
    </div>
)

export default SidebarMenu

/*
const Menu = ({title, path, items, tocs, closeSidebar}) => {
  const resolved = useResolvedPath()
  const open = path && resolved.pathname.slice(0, path.length) === path

  return (
    <details className="menu" open={open}>
      <summary>{title}</summary>
      <ul>
        { items.map(
          item => {
            const active = resolved.pathname === item.to
            return (
              <li key={item.to} onClick={closeSidebar}>
                <Link className="item" {...item}/>
                { (Boolean(item.tocName) && active && tocs[item.tocName]) &&
                  <MenuTOC toc={tocs[item.tocName]}/>
                }
              </li>
            )
          }
        )}
      </ul>
    </details>
  )
}
*/

// export default Context.Consumer(Menu)