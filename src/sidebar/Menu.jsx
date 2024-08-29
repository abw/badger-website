import React from 'react'
import Item from './MenuItem.jsx'
import { SiteConsumer } from '@/site/Context.jsx'

export const SidebarMenu = SiteConsumer(
  ({
    sidebar={},
    sidebarClick,
    menu,
    menuClass=sidebar.menuClass ?? 'menu',
  }) =>
    <div className={menuClass} onClick={sidebarClick}>
      { menu.map(
        item =>
          <Item
            key={item.to}
            {...item}
          />
      )}
    </div>
)

export default SidebarMenu
