import Split  from '@/content/Split.jsx'
/* START */
import React from 'react'
// PRETEND: import { Split } from '@abw/badger-website'

const SplitExample = () =>
  <Split stack="mobile">
    <div className="surface-5 border pad-a-4">
      <h3>First Block</h3>
      <p>
        This is the first block.
      </p>
    </div>
    <div className="surface-5 border pad-a-4">
      <h3>Second Block</h3>
      <p>
        This is the first block.
      </p>
    </div>
  </Split>

export default SplitExample