import Repository  from '@/content/Repository.jsx'
/* START */
import React from 'react'
// PRETEND: import { Repository } from '@abw/badger-website'

const MyPage = () =>
  <div className="grid-1 gap-4">
    <Repository/>
    <Repository className="larger"/>
  </div>

export default MyPage