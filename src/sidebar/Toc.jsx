import React from 'react'
import TocMenu from '@/toc/Menu.jsx'
import { useSite } from '@/site/Context.jsx'

export const SidebarToc = ({
  item
}) => {
  const { page } = useSite()
  const pageMatch = item.to === page?.uri || item.to === page?.uri + '/'
  return pageMatch
    ? <TocMenu/>
    : null
}

export default SidebarToc
