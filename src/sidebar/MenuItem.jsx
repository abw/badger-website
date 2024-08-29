import React from 'react'
import UILink from '@/ui/Link.jsx'
import MenuSection from './MenuSection.jsx'
import { classes } from '@abw/badger-react-ui'
import { SiteConsumer } from '@/site/Context.jsx'

export const SidebarMenuItem = SiteConsumer(
  ({
    sidebar={},
    itemClass=sidebar.menuItemClass ?? 'item',
    Link=UILink,
    className,
    ...item
  }) =>
    item.menu
      ? <MenuSection {...item}/>
      : <Link
          className={classes(className, itemClass)}
          {...item}
        >
          {item.display}
        </Link>
)

export default SidebarMenuItem
