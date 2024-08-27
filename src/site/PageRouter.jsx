import React from 'react'
import defaultLayout from './Layout.jsx'
import { createBrowserRouter } from 'react-router-dom'

export const PageRouter = ({
  pages,
  matchPagesPrefix = /^[./]*pages/,
  matchPageSuffix  = /\.[jt]sx?$/,
  matchIndexPage   = /index$/,
  matchLayout      = /\/_layout$/,
  matchIgnore      = /\/_examples\//,
  matchPlaceholder = /\[(\w+)\]/,
  Layout           = defaultLayout,
  site             = { },
  basename         = site.basename || import.meta.env.BASE_URL
} = { }) => {
  // Cleanup the path names, removing the leading ./...etc.../pages prefix,
  // any .js, .jsx, .ts or .tsx suffixes, removing the final 'index' in an
  // index page, and converting any [example] directories into ':example'
  // route segments
  const routes = Object
    .entries(pages)
    .map(
      ([route, module]) => {
        const path = route
          .replace(matchPagesPrefix, '')
          .replace(matchPageSuffix, '')
          .replace(matchIndexPage, '')
          .replace(matchPlaceholder, ':$1')
        const Component = module.default
        return { path, Component }
      }
    )

  // Build a lookup table from path to route
  const paths = routes
    .filter(
      route => ! route.path.match(matchIgnore)
    )
    .reduce(
      (paths, route) => {
        paths[route.path] = route
        return paths
      },
      { }
    )


  // find all the paths that end in /_layout
  const layoutPaths = Object
    .keys(paths)
    .filter(
      path => path.match(matchLayout)
    )
    .sort(
      (a, b) => b.length - a.length
    )

  // process each layout path
  for (let layoutPath of layoutPaths) {
    const layout = paths[layoutPath]
    delete paths[layoutPath]
    const base  = layoutPath.replace(matchLayout, '/')
    const blen  = base.length
    layout.path = base
    layout.children = [ ]

    // look for an index page in the directory with layout
    const index = paths[base]
    if (index) {
      delete index.path
      index.index = true
      layout.children.push(index)
      delete paths[base]
    }

    // find all the paths under the same directory
    const children = Object
      .keys(paths)
      .filter(
        path => path.slice(0, blen) === base
      )

    // console.log(`children of ${base}: `, children)
    // add child routes to the layout route
    for (let child of children) {
      const route = paths[child]
      delete paths[child]
      child = child.slice(blen)
      // console.log(`- child of ${base}: ${route.path}  => ${child}`)
      route.path = child.length ? child : '/'
      layout.children.push(route)
    }
    // add the layout page as the new page for the base directory
    // console.log(`inserting new ${base} page as layout`)
    paths[base] = layout
  }

  // console.log(`created routes:`, routes)
  if (site.debug) {
    console.log(`PageRouter basename: `, basename)
  }

  return createBrowserRouter(
    [
      {
        path:     '/',
        element:  <Layout/>,
        children: routes
      },
    ],
    {
      basename
    }
  )
}

export default PageRouter
