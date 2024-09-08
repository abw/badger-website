const e=`const pages = import.meta.glob(
  './pages/**/[a-z_]*.{js,jsx,ts,tsx,md,mdx}',
  { eager: true }
)

const App = () =>
  <SiteProvider
    pages={pages}
    // ...etc...
  />
`;export{e as default};
