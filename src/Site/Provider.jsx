import React      from 'react'
import PageRouter from './PageRouter.jsx'
import Context    from './Context.jsx'
import { ThemeProvider } from '@abw/react-night-and-day'
import { RouterProvider } from 'react-router-dom'

export const Provider = ({
  themeStorageKey='theme',
  Router,
  ...props
}) =>
  <ThemeProvider storageKey={themeStorageKey}>
    <Context.Provider {...props}>
      <RouterProvider router={Router || PageRouter(props)} />
    </Context.Provider>
  </ThemeProvider>

export default Provider