import { useState, useRef } from 'react'
import { Generator } from '@abw/react-context'
import { useTheme } from '@abw/react-night-and-day'
import { useWindow } from '@abw/badger-react-ui'
import { splitHash } from '@abw/badger-utils'
import { now } from '@abw/badger-timestamp'
import { prepareSnippets, prepareExamples } from '@/utils/Code.jsx'

const defaultSite = {
  version:  '0.0.1',
  title:    'Badger Website',
  date:     now().date()
}

const Context = ({
  render,
  site=defaultSite,
  sidebar={},
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
  const [tocs, setTocs] = useState({ })

  const addPageToc = (page, id, item) => {
    setTocs(
      tocs => {
        // console.log(`adding TOC to page ${page}: ${id} =>`, item)
        return {
          ...tocs,
          [page]: {
            ...(tocs[page] || { }),
            [id]: item
          }
        }
      }
    )
  }
  const getPageToc = page => tocs[page]

  // content ref for scrolling main body
  const contentRef = useRef()

  // Light/Dark theme
  const { theme, toggleTheme, isDark, isLight, setDark, setLight } = useTheme()

  // build index of all sidebar items
  const sections = sidebar.sections || [ ]
  const menuItems = sections
    .flatMap(
      section => section.menu || [ ]
    )
    .flatMap(
      item => item.menu || item
    )
    .map(
      item => ({
        ...item,
        // canonical form without any trailing slash
        uri: item.to?.replace(/\/$/, '')
      })
    )

  if (props.debugPages) {
    console.log(`menuItems: `, menuItems)
  }

  const prevNextPage = () => {
    const index = menuItems.findIndex(
      item => item.uri === page.uri
    )
    if (site.debugPages) {
      console.log(
        `menu index for page ${page.uri} is ${index}: `,
        index >= 0
          ? menuItems[index]
          : undefined
      )
    }

    const prev = index > 0
      ? menuItems[index - 1]
      : null
    const next = (index > -1 && index < menuItems.length - 1)
      ? menuItems[index + 1]
      : null
    return [prev, next]
  }

  const snippets = prepareSnippets(props)
  const examples = prepareExamples(props)
  // console.log(`prepared snippets: `, snippets)

  return render({
    ...props,
    site, sidebar, snippets, examples,
    page, setPage, tocs, addPageToc, getPageToc, prevNextPage,
    width, breakpoint,
    sidebarOpen, setSidebarOpen,
    openSidebar, closeSidebar, toggleSidebar,
    smallScreenSidebarOpen, setSmallScreenSidebarOpen,
    openSmallScreenSidebar, closeSmallScreenSidebar, toggleSmallScreenSidebar,
    sidebarIconClick,
    sidebarClick: closeSmallScreenSidebar,
    contentRef,
    theme, toggleTheme, isDark, isLight, setDark, setLight,
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
