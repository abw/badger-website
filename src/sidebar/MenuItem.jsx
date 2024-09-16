import React from 'react'
import UILink from '@/ui/Link.jsx'
import MenuSection from './MenuSection.jsx'
import { classes } from '@abw/badger-react-ui'
import { useSite } from '@/site/Context.jsx'
import Toc from './Toc.jsx'

export const SidebarMenuItem = ({
  ...item
}) => {
  const {
    sidebar={},
    itemClass=sidebar.menuItemClass ?? 'item',
    Link=UILink,
    className,
  } = useSite()

  return (
    item.menu
      ? <MenuSection {...item}/>
      : <>
          <Link
            className={classes(className, itemClass)}
            {...item}
          >
            {item.display}
          </Link>
          <Toc item={item}/>
        </>
  )
}

export default SidebarMenuItem
