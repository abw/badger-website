import SubHeading from '@/page/SubHeading.jsx'
/* START */
import React from 'react'
// PRETEND: import { SubHeading } from '@abw/badger-website'

const PageWithSubHeadings = () =>
  <>
    <h1>Page With Sub-Headings</h1>
    <SubHeading title="First Sub-Heading"/>
    <p>
      This is some text
    </p>
    <SubHeading code="Second Sub-Heading as Code"/>
    <p>
      This is some text
    </p>
  </>

export default PageWithSubHeadings

