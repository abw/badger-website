import { Section } from '@/page/Section.jsx'
/* START */
import React from 'react'
// PRETEND: import { Section } from '@abw/badger-website'

const PageWithSections = () =>
  <>
    <h1>Page With Sections</h1>
    <Section title="First Section">
      Section with a title
    </Section>
    <Section code="SomeCode">
      Section with a monospaced title for code
    </Section>
  </>

export default PageWithSections

