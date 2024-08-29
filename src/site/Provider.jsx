import React       from 'react'
import PageRouter  from '@/router/Router.jsx'
import Context     from './Context.jsx'
import themeConfig from './Theme.jsx'
import { RouterProvider } from 'react-router-dom'
import { Theme as BadgerReactUITheme } from '@abw/badger-react-ui'
import { ThemeProvider as ReactNightAndDayProvider } from '@abw/react-night-and-day'

export const SiteProvider = ({
  themeStorageKey='theme',
  theme,
  Router,
  ...props
}) =>
  <ReactNightAndDayProvider storageKey={themeStorageKey}>
    <BadgerReactUITheme.Provider {...themeConfig(theme)}>
      <Context.Provider {...props}>
        <RouterProvider router={Router || PageRouter(props)} />
      </Context.Provider>
    </BadgerReactUITheme.Provider>
  </ReactNightAndDayProvider>

export default SiteProvider