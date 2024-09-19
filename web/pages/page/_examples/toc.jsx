import { Heading } from '@/page/Heading.jsx'
import { Section } from '@/page/Section.jsx'
import { PageToc } from '@/page/Toc.jsx'
/* START */
import React from 'react'
// PRETEND: import { Heading, Section, PageToc } from '@abw/badger-website'

const PageWithTOC = () =>
  <>
    <h1>Page With Table of Contents</h1>
    <PageToc/>

    <Heading title="The First Heading"/>
    <Section title="First Section">
      Section one
    </Section>
    <Section title="Second Section">
      Section two
    </Section>

    <Heading title="The Next Heading"/>
    <Section title="Third Section">
      Section three
    </Section>
    <Section title="Fourth Section">
      Section four
    </Section>
  </>

export default PageWithTOC

