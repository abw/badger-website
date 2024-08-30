const snippets = import.meta.glob(
  './my-snippets/**/*',
  {
    query: '?raw',
    import: 'default',
  }
)

const App = () =>
  <SiteProvider
    snippets={snippets}
    matchSnippetsPrefix={/^.\/my-snippets\//}
    // ...etc...
  />

export default App