import React from 'react'

export const SidebarTitle = ({
  title,
  controls,
}) =>
  <div className="flex space end mar-b-2">
    <h3 className="mar-b-none">{ title }</h3>
    { Boolean(controls) &&
      controls
    }
  </div>

export default SidebarTitle