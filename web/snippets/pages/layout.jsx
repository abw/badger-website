import React from 'react'
import { Outlet } from '@abw/badger-website'

const Layout = () =>
  <div className="border bdr-2 pad-a-4 paper">
    <h2 className="mar-v-none">My Section Layout</h2>
    <Outlet/>
  </div>

export default Layout