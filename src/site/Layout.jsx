import React        from 'react'
import SiteHeader   from './Header.jsx'
import SiteFooter   from './Footer.jsx'
import SiteSidebar  from './Sidebar.jsx'
import { Outlet }   from 'react-router-dom'
import { SiteConsumer } from './Context.jsx'
import { CLOSED, OPEN } from './Constants.js'
//import ScrollToTop  from '@/utils/ScrollToTop.js'

export const Layout = SiteConsumer(
  ({
    contentRef,
    theme,
    sidebarOpen,
    smallScreenSidebarOpen,
    Header=SiteHeader,
    Footer=SiteFooter,
    Sidebar=SiteSidebar
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
)

export default Layout