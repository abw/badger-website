const e=`const pages = import.meta.glob(
  './my-pages/**/[a-z_]*.{js,jsx,ts,tsx,md,mdx}',
  { eager: true }
)

const App = () =>
  <SiteProvider
    pages={pages}
    matchPagesPrefix={/^[./]*my-pages/}
    // ...etc...
  />
`;export{e as default};
