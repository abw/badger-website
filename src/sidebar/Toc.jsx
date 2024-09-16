import React from 'react'
import TocLink from '@/toc/Link.jsx'
import { useSite } from '@/site/Context.jsx'

export const Toc = ({
  item
}) => {
  const { page, getPageToc } = useSite()
  const pageMatch = item.to === page?.uri || item.to === page?.uri + '/'
  if (! pageMatch) {
    return null
  }

  const toc = getPageToc(page.uri)
  if (! toc) {
    return null
  }

  // Bah!  We want to group headings in menus so we need to do some munging
  const sections = [
    { menu: [ ] }
  ]
  Object.values(toc).forEach(
    item => {
      const lastSection = sections.at(-1)
      if (item.heading) {
        if (lastSection.menu.length == 0) {
          lastSection.title = item.heading
        }
        else {
          sections.push({
            title: item.heading,
            menu: [ ]
          })
        }
      }
      else {
        lastSection.menu.push(item)
      }
    }
  )

  // console.log(`sidebar toc: `, toc)
  // console.log(`sidebar toc sections: `, sections)

  return sections.map(
    (section, n) =>
      <div
        key={n}
        className="menu"
      >
        { Boolean(section.title) &&
          <h4>{section.title}</h4>
        }
        { section.menu.map(
          item =>
            <TocLink
              key={item.id}
              item={item}
            />
        )}
      </div>
  )
}

export default Toc
