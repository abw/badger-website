const pages = import.meta.glob(
  './my-pages/**/[a-z_]*.[jt]s?(x)',
  { eager: true }
)

const App = () =>
  <SiteProvider
    pages={pages}
    matchPagesPrefix={/^[./]*my-pages/}
    // ...etc...
  />
