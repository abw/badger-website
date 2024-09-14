import React from 'react'

export const SidebarTitle = ({
  title,
  controls,
  className
}) =>
  controls
    ? <div className="flex space end">
        <h3 className={className}>{ title }</h3>
        { Boolean(controls) &&
          controls
        }
      </div>
    : <h3 className={className}>{title}</h3>

export default SidebarTitle