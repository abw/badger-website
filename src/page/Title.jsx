import React from 'react'
import { SiteConsumer } from '@/site/Context.jsx'
import { hasValue, isString } from '@abw/badger-utils'

export const PageTitle = SiteConsumer(
  ({
    page={},
    codeClass='font-mono'
  }) => {
    let {
      titleText,
      titleCode,
      title = {
        text: titleText ?? titleCode,
        code: titleCode
      }
    } = page
    title = isString(title)
      ? { text: title }
      : title
    const { text, code } = title
    return (hasValue(text ?? code))
      ? <h1 className={code ? codeClass : null}>{text ?? code}</h1>
      : null
  }
)

export default PageTitle