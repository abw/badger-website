const pages = import.meta.glob(
  './pages/**/[a-z_]*.[jt]s?(x)',
  { eager: true }
)

const App = () =>
  <SiteProvider
    pages={pages}
    // ...etc...
  />
