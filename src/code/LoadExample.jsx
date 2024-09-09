import React from 'react'
import Loading from './Loading.jsx'
import SourceOutput from './SourceOutput.jsx'
import { SiteConsumer } from '@/site/Context.jsx'
import { EXAMPLE, LANGUAGE_EXTENSIONS } from '@/constants/Code.jsx'
import { InvalidNameError, NoExtensionError, UnknownExtensionError } from './Error.jsx'

export const LoadExample = SiteConsumer(
  ({
    file,
    language,
    examples,
    ...props
  }) => {
    const [code, setCode] = React.useState(null)
    const [comp, setComp] = React.useState(null)
    const loader = examples[file]

    if (! loader) {
      return (
        <InvalidNameError
          file={file}
          type={EXAMPLE}
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
              type={EXAMPLE}
            />
          )
        }
      }
      else {
        return (
          <NoExtensionError
            file={file}
            type={EXAMPLE}
          />
        )
      }
    }

    const isHTML = language === 'html'

    React.useEffect(
      () => {
        loader.code().then(setCode)
        if (! isHTML) {
          console.log(`${file} is not HTML, loading component`)
          loader.Component().then(
            // Careful!  We must pass a function to setComp because module
            // is already a function.
            module => setComp(() => module)
          )
        }
      },
      [file]
    )

    if (isHTML) {
      if (code) {
        return (
          <SourceOutput
            html={code}
            language={language}
            {...props}
          />
        )
      }
    }
    else {
      if (code && comp) {
        return (
          <SourceOutput
            Component={comp}
            code={code}
            language={language}
            {...props}
          />
        )
      }
    }

    return (
      <Loading
        file={file}
        type={EXAMPLE}
      />
    )
  }
)

export default LoadExample
