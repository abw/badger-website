import Heading from '@/page/Heading.jsx'
/* START */
import React from 'react'
// PRETEND: import { Heading } from '@abw/badger-website'

const PageWithHeadings = () =>
  <>
    <h1>Page With Heading</h1>
    <Heading text="First Heading"/>
    <p>
      This is some text
    </p>
    <Heading code="Second Heading as Code"/>
    <p>
      This is some text
    </p>
  </>

export default PageWithHeadings

