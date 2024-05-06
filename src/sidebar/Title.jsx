import React from 'react'

export const SidebarTitle = ({
  title,
  controls,
}) =>
  <div className="flex space end">
    <h3>{ title }</h3>
    { Boolean(controls) &&
      controls
    }
  </div>

export default SidebarTitle