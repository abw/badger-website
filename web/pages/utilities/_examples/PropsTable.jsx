import PropsTable  from '@/ui/PropsTable.jsx'
/* START */
import React from 'react'
// PRETEND: import { PropsTable } from '@abw/badger-website'

const PropsTableExample = () =>
  <PropsTable
    items={[
      ['foo', '10', 'Quite loud'],
      ['bar', '11', 'One Louder'],
      [
        'baz', '99',
        [
          'First paragraph.',
          'Second paragraph with some `code`'
        ]
      ],
    ]}
  />

export default PropsTableExample