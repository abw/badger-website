import React from 'react'
import TocTitle from './Title.jsx'
import TocLink from './Link.jsx'
import { useSite } from '@/site/Context.jsx'

export const TocMenu = ({
  className='toc menu',
  sectionClass='toc-section'
}) => {
  const { page, getPageToc } = useSite()
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
        if (lastSection.menu.length == 0 && ! lastSection.title) {
          lastSection.title = item
        }
        else {
          sections.push({
            title: item,
            menu: [ ]
          })
        }
      }
      else {
        lastSection.menu.push(item)
      }
    }
  )

  return (
    <div className={className}>
      { sections.map(
        (section, n) =>
          <div
            key={n}
            className={sectionClass}
          >
            { Boolean(section.title) &&
              <TocTitle
                item={section.title}
              />
            }
            { section.menu.map(
              item =>
                <TocLink
                  key={item.id}
                  item={item}
                />
            )}
          </div>
      )}
    </div>
  )
}

export default TocMenu
