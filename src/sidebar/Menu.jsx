import React from 'react'
import UILink from '@/ui/Link.jsx'
import { classes } from '@abw/badger-react-ui'

export const SidebarMenu = ({
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

export default SidebarMenu