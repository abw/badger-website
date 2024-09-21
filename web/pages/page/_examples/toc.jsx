import Heading from '@/page/Heading.jsx'
import SubHeading from '@/page/SubHeading.jsx'
import PageToc from '@/page/Toc.jsx'
/* START */
import React from 'react'
// PRETEND: import { Heading, SubHeading, PageToc } from '@abw/badger-website'

const PageWithTOC = () =>
  <>
    <h1>Page With Table of Contents</h1>
    <PageToc/>

    <Heading title="The First Heading"/>
    <SubHeading title="First Section"/>
    <p>
      Some content for the first section
    </p>
    <SubHeading title="Second Section"/>
    <p>
      Some content for the first section
    </p>

    <Heading title="The Next Heading"/>
    <SubHeading title="Third Section"/>
    <p>
      Some content for the third section
    </p>
    <SubHeading title="Fourth Section"/>
    <p>
      Some content for the fourth section
    </p>
  </>

export default PageWithTOC

