import React from 'react'
import SourceCode from './SourceCode.jsx'
import Split from '@/content/Split.jsx'
import { classes } from '@abw/badger-react-ui'

export const SourceOutput = ({
  Component,
  code,
  html,
  className,
  language='jsx',
  ...props
}) =>
  <Split className={classes(className, 'example')}>
    <div>
      <SourceCode
        code={code||html}
        language={html ? 'html' : language}
        {...props}
      />
    </div>
    { Component
      ? <div className="output">
          <h4 className="caption">Output</h4>
          <Component/>
        </div>
      : null
    }
    { html
      ? <div className="output">
          <h4 className="caption">Output</h4>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      : null
    }
  </Split>

export default SourceOutput
