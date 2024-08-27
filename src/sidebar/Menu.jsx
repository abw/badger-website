import React from 'react'
import UILink from '@/ui/Link.jsx'
import { classes } from '@abw/badger-react-ui'
import { SiteConsumer } from '@/site/Context.jsx'

export const SidebarMenu = SiteConsumer(
  ({
    sidebar={},
    sidebarClick,
    items,
    menuClass=sidebar.menuClass ?? 'menu',
    itemClass=sidebar.menuItemClass ?? 'item',
    Link=UILink
  }) =>
    <div className={menuClass} onClick={sidebarClick}>
      { items.map(
        ({ className, ...item }) =>
          <Link
            key={item.to}
            className={classes(className, itemClass)}
            {...item}
          >
            {item.display}
          </Link>
      )}
    </div>
)

export default SidebarMenu
