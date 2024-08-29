import { useState, useRef } from 'react'
import { Generator } from '@abw/react-context'
import { useTheme } from '@abw/react-night-and-day'
import { useWindow } from '@abw/badger-react-ui'
// import { defaultSite } from './Config.js'
import { splitHash } from '@abw/badger-utils'
import { now } from '@abw/badger-timestamp'

const defaultSite = {
  version:  '0.0.1',
  title:    'Badger Website',
  date:     now().date()
}

const Context = ({
  render,
  site=defaultSite,
  smallScreenBreakpoints='mobile tablet',
  ...props
}) => {
  // Sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const openSidebar   = () => setSidebarOpen(true)
  const closeSidebar  = () => setSidebarOpen(false)
  const toggleSidebar = () => setSidebarOpen( open => ! open )

  const [smallScreenSidebarOpen, setSmallScreenSidebarOpen] = useState(false)
  const openSmallScreenSidebar   = () => setSmallScreenSidebarOpen(true)
  const closeSmallScreenSidebar  = () => setSmallScreenSidebarOpen(false)
  const toggleSmallScreenSidebar = () => setSmallScreenSidebarOpen( open => ! open )

  const { width, breakpoint } = useWindow()
  const smallScreen = splitHash(smallScreenBreakpoints)

  const sidebarIconClick = () => {
    if (smallScreen[breakpoint]) {
      toggleSmallScreenSidebar()
    }
    else if (sidebarOpen) {
      closeSidebar()
      closeSmallScreenSidebar()
    }
    else {
      openSidebar()
      openSmallScreenSidebar()
    }
  }

  // Page metadata
  const [page, setPage] = useState({ })

  // content ref for scrolling main body
  const contentRef = useRef()

  // Light/Dark theme
  const { theme, toggleTheme, isDark, isLight, setDark, setLight } = useTheme()

  return render({
    site,
    page, setPage,
    width, breakpoint,
    sidebarOpen, setSidebarOpen,
    openSidebar, closeSidebar, toggleSidebar,
    smallScreenSidebarOpen, setSmallScreenSidebarOpen,
    openSmallScreenSidebar, closeSmallScreenSidebar, toggleSmallScreenSidebar,
    sidebarIconClick,
    sidebarClick: closeSmallScreenSidebar,
    contentRef,
    theme, toggleTheme, isDark, isLight, setDark, setLight,
    ...props
  })
}

export const SiteContext = Generator(Context)

export const {
  // Provider: SiteProvider,
  Consumer: SiteConsumer,
  Children: SiteChildren,
  Use:      useSite
} = SiteContext

export default SiteContext
