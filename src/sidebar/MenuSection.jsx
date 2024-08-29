import React from 'react'
import Item from './MenuItem.jsx'
import { SiteConsumer } from '@/site/Context.jsx'

export const SidebarMenuSection = SiteConsumer(
  ({
    sidebar={},
    menuClass=sidebar.menuClass ?? 'menu',
    title,
    menu
  }) =>
    <div className={menuClass}>
      { Boolean(title) &&
        <h4>{title}</h4>
      }
      { menu.map(
        item =>
          <Item
            key={item.to}
            {...item}
          />
      )}
    </div>
)

export default SidebarMenuSection
