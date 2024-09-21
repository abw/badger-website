import SubSection from '@/page/SubSection.jsx'
/* START */
import React from 'react'
// PRETEND: import { SubSection } from '@abw/badger-website'

const PageWithSubSections = () =>
  <>
    <h1>Page With SubSections</h1>
    <SubSection title="First Section">
      Section with a title
    </SubSection>
    <SubSection code="SomeCode">
      Section with a monospaced title for code
    </SubSection>
  </>

export default PageWithSubSections

