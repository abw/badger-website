import React from 'react'
import { classes } from '@abw/badger-react-ui'

export const Split = ({
  children,
  split = 2,
  gap   = 8,
  hgap  = gap,
  vgap  = gap,
  align = 'top',
  stack = 'laptop',
  className
}) =>
  <div className="container split">
    <div
      className={
        classes(
          className,
          align,
          `grid-${split} stack-${stack} gap-v-${vgap} gap-h-${hgap}`
        )
      }
      style={{ '--prose-width': '100%' }}
    >
      {children}
    </div>
  </div>

export default Split
