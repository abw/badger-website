import React from 'react'
import Item from './MenuItem.jsx'
import { SiteConsumer } from '@/site/Context.jsx'

export const SidebarMenuSection = SiteConsumer(
  ({
    sidebar={},
    menuClass=sidebar.menuClass ?? 'menu',
    title,
    menu,
    SidebarMenuItem=Item
  }) =>
    <div className={menuClass}>
      { Boolean(title) &&
        <h4>{title}</h4>
      }
      { menu.map(
        (item, n) =>
          <SidebarMenuItem
            key={item.to || `menu-item-${n}`}
            {...item}
          />
      )}
    </div>
)

export default SidebarMenuSection
