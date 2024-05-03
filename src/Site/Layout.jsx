import React        from 'react'
import DefaultHeader       from './Header.jsx'
import DefaultFooter       from './Footer.jsx'
import DefaultSidebar      from './Sidebar.jsx'
//import ScrollToTop  from '@/utils/ScrollToTop.js'
import Context      from './Context.jsx'
import { Outlet }   from 'react-router-dom'
import { CLOSED, OPEN } from './Constants.js'

const Layout = ({
  contentRef,
  theme,
  sidebarOpen,
  smallScreenSidebarOpen,
  Header=DefaultHeader,
  Footer=DefaultFooter,
  Sidebar=DefaultSidebar
}) =>
  <div
    id="site"
    data-sidebar={sidebarOpen ? OPEN : CLOSED}
    data-small-screen-sidebar={smallScreenSidebarOpen ? OPEN : CLOSED}
    data-theme={theme}
  >
    <Header/>
    <div id="app">
      {/* <ScrollToTop/> */}
      <aside>
        <Sidebar/>
      </aside>
      <main id="content" ref={contentRef}>
        <Outlet/>
      </main>
    </div>
    <Footer/>
  </div>

export default Context.Consumer(Layout)