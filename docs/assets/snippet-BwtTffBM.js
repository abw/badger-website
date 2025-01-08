const t=`import React from 'react'

export type AlertProps = {
  text: string,
  title: string,
  type?: 'info' | 'success' | 'warning' | 'error'
}

export const Alert = ({ type, title, text }: AlertProps) =>
  <div className={\`alert \${type}\`}>
    <h3>{title}</h3>
    <div>
      {text}
    </div>
  </div>
`;export{t as default};
