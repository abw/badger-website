const e=`const examples = import.meta.glob(
  './examples/**/*',
  {
    import: 'default',
  }
)

const examplesSrc = import.meta.glob(
  './examples/**/*',
  {
    query: '?raw',
    import: 'default',
  }
)

export const App = () =>
  <SiteProvider
    examples={examples}
    examplesSrc={examplesSrc}
    // ...etc...
  />

`;export{e as default};
