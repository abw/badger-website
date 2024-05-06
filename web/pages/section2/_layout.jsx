import React from 'react'
import { Outlet } from 'react-router'

const Layout = () =>
  <div className="border bdr-2 pad-a-4 paper">
    <h2 className="mar-t-none">Section 2 Layout</h2>
    <Outlet/>
  </div>

export default Layout