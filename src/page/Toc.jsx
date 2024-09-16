import React from 'react'
import { usePage } from './Context.jsx'
import TocLink from '../toc/Link.jsx'
import { Icon } from '@abw/badger-react-ui'

export const Toc = ({
  icon = 'angle-right'
}) => {
  const { getToc } = usePage()
  const toc = getToc()

  if (! toc) {
    return null
  }

  return (
    <ul className="toc">
      { Object.values(toc).filter( item => ! item.heading ).map(
        item =>
          <li key={item.id} className="flex gap-1 middle">
            { Boolean(icon) &&
              <Icon name={icon}/>
            }
            <TocLink
              item={item}
            />
          </li>
      )}
    </ul>
  )
}

export default Toc