import React from 'react'
import { classes } from '@abw/badger-react-ui'
import TocClick from './Click.jsx'

const TocLink = ({ item }) =>
  <div
    key={item.id}
    onClick={TocClick(item)}
    className={classes('item', { code: item.code })}
  >
    {item.code || item.title}
  </div>

export default TocLink