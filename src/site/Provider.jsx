import React         from 'react'
import PageRouter    from '@/router/Router.jsx'
import Context       from './Context.jsx'
import themeConfig   from './Theme.jsx'
import mdxComponents from '@/mdx/index.jsx'
import { MDXProvider } from '@mdx-js/react'
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
      <MDXProvider components={mdxComponents}>
        <Context.Provider {...props}>
          <RouterProvider router={Router || PageRouter(props)} />
        </Context.Provider>
      </MDXProvider>
    </BadgerReactUITheme.Provider>
  </ReactNightAndDayProvider>

export default SiteProvider