import Link  from '@/ui/Link.jsx'
/* START */
import React from 'react'
// PRETEND: import { Link } from '@abw/badger-website'

const LinkExamples = () =>
  <div className="flex gap-2">
    <Link href="https://badgerpower.com" text="BadgerPower" targetBlank/>
    <Link to="/" text="Home Page"/>
    <Link to="/code/snippet"  code="Snippet"/>
  </div>

export default LinkExamples