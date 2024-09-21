import React from 'react'
import TocClick from './Click.jsx'
import { classes } from '@abw/badger-react-ui'

const TocTitle = ({ item }) =>
  <h4
    key={item.id}
    onClick={TocClick(item)}
    className={classes({ 'font-mono': item.code })}
  >
    { item.children
      ? <span>{item.children}</span>
      : (item.code || item.title)
    }
  </h4>


export default TocTitle