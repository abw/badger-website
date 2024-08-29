import React from 'react'
import Page from './Page.jsx'

export const makeRoute = ({
  path,
  isLayout,
  Component,
  children,
  ...page
}) => ({
  path,
  children,
  element:
    <Page
      path={path}
      Component={Component}
      isLayout={isLayout}
      page={{ ...page, path }}
    />,
})

