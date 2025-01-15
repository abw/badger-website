import React, { useState } from 'react'
import { createCssVariablesTheme } from 'shiki'
import { getHighlighterCore } from 'shiki/core'
import { transformerNotationHighlight } from '@shikijs/transformers'
import { lineHighlighter, prepareCode, removeLineEndings } from './Utils.jsx'
import { sleep } from '@abw/badger-utils'
import getWasm from 'shiki/wasm'
import { classes } from '@abw/badger-react-ui'

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
    // 'html', 'javascript', 'jsx', 'json','markdown', 'mdx', 'css', 'scss', 'bash', 'yaml'
    import('shiki/langs/html.mjs'),
    import('shiki/langs/javascript.mjs'),
    import('shiki/langs/typescript.mjs'),
    import('shiki/langs/jsx.mjs'),
    import('shiki/langs/tsx.mjs'),
    import('shiki/langs/json.mjs'),
    import('shiki/langs/markdown.mjs'),
    import('shiki/langs/mdx.mjs'),
    import('shiki/langs/css.mjs'),
    import('shiki/langs/scss.mjs'),
    import('shiki/langs/bash.mjs'),
    import('shiki/langs/yaml.mjs')
  ],
  loadWasm: getWasm
})

export const SourceCode = ({
  code,
  language='jsx',
  caption,
  expand=false,
  fixed=expand,
  className='',
  highlightLines,
  lineNumbers=true,
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

  const cls = classes(
    'source',
    className,
    expanded ? 'expanded' : null,
    fixed ? 'fixed-open' : 'expandable',
    lineNumbers ? null : 'no-line-numbers'
  )

  return (
    // <div className={`source ${className} ${expanded ? 'expanded' : ''} ${fixed ? 'fixed-open' : 'expandable'}`}>
    <div className={cls}>
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

export default SourceCode
