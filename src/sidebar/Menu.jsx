import React from 'react'
import UILink from '@/ui/Link.jsx'
import { classes } from '@abw/badger-react-ui'
// import Context from './Context.jsx'
// import MenuTOC from './MenuTOC.jsx'
// import { useResolvedPath } from 'react-router-dom'


export const Menu = ({
  // title, path, tocs, closeSidebar,
  items,
  Link=UILink
}) =>
  <div className="menu border bdr-1">
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

export default Menu

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