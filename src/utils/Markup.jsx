import { hasValue } from '@abw/badger-utils'

// function to convert `backticks` to <code>backticks</code>
export const codify = (text, codeClass='') =>
  hasValue(text)
    ? text.replace(/`([^`]*)`/g, `<code class=${codeClass}>$1</code>`)
    : ''
