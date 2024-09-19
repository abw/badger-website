export * from './Pre.jsx'
import pre from './Pre.jsx'
// import h2 from './H2.jsx'

export const mdxComponents = {
  pre,
  // h2     // Bah!  This doesn't work when the title contains `code`
}

export default mdxComponents