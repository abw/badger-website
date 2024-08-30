import React from 'react'
import { sleep } from '@abw/badger-utils'
import { useState } from 'react'
import { createCssVariablesTheme } from 'shiki'
import { getHighlighterCore } from 'shiki/core'
import { transformerNotationHighlight } from '@shikijs/transformers'
import { lineHighlighter, prepareCode, removeLineEndings } from './Utils.jsx'
import getWasm from 'shiki/wasm'

const cssvars = 'css-variables'
const cssVarsTheme = createCssVariablesTheme({
  name: cssvars,
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true
})

const highlighter = getHighlighterCore({
  themes: [cssVarsTheme],
  langs: [
    // 'html', 'javascript', 'jsx', 'json', 'css', 'scss', 'bash', 'yaml'
    import('shiki/langs/html.mjs'),
    import('shiki/langs/javascript.mjs'),
    import('shiki/langs/jsx.mjs'),
    import('shiki/langs/json.mjs'),
    import('shiki/langs/css.mjs'),
    import('shiki/langs/scss.mjs'),
    import('shiki/langs/bash.mjs'),
    import('shiki/langs/yaml.mjs')
  ],
  loadWasm: getWasm
})

export const Source = ({
  children,
  code=children,
  language='jsx',
  caption,
  expand=false,
  fixed=expand,
  className='',
  highlightLines,
  undent=false,
  raw=false
}) => {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(expand)
  const [markup, setMarkup] = useState('Loading...')
  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    sleep(2000).then(() => setCopied(false))
  }
  React.useEffect(
    () => {
      const transformers = [ removeLineEndings ]

      if (highlightLines) {
        transformers.push(
          lineHighlighter(highlightLines)
        )
      }
      highlighter.then(
        highlighter => setMarkup(
          highlighter.codeToHtml(
            raw ? code : prepareCode(code, { undent }),
            {
              lang: language,
              theme: cssvars,
              transformers: [
                transformerNotationHighlight(),
                ...transformers
              ],
            }
          )
        )
      )
    },
    [code, language, highlightLines]
  )

  return (
    <div className={`source ${className} ${expanded ? 'expanded' : ''} ${fixed ? 'fixed-open' : 'expandable'}`}>
      {Boolean(caption) && <h4 className="caption">{caption}</h4>}
      <div className="controls">
        <div className="expand" onClick={() => setExpanded(! expanded)}>
          { expanded ? 'Compress' : 'Expand' }
        </div>
        <div
          className={`clipboard ${copied ? 'copied' : ''}`}
          onClick={copy}
        >
          { copied ? 'Copied' : 'Copy' }
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </div>
  )
}

export default Source
