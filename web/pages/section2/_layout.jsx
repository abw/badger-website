import { Info } from '@abw/badger-react-ui'
import React from 'react'
import { Outlet } from 'react-router'

const Layout = () =>
  <div className="border bdr-2 pad-a-4 paper">
    <h2 className="mar-v-none">Section 2 Layout</h2>
    <Outlet/>
    <Info border icon="info" className="mar-b-1">
      This is a dummy section for testing.  There is a <code>_layout.jsx</code>{' '}
      file in the <code>pages/section2</code> directory which adds this custom
      layout to all pages under this directory.
    </Info>
  </div>

export default Layout