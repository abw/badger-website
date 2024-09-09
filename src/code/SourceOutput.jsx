import React from 'react'
import Source from './Source.jsx'

export const SourceOutput = ({
  Component,
  code,
  html,
  className='',
  language='jsx',
  ...props
}) => {
  return (
    <div className={`example grid-2 gap-8 stack-desktop ${className}`}>
      <Source
        code={code||html}
        language={html ? 'html' : language}
        {...props}
      />
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
    </div>
  )
}

export default SourceOutput
