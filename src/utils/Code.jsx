import { MATCH_SNIPPETS_PREFIX, MATCH_EXAMPLES_PREFIX } from '@/constants/Code.jsx'
import { fail } from '@abw/badger-utils'

export const prepareSnippets = ({
  snippets={},
  matchSnippetsPrefix=MATCH_SNIPPETS_PREFIX
}) =>
  Object
    .entries(snippets)
    .reduce(
      (snippets, [path, loader]) => {
        const file = path.replace(matchSnippetsPrefix, '')
        snippets[file] = loader
        return snippets
      },
      { }
    )

export const prepareExamples = ({
  examples={},
  examplesSrc={},
  matchExamplesPrefix=MATCH_EXAMPLES_PREFIX
}) =>
  Object
    .entries(examples)
    .reduce(
      (examples, [path, Component]) => {
        const file = path.replace(matchExamplesPrefix, '')
        const code = examplesSrc[path]
          || fail(`Missing examplesSrc entry for ${path}`)
        examples[file] = { Component, code }
        return examples
      },
      { }
    )
