import React from 'react'
import Loading from './Loading.jsx'
import Source from './Source.jsx'
import Error from './Error.jsx'
import { SiteConsumer } from '@/site/Context.jsx'
import { LANGUAGE_EXTENSIONS } from '@/constants/Snippets.jsx'

export const Snippet = SiteConsumer(
  ({
    file,
    language,
    snippets,
    ...props
  }) => {
    const [code, setCode] = React.useState(null)
    const loader = snippets[file]
    // console.log(`Snippet snippets: `, snippets)

    if (! loader) {
      return (
        <Error
          file={file}
          message="Invalid snippet file specified."
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
            <Error
              file={file}
            >
              Cannot determine language from snippet file extension{' '}
              <code>.{ext}</code>. Please specify the <code>language</code>{' '}
              as a property on the <code>Snippet</code> component.
            </Error>
          )
        }
      }
      else {
        return (
          <Error
            file={file}
          >
            No file extension to determine language from.  Please add a file
            extension or specify the <code>language</code> as a property on
            the <code>Snippet</code> component.
          </Error>
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

    return code
      ? <Source code={code} language={language} {...props}/>
      : <Loading file={file} type="snippet"/>
  }
)

export default Snippet