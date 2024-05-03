import { useState, useRef } from 'react'
import { Generator } from '@abw/react-context'
import { useTheme } from '@abw/react-night-and-day'
import { useWindow } from '@abw/badger-react-ui'
import { defaultSite, smallScreenBreakpoints } from './Config.js'

const SiteContext = ({
  render,
  site=defaultSite,
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

  const { theme } = useTheme()
  const { width, breakpoint } = useWindow()

  const sidebarIconClick = () => {
    if (smallScreenBreakpoints[breakpoint]) {
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

  // content ref for scrolling main body
  const contentRef = useRef()

  return render({
    site, theme,
    width, breakpoint,
    sidebarOpen, setSidebarOpen,
    openSidebar, closeSidebar, toggleSidebar,
    smallScreenSidebarOpen, setSmallScreenSidebarOpen,
    openSmallScreenSidebar, closeSmallScreenSidebar, toggleSmallScreenSidebar,
    sidebarIconClick,
    contentRef,
    ...props
  })
}

const generated = Generator(SiteContext)
export const {
  Context, Provider, Consumer, Children,
  Use: useSite
} = generated

export default generated
