import { MATCH_SNIPPETS_PREFIX } from '@/constants/Snippets.jsx'

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
