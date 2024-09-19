import React from 'react'
import TocClick from './Click.jsx'
import { classes } from '@abw/badger-react-ui'

const TocTitle = ({ item }) =>
  <h4
    key={item.id}
    onClick={TocClick(item)}
    className={classes({ code: item.code })}
  >
    {item.code || item.title}
  </h4>


export default TocTitle