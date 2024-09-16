import React from 'react'
import { useSite } from '@/site/Context.jsx'
import { classes } from '@abw/badger-react-ui'

const TocLink = ({ item }) => {
  const { contentRef, scrollOffset = 24 } = useSite()
  return (
    <div
      key={item.id}
      onClick={
        () => {
          contentRef.current?.scrollTo({
            top: item.ref.current?.offsetTop - scrollOffset,
            // behavior: 'smooth'
          })
        }
      }
      className={classes('item', { code: item.code })}
    >
      {item.code || item.title}
    </div>
  )
}

export default TocLink