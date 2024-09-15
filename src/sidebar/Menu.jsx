import React from 'react'
import Item from './MenuItem.jsx'
import { SiteConsumer } from '@/site/Context.jsx'

export const SidebarMenu = SiteConsumer(
  ({
    sidebar={},
    sidebarClick,
    menu,
    menuClass=sidebar.menuClass ?? 'menu',
    SidebarMenuItem=Item
  }) =>
    <div className={menuClass} onClick={sidebarClick}>
      { menu.map(
        item =>
          <SidebarMenuItem
            key={item.to}
            {...item}
          />
      )}
    </div>
)

export default SidebarMenu
