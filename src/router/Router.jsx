import defaultLayout from '@/site/Layout.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { makeRoute } from './Utils.jsx'
import {
  MATCH_PAGES_PREFIX,
  MATCH_PAGE_SUFFIX,
  MATCH_INDEX_PAGE,
  MATCH_LAYOUT,
  MATCH_IGNORE,
  MATCH_PLACEHOLDER
} from '@/constants/Pages.jsx'

export const Router = ({
  pages,
  matchPagesPrefix = MATCH_PAGES_PREFIX,
  matchPageSuffix  = MATCH_PAGE_SUFFIX,
  matchIndexPage   = MATCH_INDEX_PAGE,
  matchLayout      = MATCH_LAYOUT,
  matchIgnore      = MATCH_IGNORE,
  matchPlaceholder = MATCH_PLACEHOLDER,
  Layout           = defaultLayout,
  site             = { },
  basename         = site.basename || import.meta.env.BASE_URL,
} = { }) => {

  // Cleanup the path names, removing the leading ./...etc.../pages prefix,
  // any .js, .jsx, .ts or .tsx suffixes, removing the final 'index' in an
  // index page, and converting any [example] directories into ':example'
  // route segments
  const metas = Object
    .entries(pages)
    .map(
      ([route, module]) => {
        const meta = module.metadata || { }
        meta.uri = meta.path = route
          .replace(matchPagesPrefix, '')
          .replace(matchPageSuffix, '')
          .replace(matchIndexPage, '')
          .replace(matchPlaceholder, ':$1')
        meta.Component = module.default
        return meta
      }
    )

  // Build a lookup table from path to page
  const paths = metas
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
    layout.isLayout = true
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
      layout.children.push(makeRoute(route))
    }
    // add the layout page as the new page for the base directory
    // console.log(`inserting new ${base} page as layout`)
    paths[base] = layout
  }

  const routes = metas.map(makeRoute)

  return createBrowserRouter(
    [
      {
        path:     '/',
        Component: Layout,
        children: routes
      },
    ],
    {
      basename
    }
  )
}

export default Router
