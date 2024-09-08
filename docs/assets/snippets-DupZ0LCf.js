const n=`const snippets = import.meta.glob(
  './snippets/**/*',
  {
    query: '?raw',
    import: 'default',
  }
)

const App = () =>
  <SiteProvider
    snippets={snippets}
    // ...etc...
  />

export default App`;export{n as default};
