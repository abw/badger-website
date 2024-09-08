import React from 'react'
import Link from '@/ui/Link.jsx'
import { SiteConsumer } from '@/site/Context.jsx'

export const PrevNextLink = SiteConsumer(
  ({
    text,
    code,
    prev = false,
    codeClass = 'font-mono',
    prevNextTitleClass = 'mar-t-none mar-b-none',
    prevTitleClass = prevNextTitleClass,
    nextTitleClass = `${prevNextTitleClass} text-right`,
    prevPageClass = 'prev',
    nextPageClass = 'next',
    prevPageTitle = 'Previous Page',
    nextPageTitle = 'Next Page',
    title = prev ? prevPageTitle : nextPageTitle,
    className = prev ? prevPageClass : nextPageClass,
    titleClass = prev ? prevTitleClass : nextTitleClass,
    ...props
  }) =>
    <Link
      className={className}
      {...props}
    >
      <h6 className={titleClass}>{title}</h6>
      <div className={code ? codeClass : null}>
        {code ?? text}
      </div>
    </Link>
)

export default PrevNextLink