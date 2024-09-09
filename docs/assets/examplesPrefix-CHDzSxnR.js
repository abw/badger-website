const e=`const examples = import.meta.glob(
  './my-examples/**/*',
  {
    import: 'default',
  }
)

const examplesSrc = import.meta.glob(
  './my-examples/**/*',
  {
    query: '?raw',
    import: 'default',
  }
)

export const App = () =>
  <SiteProvider
    examples={examples}
    examplesSrc={examplesSrc}
    matchExamplesPrefix={/^.\\/my-examples\\//}
    // ...etc...
  />

`;export{e as default};
