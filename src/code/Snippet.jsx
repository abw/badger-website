import React from 'react'
import Loading from './Loading.jsx'
import Source from './Source.jsx'
import SourceOutput from './SourceOutput.jsx'
import { useSite } from '@/site/Context.jsx'
import { LANGUAGE_EXTENSIONS, SNIPPET } from '@/constants/Code.jsx'
import { InvalidNameError, NoExtensionError, UnknownExtensionError } from './Error.jsx'

export const Snippet = ({
  file,
  language,
  output,
  ...props
}) => {
  const { snippets } = useSite()
  const [code, setCode] = React.useState(null)
  const loader = snippets[file]
  // console.log(`Snippet snippets: `, snippets)

  if (! loader) {
    return (
      <InvalidNameError
        file={file}
        type={SNIPPET}
      />
    )
  }

  if (! language) {
    const matchExt = file.match(/\.(\w+)$/)
    if (matchExt) {
      const ext = matchExt[1]
      language = LANGUAGE_EXTENSIONS[ext]
      if (! language) {
        return (
          <UnknownExtensionError
            file={file}
            ext={ext}
            type={SNIPPET}
          />
        )
      }
    }
    else {
      return (
        <NoExtensionError
          file={file}
          type={SNIPPET}
        />
      )
    }
  }

  React.useEffect(
    () => {
      // console.log(`loading snippet file: ${file}`)
      loader().then(setCode)
    },
    [file]
  )

  if (code && language === 'html' && output) {
    return (
      <SourceOutput
        html={code}
        vgap={4}
        {...props}
      />
    )
  }

  return code
    ? <Source
        code={code}
        language={language}
        vgap={4}
        {...props}
      />
    : <Loading
        file={file}
        type={SNIPPET}
      />
}

export default Snippet