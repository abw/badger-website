const e=`const pages = import.meta.glob(
  './pages/**/[a-z_]*.mdx',
  { eager: true }
)

const App = () =>
  <SiteProvider
    pages={pages}
    matchPageSuffix ={/\\.mdx$/}
    // ...etc...
  />
`;export{e as default};
