// export const MATCH_PAGES        = './pages/**/[a-z_]*.[jt]s?(x)'
export const MATCH_PAGES_PREFIX = /^[./]*pages/
export const MATCH_PAGE_SUFFIX  = /\.([jt]sx?|mdx?)$/
export const MATCH_INDEX_PAGE   = /index$/
export const MATCH_LAYOUT       = /\/_layout$/
export const MATCH_IGNORE       = /\/_examples\//
export const MATCH_PLACEHOLDER  = /\[(\w+)\]/
